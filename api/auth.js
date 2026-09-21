/**
 * KINETIX ATHLETIC LAB - FIREBASE FIRESTORE AUTH & ATHLETE API
 * Project: kinetix-3121
 * Backed by Google Cloud Firestore via Firebase Admin SDK
 */

const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');
const fs = require('fs');

const MASTER_ADMIN_EMAIL = 'bilallodhi824@gmail.com';
const MASTER_ADMIN_DEFAULT_PASS = 'Admin@Kinetix2026';

let dbInstance = null;

function getDb() {
  if (dbInstance) return dbInstance;

  if (getApps().length === 0) {
    let serviceAccount = null;

    // 1. Check environment variable (Vercel Production)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      try {
        serviceAccount = typeof process.env.FIREBASE_SERVICE_ACCOUNT === 'string'
          ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
          : process.env.FIREBASE_SERVICE_ACCOUNT;
      } catch (e) {
        console.error('Error parsing FIREBASE_SERVICE_ACCOUNT env var:', e);
      }
    }

    // 2. Check local service-account JSON file
    if (!serviceAccount) {
      const candidates = [
        path.join(__dirname, '..', 'firebase-service-account.json'),
        path.join(process.cwd(), 'firebase-service-account.json')
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) {
          serviceAccount = JSON.parse(fs.readFileSync(p, 'utf8'));
          break;
        }
      }
    }

    if (!serviceAccount) {
      throw new Error('Firebase Service Account credentials not found in env or local file.');
    }

    const app = initializeApp({
      credential: cert(serviceAccount)
    });
    dbInstance = getFirestore(app);
  } else {
    dbInstance = getFirestore();
  }

  return dbInstance;
}

// Seed default accounts to Firestore if not already present
async function seedDefaultUsersIfEmpty(db) {
  const usersCol = db.collection('athletes');
  const snapshot = await usersCol.get();

  if (snapshot.empty) {
    const defaultAthletes = [
      {
        id: 'usr_admin_01',
        name: 'Bilal Khan',
        email: MASTER_ADMIN_EMAIL,
        password: MASTER_ADMIN_DEFAULT_PASS,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        tier: 'HEAD OF PERFORMANCE',
        joinedDate: '2026-09-01',
        status: 'Active',
        lastActive: 'Just now',
        workoutsCompleted: 142
      }
    ];

    for (const athlete of defaultAthletes) {
      await usersCol.doc(athlete.id).set(athlete);
    }
  } else {
    // Ensure Bilal Khan Master Admin is always up-to-date and present
    const adminDoc = await usersCol.where('email', '==', MASTER_ADMIN_EMAIL).limit(1).get();
    if (adminDoc.empty) {
      await usersCol.doc('usr_admin_01').set({
        id: 'usr_admin_01',
        name: 'Bilal Khan',
        email: MASTER_ADMIN_EMAIL,
        password: MASTER_ADMIN_DEFAULT_PASS,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        tier: 'HEAD OF PERFORMANCE',
        joinedDate: '2026-09-01',
        status: 'Active',
        lastActive: 'Just now',
        workoutsCompleted: 142
      });
    } else {
      const doc = adminDoc.docs[0];
      if (doc.data().name !== 'Bilal Khan') {
        await doc.ref.update({ name: 'Bilal Khan' });
      }
    }
  }
}

