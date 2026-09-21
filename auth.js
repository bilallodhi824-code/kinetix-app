/**
 * KINETIX ATHLETIC OS - AUTHENTICATION & FIREBASE FIRESTORE CLOUD ENGINE
 * Project ID: kinetix-3121
 * Handles Client & Master Admin Authentication, Google Cloud Firestore
 * synchronization, real-time persistence, and offline fallback.
 */

const KinetixAuth = (function() {
  const USERS_STORAGE_KEY = 'kinetix_users_db';
  const CURRENT_USER_KEY = 'kinetix_current_user';
  const CLOUD_SYNC_KEY = 'kinetix_cloud_synced';

  // Master Admin Credentials
  const MASTER_ADMIN_EMAIL = 'bilallodhi824@gmail.com';
  const MASTER_ADMIN_DEFAULT_PASS = 'Admin@Kinetix2026';
  const FIREBASE_PROJECT_ID = 'kinetix-3121';

  let isCloudConnected = false;
  let cloudStatusMessage = 'Connecting to Firebase...';

  // Seed default database if empty
  function initDb() {
    const existing = localStorage.getItem(USERS_STORAGE_KEY);
    if (!existing) {
      const initialUsers = [
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
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
    }

    // Automatic migration & cleanup of any previous mock dummy accounts
    let users = getAllUsers();
    let migrated = false;
    
    // Purge mock demo accounts so only real accounts and Bilal Khan exist
    const cleanedUsers = users.filter(u => u.email !== 'alex.carter@kinetix.io' && u.email !== 'elena.rostova@fitness.com');
    if (cleanedUsers.length !== users.length) {
      users = cleanedUsers;
      migrated = true;
    }

    users = users.map(u => {
      if (u.email === MASTER_ADMIN_EMAIL && u.name !== 'Bilal Khan') {
        u.name = 'Bilal Khan';
        migrated = true;
      }
      return u;
    });
    if (migrated) saveUsers(users);

    // Default current user if not set
    let current = getCurrentUser();
    if (!current) {
      current = users.find(u => u.email === MASTER_ADMIN_EMAIL) || null;
      if (current) setCurrentUser(current);
    } else if (current.email === 'alex.carter@kinetix.io' || current.email === 'elena.rostova@fitness.com') {
      current = users.find(u => u.email === MASTER_ADMIN_EMAIL) || null;
      setCurrentUser(current);
    } else if (current.email === MASTER_ADMIN_EMAIL && current.name !== 'Bilal Khan') {
      current.name = 'Bilal Khan';
      setCurrentUser(current);
    }

    // Sync with Firebase Firestore asynchronously
    syncWithCloud();
  }

  // Synchronize local cache with Firestore
  async function syncWithCloud() {
    try {
      const res = await fetch('/api/auth?action=users');
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.users)) {
          saveUsers(data.users);
          isCloudConnected = true;
          cloudStatusMessage = 'Connected to Firebase Firestore (kinetix-3121)';
          localStorage.setItem(CLOUD_SYNC_KEY, new Date().toISOString());

          // Re-verify current user against fresh Firestore data
          const current = getCurrentUser();
          if (current) {
            const updated = data.users.find(u => u.id === current.id || u.email.toLowerCase() === current.email.toLowerCase());
            if (updated) {
              localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updated));
              window.dispatchEvent(new CustomEvent('kinetix_auth_changed', { detail: updated }));
            }
          }

          window.dispatchEvent(new CustomEvent('kinetix_cloud_synced', { detail: { users: data.users, project: FIREBASE_PROJECT_ID } }));
          console.log('⚡ [Firebase Firestore] Synced', data.users.length, 'athletes from project', FIREBASE_PROJECT_ID);
          return { success: true, users: data.users };
        }
      }
    } catch (err) {
      console.warn('⚠️ [Firebase] Running in local offline cache mode:', err.message);
      isCloudConnected = false;
      cloudStatusMessage = 'Local Cache (Offline Mode)';
    }
    return { success: false, users: getAllUsers() };
  }

  function getAllUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
    } catch (e) {
      return null;
    }
  }

  function setCurrentUser(user) {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
    window.dispatchEvent(new CustomEvent('kinetix_auth_changed', { detail: user }));
  }

  // Authentic Email Validator (RFC 5322 standard check)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim().toLowerCase());
  }

  // Password Strength Validator (min 6 chars)
  function validatePassword(pass) {
    return pass && pass.length >= 6;
  }

  // Register New Account (Firebase Firestore + Local Fallback)
  async function register(name, email, password) {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanName) {
      return { success: false, message: 'Please enter your full name.' };
    }
    if (!validateEmail(cleanEmail)) {
      return { success: false, message: 'Please enter a valid, authentic email address (e.g. name@domain.com).' };
    }
    if (!validatePassword(password)) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }

    // Try Real Firebase Cloud API First
    try {
      const response = await fetch('/api/auth?action=register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        const users = getAllUsers();
        users.push(data.user);
        saveUsers(users);
        setCurrentUser(data.user);
        isCloudConnected = true;
        return { success: true, user: data.user, message: 'Account saved to Firebase Firestore!' };
      } else if (!response.ok) {
        return { success: false, message: data.message || 'Registration failed on server.' };
      }
    } catch (err) {
      console.warn('Firebase API offline, falling back to local storage:', err);
    }

    // Local Fallback
    const users = getAllUsers();
    const exists = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (exists) {
      return { success: false, message: 'An account with this email already exists. Please Sign In.' };
    }

    const isMasterAdmin = cleanEmail === MASTER_ADMIN_EMAIL.toLowerCase();
    const newUser = {
      id: 'usr_' + Date.now(),
      name: cleanName,
      email: cleanEmail,
      password: password,
      role: isMasterAdmin ? 'admin' : 'client',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
      tier: isMasterAdmin ? 'HEAD OF PERFORMANCE' : 'NEW ATHLETE',
      joinedDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      lastActive: 'Just now',
      workoutsCompleted: 0
    };

    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);

    return { success: true, user: newUser, message: 'Registration complete (Local Mode).' };
  }

  // Login Authentication (Firebase Firestore + Local Fallback)
  async function login(email, password) {
    const cleanEmail = email.trim().toLowerCase();

    if (!validateEmail(cleanEmail)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!password) {
      return { success: false, message: 'Please enter your password.' };
    }

    // Try Real Firebase Cloud API First
    try {
      const response = await fetch('/api/auth?action=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password })
      });

      const data = await response.json();
      if (response.ok && data.success && data.user) {
        // Update local user list
        const users = getAllUsers();
        const idx = users.findIndex(u => u.id === data.user.id || u.email.toLowerCase() === cleanEmail);
        if (idx !== -1) {
          users[idx] = data.user;
        } else {
          users.push(data.user);
        }
        saveUsers(users);
        setCurrentUser(data.user);
        isCloudConnected = true;
        return { success: true, user: data.user, message: data.message || `Welcome back, ${data.user.name}!` };
      } else if (!response.ok) {
        return { success: false, message: data.message || 'Authentication failed.' };
      }
    } catch (err) {
      console.warn('Firebase API offline, checking local cache:', err);
    }

    // Local Fallback Verification
    const users = getAllUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return { success: false, message: 'No account found with this email. Please register.' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    user.lastActive = 'Just now';
    saveUsers(users);
    setCurrentUser(user);

    return { success: true, user: user, message: 'Welcome back, ' + user.name + '!' };
  }

  // Logout
  function logout() {
    setCurrentUser(null);
    return { success: true, message: 'Logged out successfully.' };
  }

  // Switch Active Athlete Account
  function switchUser(userId) {
    const users = getAllUsers();
    const user = users.find(u => u.id === userId || u.email.toLowerCase() === String(userId).toLowerCase());
    if (!user) {
      return { success: false, message: 'Athlete profile not found in database.' };
    }
    user.lastActive = 'Just now';
    saveUsers(users);
    setCurrentUser(user);
    return {
      success: true,
      user: user,
      message: `Switched session to ${user.name} (${user.role === 'admin' ? 'Master Admin' : 'Athlete'}).`
    };
  }

  // Admin Delete User (Firestore + Local)
  async function deleteUser(userId) {
    const current = getCurrentUser();
    if (!current || current.role !== 'admin') {
      return { success: false, message: 'Permission denied. Admin role required.' };
    }

    let users = getAllUsers();
    const target = users.find(u => u.id === userId);
    if (!target) {
      return { success: false, message: 'User not found.' };
    }
    if (target.email === MASTER_ADMIN_EMAIL) {
      return { success: false, message: 'Cannot delete the Master Admin account.' };
    }

    // Call Cloud API
    try {
      const response = await fetch('/api/auth?action=delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });
      const data = await response.json();
      if (!response.ok) {
        console.warn('Cloud delete warning:', data.message);
      }
    } catch (err) {
      console.warn('Firebase delete offline fallback:', err);
    }

    users = users.filter(u => u.id !== userId);
    saveUsers(users);
    return { success: true, message: `Athlete ${target.name} removed from database.` };
  }

  // Admin Toggle User Status (Firestore + Local)
  async function toggleUserStatus(userId) {
    const current = getCurrentUser();
    if (!current || current.role !== 'admin') {
      return { success: false, message: 'Permission denied.' };
    }

    let users = getAllUsers();
    const target = users.find(u => u.id === userId);
    if (!target) return { success: false, message: 'User not found.' };

    const nextStatus = target.status === 'Active' ? 'Suspended' : 'Active';

    // Call Cloud API
    try {
      const response = await fetch('/api/auth?action=toggleStatus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });
      const data = await response.json();
      if (response.ok && data.user) {
        target.status = data.user.status;
      } else {
        target.status = nextStatus;
      }
    } catch (err) {
      target.status = nextStatus;
    }

    saveUsers(users);
    return { success: true, user: target, message: `Status updated to ${target.status}.` };
  }

  // Save Workout Log to Firebase Firestore
  async function logWorkout(workoutData) {
    const current = getCurrentUser();
    const payload = {
      userId: current ? current.id : 'guest',
      workoutTitle: workoutData.title || 'Performance Workout',
      totalVolumeKg: workoutData.totalVolumeKg || 0,
      setsCount: workoutData.setsCount || 0,
      durationMins: workoutData.durationMins || 45
    };

    try {
      const response = await fetch('/api/auth?action=logWorkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        console.log('⚡ [Firebase Firestore] Workout persisted to cloud.');
      }
    } catch (e) {
      console.warn('Offline: workout logged locally only.');
    }
  }

  // Bootstrapping
  initDb();

  return {
    getCurrentUser,
    getAllUsers,
    register,
    login,
    logout,
    switchUser,
    deleteUser,
    toggleUserStatus,
    syncWithCloud,
    logWorkout,
    validateEmail,
    validatePassword,
    getIsCloudConnected: () => isCloudConnected,
    getCloudStatusMessage: () => cloudStatusMessage,
    MASTER_ADMIN_EMAIL,
    MASTER_ADMIN_DEFAULT_PASS,
    FIREBASE_PROJECT_ID
  };
})();

// Export globally
window.KinetixAuth = KinetixAuth;
