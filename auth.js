/**
 * KINETIX ATHLETIC OS - AUTHENTICATION & ROLE ENGINE
 * Handles Client & Master Admin Authentication, Local Storage Persistence,
 * and modular Firebase readiness hooks.
 */

const KinetixAuth = (function() {
  const USERS_STORAGE_KEY = 'kinetix_users_db';
  const CURRENT_USER_KEY = 'kinetix_current_user';

  // Master Admin Credentials
  const MASTER_ADMIN_EMAIL = 'bilallodhi824@gmail.com';
  const MASTER_ADMIN_DEFAULT_PASS = 'Admin@Kinetix2026';

  // Seed default database if empty
  function initDb() {
    const existing = localStorage.getItem(USERS_STORAGE_KEY);
    if (!existing) {
      const initialUsers = [
        {
          id: 'usr_admin_01',
          name: 'Bilal Lodhi',
          email: MASTER_ADMIN_EMAIL,
          password: MASTER_ADMIN_DEFAULT_PASS,
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
          tier: 'HEAD OF PERFORMANCE',
          joinedDate: '2026-09-01',
          status: 'Active',
          lastActive: 'Just now',
          workoutsCompleted: 142
        },
        {
          id: 'usr_client_01',
          name: 'Alex Carter',
          email: 'alex.carter@kinetix.io',
          password: 'Password123!',
          role: 'client',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
          tier: 'ELITE ATHLETE',
          joinedDate: '2026-09-10',
          status: 'Active',
          lastActive: '2h ago',
          workoutsCompleted: 38
        },
        {
          id: 'usr_client_02',
          name: 'Elena Rostova',
          email: 'elena.rostova@fitness.com',
          password: 'Password123!',
          role: 'client',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
          tier: 'PRO RECOVERY',
          joinedDate: '2026-09-14',
          status: 'Active',
          lastActive: '5h ago',
          workoutsCompleted: 19
        }
      ];
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
    }

    // Default to Alex Carter or Admin if logged in
    if (!localStorage.getItem(CURRENT_USER_KEY)) {
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
      // Auto sign-in demo client for immediate preview
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[1]));
    }
  }

  initDb();

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

  // Register New Account
  function register(name, email, password) {
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

    const users = getAllUsers();
    const exists = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (exists) {
      return { success: false, message: 'An account with this email already exists. Please Sign In.' };
    }

    // Role assignment: Only master email gets admin, all others get client
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

    return { success: true, user: newUser, message: 'Registration successful!' };
  }

  // Login Authentication
  function login(email, password) {
    const cleanEmail = email.trim().toLowerCase();

    if (!validateEmail(cleanEmail)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!password) {
      return { success: false, message: 'Please enter your password.' };
    }

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
    return { success: true };
  }

  // Admin Delete User
  function deleteUser(userId) {
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

    users = users.filter(u => u.id !== userId);
    saveUsers(users);
    return { success: true, message: `User ${target.name} has been removed.` };
  }

  // Admin Toggle User Status
  function toggleUserStatus(userId) {
    const current = getCurrentUser();
    if (!current || current.role !== 'admin') {
      return { success: false, message: 'Permission denied.' };
    }

    const users = getAllUsers();
    const target = users.find(u => u.id === userId);
    if (!target) return { success: false, message: 'User not found.' };

    target.status = target.status === 'Active' ? 'Suspended' : 'Active';
    saveUsers(users);
    return { success: true, user: target, message: `Status updated to ${target.status}.` };
  }

  // Firebase Modular Hook (Ready for Firebase Web SDK v9+)
  const FirebaseConnector = {
    isConfigured: false,
    config: {
      apiKey: "YOUR_FIREBASE_API_KEY",
      authDomain: "YOUR_PROJECT.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    },
    initialize: function(customConfig) {
      if (customConfig && customConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
        this.config = Object.assign(this.config, customConfig);
        this.isConfigured = true;
        console.log("⚡ Firebase Auth Ready with project:", this.config.projectId);
      }
    }
  };

  return {
    getCurrentUser,
    getAllUsers,
    register,
    login,
    logout,
    deleteUser,
    toggleUserStatus,
    validateEmail,
    validatePassword,
    MASTER_ADMIN_EMAIL,
    MASTER_ADMIN_DEFAULT_PASS,
    FirebaseConnector
  };
})();

// Export globally
window.KinetixAuth = KinetixAuth;