// Main handler compatible with Vercel Serverless & Node http.Server
async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead ? res.writeHead(200) : (res.statusCode = 200);
    return res.end();
  }

  // Parse action from query or url
  let url = req.url;
  let action = '';
  if (req.query && req.query.action) {
    action = req.query.action;
  } else {
    const qIndex = url.indexOf('?');
    if (qIndex !== -1) {
      const sp = new URLSearchParams(url.substring(qIndex));
      action = sp.get('action') || '';
    }
  }

  // Parse JSON body if present
  let body = {};
  if (req.body && typeof req.body === 'object') {
    body = req.body;
  } else if (req.body && typeof req.body === 'string') {
    try { body = JSON.parse(req.body); } catch(e) {}
  } else if (req.method === 'POST') {
    body = await new Promise((resolve) => {
      let data = '';
      req.on('data', chunk => { data += chunk; });
      req.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve({}); }
      });
    });
  }

  const sendJson = (statusCode, payload) => {
    if (res.status) {
      res.status(statusCode).json(payload);
    } else {
      res.writeHead(statusCode, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(payload));
    }
  };

  try {
    const db = getDb();
    await seedDefaultUsersIfEmpty(db);
    const athletesCol = db.collection('athletes');

    // 1. GET ALL USERS / INITIALIZE
    if (req.method === 'GET' || action === 'users' || action === 'init') {
      const snapshot = await athletesCol.get();
      const users = [];
      snapshot.forEach(doc => {
        users.push(doc.data());
      });
      return sendJson(200, {
        success: true,
        source: 'firebase-firestore',
        database: 'kinetix-3121',
        users
      });
    }

    // 2. SIGN IN / LOGIN
    if (action === 'login') {
      const email = (body.email || '').trim().toLowerCase();
      const password = body.password || '';

      if (!email || !password) {
        return sendJson(400, { success: false, message: 'Email and password are required.' });
      }

      const snap = await athletesCol.where('email', '==', email).limit(1).get();
      if (snap.empty) {
        return sendJson(404, { success: false, message: 'No account registered with this email.' });
      }

      const userDoc = snap.docs[0];
      const user = userDoc.data();

      if (user.password !== password) {
        return sendJson(401, { success: false, message: 'Invalid password. Please try again.' });
      }

      // Update last active
      await athletesCol.doc(user.id).update({ lastActive: 'Just now' });
      user.lastActive = 'Just now';

      return sendJson(200, {
        success: true,
        source: 'firebase-firestore',
        user,
        message: `Welcome back, ${user.name}!`
      });
    }

    // 3. REGISTER NEW ATHLETE
    if (action === 'register') {
      const name = (body.name || '').trim();
      const email = (body.email || '').trim().toLowerCase();
      const password = body.password || '';

      if (!name) return sendJson(400, { success: false, message: 'Name is required.' });
      if (!email) return sendJson(400, { success: false, message: 'Valid email is required.' });
      if (!password || password.length < 6) return sendJson(400, { success: false, message: 'Password must be at least 6 characters.' });

      // Check for duplicate
      const existing = await athletesCol.where('email', '==', email).limit(1).get();
      if (!existing.empty) {
        return sendJson(409, { success: false, message: 'An account with this email already exists.' });
      }

      const isMasterAdmin = email === MASTER_ADMIN_EMAIL.toLowerCase();
      const newAthlete = {
        id: 'usr_' + Date.now(),
        name,
        email,
        password,
        role: isMasterAdmin ? 'admin' : 'client',
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
        tier: isMasterAdmin ? 'HEAD OF PERFORMANCE' : 'NEW ATHLETE',
        joinedDate: new Date().toISOString().split('T')[0],
        status: 'Active',
        lastActive: 'Just now',
        workoutsCompleted: 0
      };

      await athletesCol.doc(newAthlete.id).set(newAthlete);

      return sendJson(201, {
        success: true,
        source: 'firebase-firestore',
        user: newAthlete,
        message: 'Account registered successfully in Firebase Firestore!'
      });
    }

    // 4. ADMIN TOGGLE STATUS
    if (action === 'toggleStatus') {
      const { userId } = body;
      if (!userId) return sendJson(400, { success: false, message: 'userId is required' });

      const docRef = athletesCol.doc(userId);
      const doc = await docRef.get();
      if (!doc.exists) return sendJson(404, { success: false, message: 'Athlete not found.' });

      const current = doc.data();
      const nextStatus = current.status === 'Active' ? 'Suspended' : 'Active';
      await docRef.update({ status: nextStatus });
      current.status = nextStatus;

      return sendJson(200, {
        success: true,
        source: 'firebase-firestore',
        user: current,
        message: `Athlete status updated to ${nextStatus}.`
      });
    }

    // 5. ADMIN DELETE ATHLETE
    if (action === 'delete') {
      const { userId } = body;
      if (!userId) return sendJson(400, { success: false, message: 'userId is required' });

      const docRef = athletesCol.doc(userId);
      const doc = await docRef.get();
      if (!doc.exists) return sendJson(404, { success: false, message: 'Athlete not found.' });

      const athlete = doc.data();
      if (athlete.email === MASTER_ADMIN_EMAIL) {
        return sendJson(403, { success: false, message: 'Cannot delete the Master Admin account.' });
      }

      await docRef.delete();
      return sendJson(200, {
        success: true,
        source: 'firebase-firestore',
        message: `Athlete ${athlete.name} successfully removed from Firebase.`
      });
    }

    // 6. RECORD WORKOUT LOG
    if (action === 'logWorkout') {
      const { userId, workoutTitle, totalVolumeKg, setsCount, durationMins } = body;
      const logDoc = db.collection('workout_logs').doc();
      const entry = {
        id: logDoc.id,
        userId: userId || 'anonymous',
        workoutTitle: workoutTitle || 'Full Performance Workout',
        totalVolumeKg: Number(totalVolumeKg) || 0,
        setsCount: Number(setsCount) || 0,
        durationMins: Number(durationMins) || 0,
        loggedAt: new Date().toISOString()
      };
      await logDoc.set(entry);

      // Increment athlete's workout count if userId provided
      if (userId) {
        const userRef = athletesCol.doc(userId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const currentCount = userDoc.data().workoutsCompleted || 0;
          await userRef.update({ workoutsCompleted: currentCount + 1 });
        }
      }

      return sendJson(200, {
        success: true,
        source: 'firebase-firestore',
        workout: entry,
        message: 'Workout session persisted to Firebase cloud.'
      });
    }

    return sendJson(400, { success: false, message: `Unknown action: ${action}` });
  } catch (error) {
    console.error('Firebase API error:', error);
    return sendJson(500, {
      success: false,
      message: 'Internal Firebase Error: ' + error.message
    });
  }
}

module.exports = handler;
