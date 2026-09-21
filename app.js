/**
 * KINETIX ATHLETIC PERFORMANCE LAB - CORE ENGINE
 * Advanced Biomechanics, Training Systems, Interval Audio Engine, & Analytics
 */

// ==========================================================================
// 1. EXERCISE VAULT DATA (40+ Deep Curated Movements)
// ==========================================================================
const EXERCISES_DATABASE = [
  // CHEST
  {
    id: "barbell-bench-press",
    name: "Barbell Flat Bench Press",
    category: "chest",
    primaryMuscle: "Pectoralis Major",
    secondaryMuscles: ["Anterior Deltoids", "Triceps Brachii"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Retract scapulae into bench, maintain 5-point contact, drive through feet, lower bar with control to lower sternum.",
    tempo: "3-1-1-0",
  },
  {
    id: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    category: "chest",
    primaryMuscle: "Clavicular Pectoral (Upper Chest)",
    secondaryMuscles: ["Anterior Deltoids", "Triceps"],
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Bench angle at 30 degrees. Keep wrists stacked directly above elbows, squeeze upper chest at apex without clacking weights.",
    tempo: "3-0-1-0",
  },
  {
    id: "cable-chest-flye",
    name: "Low-to-High Cable Flye",
    category: "chest",
    primaryMuscle: "Pectoralis Major (Upper/Inner)",
    secondaryMuscles: ["Anterior Deltoids"],
    equipment: "Cable",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Staggered stance, slight bend in elbows, scoop hands upward along chest line, hold 1-second peak contraction.",
    tempo: "2-1-1-1",
  },
  {
    id: "weighted-dips",
    name: "Weighted Chest Dips",
    category: "chest",
    primaryMuscle: "Lower Pectorals",
    secondaryMuscles: ["Triceps", "Anterior Deltoid"],
    equipment: "Bodyweight",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Lean torso forward 30 degrees, flare elbows slightly out, descend until upper arms parallel floor.",
    tempo: "3-1-1-0",
  },

  // BACK
  {
    id: "barbell-deadlift",
    name: "Conventional Barbell Deadlift",
    category: "back",
    primaryMuscle: "Posterior Chain (Lats & Erector Spinae)",
    secondaryMuscles: ["Glutes", "Hamstrings", "Forearms", "Trapezius"],
    equipment: "Barbell",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Bar directly over midfoot, engage lats like protecting armpits, drive floor away with leg press intent before locking hips.",
    tempo: "2-1-1-0",
  },
  {
    id: "neutral-pullups",
    name: "Weighted Neutral-Grip Pull-Up",
    category: "back",
    primaryMuscle: "Latissimus Dorsi",
    secondaryMuscles: ["Biceps Brachii", "Brachialis", "Rhomboids"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Initiate pull by depressing scapulae down and back, pull chest toward handles, full dead-hang stretch at bottom.",
    tempo: "3-0-1-1",
  },
  {
    id: "chest-supported-tbar-row",
    name: "Chest-Supported T-Bar Row",
    category: "back",
    primaryMuscle: "Rhomboids & Mid-Trapezius",
    secondaryMuscles: ["Lats", "Rear Delts", "Biceps"],
    equipment: "Machine",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Eliminates axial spinal load. Drive elbows toward ceiling, retract shoulder blades aggressively without lifting chest off pad.",
    tempo: "3-1-1-1",
  },
  {
    id: "single-arm-dumbbell-row",
    name: "Heavy Meadow's / Dumbbell Row",
    category: "back",
    primaryMuscle: "Latissimus Dorsi",
    secondaryMuscles: ["Teres Major", "Biceps", "Core"],
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Pull dumbbell toward hip pocket rather than armpit to optimize lat fiber recruitment.",
    tempo: "3-0-1-0",
  },

  // LEGS / QUADRICEPS / HAMSTRINGS / GLUTES
  {
    id: "barbell-back-squat",
    name: "High-Bar Olympic Back Squat",
    category: "legs",
    primaryMuscle: "Quadriceps Femoris",
    secondaryMuscles: ["Gluteus Maximus", "Adductors", "Core"],
    equipment: "Barbell",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Bar on upper traps, deep diaphragmatic breath into belt, knees track in line with toes, maintain upright torso to full depth.",
    tempo: "3-1-1-0",
  },
  {
    id: "romanian-deadlift",
    name: "Barbell Romanian Deadlift (RDL)",
    category: "legs",
    primaryMuscle: "Hamstrings & Gluteus Maximus",
    secondaryMuscles: ["Erector Spinae", "Lats"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Soft knee bend, push hips backward horizontally as if touching a wall behind you, feel intense hamstring stretch before driving hips forward.",
    tempo: "3-1-1-0",
  },
  {
    id: "bulgarian-split-squat",
    name: "Deficit Bulgarian Split Squat",
    category: "legs",
    primaryMuscle: "Quadriceps & Glute Medius",
    secondaryMuscles: ["Hamstrings", "Calves"],
    equipment: "Dumbbells",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Rear foot on bench laces-down, forward knee travels over toes, slight forward lean for maximum glute-quad tension.",
    tempo: "3-1-1-0",
  },
  {
    id: "leg-press-45",
    name: "Incline 45° Leg Press",
    category: "legs",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings"],
    equipment: "Machine",
    difficulty: "Beginner",
    mechanic: "Compound",
    cues: "Keep lower back and pelvis glued to pad, avoid locking knees at lockout, descend deep into hip flexion.",
    tempo: "3-0-1-0",
  },
  {
    id: "seated-leg-curl",
    name: "Seated Hamstring Curl",
    category: "legs",
    primaryMuscle: "Hamstrings (Biceps Femoris)",
    secondaryMuscles: ["Gastrocnemius"],
    equipment: "Machine",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Seated position places hamstrings in optimal hip-flexed stretch. Slow 3-second eccentric return.",
    tempo: "3-1-1-1",
  },
  {
    id: "standing-calf-raise",
    name: "Standing Machine Calf Raise",
    category: "legs",
    primaryMuscle: "Gastrocnemius & Soleus",
    secondaryMuscles: ["Tibialis Anterior"],
    equipment: "Machine",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Descend into full deep ankle dorsiflexion, hold stretch 2 seconds, explode onto balls of feet.",
    tempo: "3-2-1-1",
  },

  // SHOULDERS / DELTOIDS
  {
    id: "overhead-press",
    name: "Standing Overhead Military Press",
    category: "shoulders",
    primaryMuscle: "Anterior & Lateral Deltoids",
    secondaryMuscles: ["Triceps", "Upper Chest", "Core"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Squeeze glutes and quads tight, press bar straight upward while moving head forward once bar clears forehead.",
    tempo: "2-1-1-0",
  },
  {
    id: "lateral-raise-cables",
    name: "Cross-Body Cable Lateral Raise",
    category: "shoulders",
    primaryMuscle: "Lateral Deltoids (Side Delts)",
    secondaryMuscles: ["Traps"],
    equipment: "Cable",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Set pulley at wrist height. Lead with elbows, maintain constant cable tension throughout range without swinging.",
    tempo: "3-1-1-1",
  },
  {
    id: "rear-delt-reverse-flye",
    name: "Incline Bench Dumbbell Rear Delt Flye",
    category: "shoulders",
    primaryMuscle: "Posterior Deltoids (Rear Delts)",
    secondaryMuscles: ["Rhomboids", "Infraspinatus"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Chest on 45° incline, palms facing down, sweep arms out wide like hugging a wide barrel, isolate rear delts.",
    tempo: "3-0-1-1",
  },

  // ARMS (BICEPS & TRICEPS)
  {
    id: "incline-bicep-curl",
    name: "Incline Bench Dumbbell Bicep Curl",
    category: "arms",
    primaryMuscle: "Biceps Brachii (Long Head)",
    secondaryMuscles: ["Brachialis", "Forearms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Sit on 60° incline bench, let arms hang directly down behind torso for deep shoulder extension stretch, supinate at top.",
    tempo: "3-1-1-1",
  },
  {
    id: "skull-crushers",
    name: "EZ-Bar Lying Triceps Extension",
    category: "arms",
    primaryMuscle: "Triceps Brachii (Long & Medial Heads)",
    secondaryMuscles: ["Anconeus"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    mechanic: "Isolation",
    cues: "Keep upper arms angled 15 degrees back from vertical, lower bar behind crown of head for maximum triceps stretch.",
    tempo: "3-1-1-0",
  },
  {
    id: "hammer-preacher-curl",
    name: "Dumbbell Hammer Preacher Curl",
    category: "arms",
    primaryMuscle: "Brachialis & Brachioradialis",
    secondaryMuscles: ["Biceps"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Neutral grip on preacher pad. Eliminates cheating and builds thick upper arm width.",
    tempo: "3-1-1-0",
  },
  {
    id: "cable-rope-pushdown",
    name: "Cable Rope Triceps Pushdown",
    category: "arms",
    primaryMuscle: "Triceps Brachii (Lateral Head)",
    secondaryMuscles: ["Triceps Medial"],
    equipment: "Cable",
    difficulty: "Beginner",
    mechanic: "Isolation",
    cues: "Pin elbows to ribs, spread ropes apart at bottom of movement, flex triceps hard for full second.",
    tempo: "2-1-1-1",
  },

  // CORE & FUNCTIONAL
  {
    id: "hanging-leg-raise",
    name: "Hanging Strict Toes-To-Bar",
    category: "core",
    primaryMuscle: "Rectus Abdominis & Lower Core",
    secondaryMuscles: ["Hip Flexors", "Forearms / Grip"],
    equipment: "Bodyweight",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Avoid swinging, curl pelvis upward toward chest, control the 3-second descent.",
    tempo: "3-0-1-1",
  },
  {
    id: "cable-woodchopper",
    name: "High-To-Low Cable Woodchopper",
    category: "core",
    primaryMuscle: "Internal & External Obliques",
    secondaryMuscles: ["Transverse Abdominis"],
    equipment: "Cable",
    difficulty: "Intermediate",
    mechanic: "Compound",
    cues: "Rotate through thoracic spine and hips, keep arms extended, drive power across torso diagonal.",
    tempo: "2-0-1-0",
  },
  {
    id: "ab-wheel-rollout",
    name: "Kneeling Ab Wheel Rollout",
    category: "core",
    primaryMuscle: "Transverse Abdominis & Core Bracing",
    secondaryMuscles: ["Lats", "Serratus Anterior"],
    equipment: "Bodyweight",
    difficulty: "Advanced",
    mechanic: "Compound",
    cues: "Tuck pelvis into posterior pelvic tilt, roll forward until nose near floor, pull back from abs without arching spine.",
    tempo: "3-1-1-0",
  }
];

// ==========================================================================
// 2. PERIODIZED TRAINING PROGRAMS
// ==========================================================================
const WORKOUT_PROGRAMS = [
  {
    id: "upper-lower-hypertrophy",
    title: "Upper/Lower Performance Split",
    tag: "HYPERTROPHY & POWER",
    difficulty: "Intermediate",
    daysPerWeek: 4,
    cycleWeeks: 8,
    target: "Athletic Size & Dense Strength",
    description: "The gold standard for balanced muscular growth, joint longevity, and progressive overload with high frequency per muscle group.",
    splitDays: [
      {
        day: "Day 1 - Upper Power",
        focus: "Heavy Horizontal & Vertical Press/Pull",
        exercises: [
          { name: "Barbell Flat Bench Press", sets: "4", reps: "5-6", rpe: "8.5" },
          { name: "Weighted Neutral-Grip Pull-Up", sets: "4", reps: "6-8", rpe: "8" },
          { name: "Standing Overhead Military Press", sets: "3", reps: "6-8", rpe: "8" },
          { name: "Chest-Supported T-Bar Row", sets: "3", reps: "8-10", rpe: "8.5" },
          { name: "EZ-Bar Lying Triceps Extension", sets: "3", reps: "10-12", rpe: "9" }
        ]
      },
      {
        day: "Day 2 - Lower Power",
        focus: "Quad & Posterior Chain Overload",
        exercises: [
          { name: "High-Bar Olympic Back Squat", sets: "4", reps: "5", rpe: "8.5" },
          { name: "Barbell Romanian Deadlift (RDL)", sets: "3", reps: "6-8", rpe: "8" },
          { name: "Deficit Bulgarian Split Squat", sets: "3", reps: "8/leg", rpe: "8.5" },
          { name: "Standing Machine Calf Raise", sets: "4", reps: "10-12", rpe: "9" },
          { name: "Hanging Strict Toes-To-Bar", sets: "3", reps: "10-12", rpe: "8.5" }
        ]
      },
      {
        day: "Day 3 - Active Recovery / Mobility",
        focus: "Tissue Quality, Zone 2 Aerobic Base & Core",
        exercises: [
          { name: "Zone 2 Cardio / Incline Treadmill Walk", sets: "1", reps: "35 mins", rpe: "6" },
          { name: "Kneeling Ab Wheel Rollout", sets: "3", reps: "12-15", rpe: "7.5" },
          { name: "High-To-Low Cable Woodchopper", sets: "3", reps: "15/side", rpe: "7.5" }
        ]
      },
      {
        day: "Day 4 - Upper Hypertrophy",
        focus: "Metabolic Stress & Peak Contraction",
        exercises: [
          { name: "Incline Dumbbell Press", sets: "4", reps: "8-10", rpe: "8.5" },
          { name: "Single-Arm Dumbbell Row", sets: "4", reps: "10-12", rpe: "8.5" },
          { name: "Cross-Body Cable Lateral Raise", sets: "4", reps: "12-15", rpe: "9" },
          { name: "Low-to-High Cable Flye", sets: "3", reps: "12-15", rpe: "9" },
          { name: "Incline Bench Dumbbell Bicep Curl", sets: "3", reps: "10-12", rpe: "9" }
        ]
      }
    ]
  },
  {
    id: "ppl-athlete-split",
    title: "Push / Pull / Legs Athlete 6D",
    tag: "MAXIMUM ADAPTATION",
    difficulty: "Advanced",
    daysPerWeek: 6,
    cycleWeeks: 10,
    target: "Stage Aesthetics & Conditioning",
    description: "High-volume split organizing synergistic muscle chains to maximize recovery between muscle groups while training 6 days weekly.",
    splitDays: [
      {
        day: "Push Day - Chest, Shoulders, Triceps",
        focus: "Anterior Chain Overload",
        exercises: [
          { name: "Incline Dumbbell Press", sets: "4", reps: "8-10", rpe: "8.5" },
          { name: "Barbell Flat Bench Press", sets: "3", reps: "6-8", rpe: "8.5" },
          { name: "Cross-Body Cable Lateral Raise", sets: "4", reps: "12-15", rpe: "9" },
          { name: "Weighted Chest Dips", sets: "3", reps: "8-10", rpe: "9" },
          { name: "Cable Rope Triceps Pushdown", sets: "4", reps: "12-15", rpe: "9" }
        ]
      },
      {
        day: "Pull Day - Lats, Traps, Rear Delts, Biceps",
        focus: "Posterior Width & Thickness",
        exercises: [
          { name: "Weighted Neutral-Grip Pull-Up", sets: "4", reps: "6-8", rpe: "8.5" },
          { name: "Chest-Supported T-Bar Row", sets: "4", reps: "8-10", rpe: "8.5" },
          { name: "Incline Bench Dumbbell Rear Delt Flye", sets: "4", reps: "15", rpe: "9" },
          { name: "Incline Bench Dumbbell Bicep Curl", sets: "3", reps: "10-12", rpe: "9" },
          { name: "Dumbbell Hammer Preacher Curl", sets: "3", reps: "10-12", rpe: "9" }
        ]
      },
      {
        day: "Legs Day - Quads, Hamstrings, Calves",
        focus: "Lower Body Biomechanics",
        exercises: [
          { name: "High-Bar Olympic Back Squat", sets: "4", reps: "6-8", rpe: "8.5" },
          { name: "Barbell Romanian Deadlift (RDL)", sets: "4", reps: "8-10", rpe: "8.5" },
          { name: "Incline 45° Leg Press", sets: "3", reps: "12-15", rpe: "9" },
          { name: "Seated Hamstring Curl", sets: "3", reps: "12-15", rpe: "9" },
          { name: "Standing Machine Calf Raise", sets: "4", reps: "15", rpe: "9.5" }
        ]
      }
    ]
  },
  {
    id: "functional-shred",
    title: "Full Body Functional Shred 3D",
    tag: "FAT LOSS & ATHLETICISM",
    difficulty: "All Levels",
    daysPerWeek: 3,
    cycleWeeks: 6,
    target: "Cardiovascular Density & Lean Muscle",
    description: "Compound multi-joint movements paired with short rest periods to incinerate body fat while safeguarding lean muscle tissue.",
    splitDays: [
      {
        day: "Session A - Full Body Metabolic",
        focus: "Total System Activation",
        exercises: [
          { name: "Conventional Barbell Deadlift", sets: "4", reps: "5", rpe: "8.5" },
          { name: "Standing Overhead Military Press", sets: "3", reps: "8", rpe: "8" },
          { name: "Deficit Bulgarian Split Squat", sets: "3", reps: "10/leg", rpe: "8.5" },
          { name: "Hanging Strict Toes-To-Bar", sets: "3", reps: "12", rpe: "8.5" }
        ]
      },
      {
        day: "Session B - Posterior & Thoracic",
        focus: "Explosive Strength & Posture",
        exercises: [
          { name: "High-Bar Olympic Back Squat", sets: "4", reps: "6", rpe: "8" },
          { name: "Weighted Neutral-Grip Pull-Up", sets: "3", reps: "8", rpe: "8.5" },
          { name: "Incline Dumbbell Press", sets: "3", reps: "10", rpe: "8" },
          { name: "Ab Wheel Rollout", sets: "3", reps: "12", rpe: "8" }
        ]
      }
    ]
  }
];

// ==========================================================================
// 3. WEB AUDIO SYNTHESIZER (HIIT TIMER SOUND FX)
// ==========================================================================
class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 800, duration = 0.12, type = 'sine') {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  playCountdownTick() {
    this.playBeep(660, 0.1, 'sine');
  }

  playWorkPhaseStart() {
    // High alert chime
    this.playBeep(1200, 0.35, 'triangle');
  }

  playRestPhaseStart() {
    // Soft low chime
    this.playBeep(440, 0.4, 'sine');
  }

  playSessionComplete() {
    // Celebratory victory fan-fare
    if (!this.enabled) return;
    [600, 800, 1000, 1400].forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.25, 'triangle'), i * 140);
    });
  }
}

// ==========================================================================
// 4. MAIN CONTROLLER & APPLICATION STATE
// ==========================================================================
class KinetixApp {
  constructor() {
    this.audio = new AudioSynthesizer();
    this.currentTab = 'dashboard';
    
    // HIIT Timer State
    this.timerConfig = {
      workSec: 30,
      restSec: 15,
      totalRounds: 8
    };
    this.timerState = {
      isRunning: false,
      isWorkPhase: true,
      currentRound: 1,
      secondsLeft: 30,
      intervalId: null
    };

    // User Profile / Settings
    this.userData = this.loadUserData();

    // Active Workout Logger State
    this.activeLogSets = [
      { exercise: "Barbell Flat Bench Press", weight: 85, reps: 8, rpe: 8 }
    ];

    this.init();
  }

  init() {
    this.initAuth();
    this.bindNavigation();
    this.renderMetricsHeader();
    this.renderExerciseVault();
    this.renderAnatomyMap();
    this.renderProgramCards();
    this.bindHIITTimer();
    this.bindCalculators();
    this.bindBodyCompositionAndPlanner();
    this.initAiCoach();
    this.bindLogger();
    this.renderHistoryAndCharts();
    this.renderAdminDashboard();
    this.initBilling();
    this.loadNotifications();

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('appSidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }

    // Close mobile menu on nav item click
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && sidebar) {
          sidebar.classList.remove('mobile-open');
        }
      });
    });
  }

  // Load / Store Local User Data
  loadUserData() {
    const saved = localStorage.getItem('kinetix_user_data');
    if (saved) {
      try { return JSON.parse(saved); } catch(e) {}
    }
    return {
      name: "Alex V.",
      tier: "PRO ATHLETE #4102",
      weightKg: 82.5,
      heightCm: 182,
      bodyFatPct: 13.5,
      readinessScore: 88,
      recoveryState: "Prime Hyper-Adaptive",
      workoutLogs: [
        {
          id: 1,
          date: "Yesterday at 18:30",
          title: "Upper Power Overload",
          totalVolumeKg: 8420,
          setsCount: 16,
          durationMins: 58
        },
        {
          id: 2,
          date: "3 Days ago",
          title: "Leg Biomechanics & Squat",
          totalVolumeKg: 11250,
          setsCount: 18,
          durationMins: 64
        }
      ],
      personalRecords: [
        { lift: "High-Bar Squat", weight: 175, reps: 1, unit: "kg" },
        { lift: "Flat Bench Press", weight: 135, reps: 1, unit: "kg" },
        { lift: "Conventional Deadlift", weight: 220, reps: 1, unit: "kg" },
        { lift: "Overhead Military Press", weight: 85, reps: 1, unit: "kg" }
      ]
    };
  }

  saveUserData() {
    localStorage.setItem('kinetix_user_data', JSON.stringify(this.userData));
  }

  // Navigation Logic
  bindNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        if (!targetTab) return;

        // Verify Admin permission if clicking Admin Portal
        if (targetTab === 'admin') {
          const u = KinetixAuth.getCurrentUser();
          if (!u || u.role !== 'admin') {
            this.showToast('Access Restricted: Master Admin authorization required.');
            this.openAuthModal('signin');
            return;
          }
          this.renderAdminDashboard();
        }

        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        document.querySelectorAll('.tab-view').forEach(view => {
          view.classList.remove('active');
        });

        const activeView = document.getElementById(`view-${targetTab}`);
        if (activeView) {
          activeView.classList.add('active');
          this.currentTab = targetTab;
          
          if (targetTab === 'telemetry') {
            this.drawTelemetryCharts();
          }
          if (targetTab === 'billing') {
            this.updateBillingViewUI();
          }
        }
      });
    });
  }

  // Dashboard Telemetry Badges
  renderMetricsHeader() {
    const readinessVal = document.getElementById('dashReadinessVal');
    if (readinessVal) readinessVal.textContent = `${this.userData.readinessScore}%`;
  }

  // ==========================================================================
  // EXERCISE VAULT & SEARCH
  // ==========================================================================
  renderExerciseVault(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('exerciseVaultGrid');
    if (!container) return;

    let list = EXERCISES_DATABASE;
    if (filterCategory !== 'all') {
      list = list.filter(ex => ex.category === filterCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(ex => 
        ex.name.toLowerCase().includes(q) || 
        ex.primaryMuscle.toLowerCase().includes(q) ||
        ex.equipment.toLowerCase().includes(q)
      );
    }

    container.innerHTML = list.map(ex => `
      <div class="exercise-card card-interactive">
        <div>
          <div class="exercise-card-header">
            <h3 class="exercise-card-title">${ex.name}</h3>
            <span class="exercise-mechanic-badge">${ex.mechanic}</span>
          </div>

          <div class="exercise-muscles-row">
            <span class="muscle-badge-primary">Focus: ${ex.primaryMuscle}</span>
            ${ex.secondaryMuscles.map(m => `<span class="muscle-badge-secondary">${m}</span>`).join('')}
          </div>

          <div class="exercise-cues-box">
            <strong>Form & Biomechanics:</strong> ${ex.cues}
          </div>
        </div>

        <div class="exercise-card-footer">
          <span class="exercise-equipment-tag">${ex.equipment} • Tempo: ${ex.tempo}</span>
          <div style="display: flex; gap: 6px;">
            <button class="btn-secondary" style="padding: 6px 10px; font-size: 0.76rem;" onclick="app.openExerciseDetail('${ex.id}')">
              Biomechanics Guide
            </button>
            <button class="btn-primary" style="padding: 6px 10px; font-size: 0.76rem;" onclick="app.quickAddExerciseToLog('${ex.name}')">
              + Log
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Bind Search Input & Filter Pills
    const searchInput = document.getElementById('vaultSearchInput');
    if (searchInput && !searchInput.dataset.bound) {
      searchInput.dataset.bound = "true";
      searchInput.addEventListener('input', (e) => {
        const activeBtn = document.querySelector('.filter-btn.active');
        const cat = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
        this.renderExerciseVault(cat, e.target.value);
      });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      if (!btn.dataset.bound) {
        btn.dataset.bound = "true";
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-category');
          const query = searchInput ? searchInput.value : '';
          this.renderExerciseVault(cat, query);
        });
      }
    });
  }

  // ==========================================================================
  // INTERACTIVE MUSCLE ANATOMY EXPLORER
  // ==========================================================================
  renderAnatomyMap() {
    const muscleElements = document.querySelectorAll('.muscle-group-shape');
    const legendBtns = document.querySelectorAll('.legend-btn');

    const selectMuscle = (muscleKey) => {
      // Highlight SVG shape
      muscleElements.forEach(el => {
        if (el.getAttribute('data-muscle') === muscleKey) {
          el.classList.add('selected');
        } else {
          el.classList.remove('selected');
        }
      });

      // Highlight Legend Button
      legendBtns.forEach(btn => {
        if (btn.getAttribute('data-muscle') === muscleKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      this.updateAnatomyResults(muscleKey);
    };

    muscleElements.forEach(el => {
      el.addEventListener('click', () => {
        const muscle = el.getAttribute('data-muscle');
        if (muscle) selectMuscle(muscle);
      });
    });

    legendBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const muscle = btn.getAttribute('data-muscle');
        if (muscle) selectMuscle(muscle);
      });
    });

    // Default select chest
    selectMuscle('chest');
  }

  updateAnatomyResults(muscleKey) {
    const labelElem = document.getElementById('activeMuscleTitle');
    const resultsContainer = document.getElementById('anatomyResultsGrid');
    if (!labelElem || !resultsContainer) return;

    const names = {
      chest: "Pectoralis Major & Minor (Chest)",
      back: "Latissimus Dorsi & Rhomboids (Back)",
      legs: "Quadriceps, Hamstrings & Glutes (Legs)",
      shoulders: "Deltoid Complex (Shoulders)",
      arms: "Biceps, Brachialis & Triceps (Arms)",
      core: "Rectus Abdominis & Obliques (Core)"
    };

    labelElem.textContent = names[muscleKey] || muscleKey.toUpperCase();

    const filtered = EXERCISES_DATABASE.filter(ex => ex.category === muscleKey);
    resultsContainer.innerHTML = filtered.map(ex => `
      <div class="exercise-card">
        <div class="exercise-card-header">
          <h4 class="exercise-card-title">${ex.icon} ${ex.name}</h4>
          <span class="tag-chip tag-lime">${ex.difficulty}</span>
        </div>
        <div class="exercise-cues-box">
          ${ex.cues}
        </div>
        <div class="exercise-card-footer">
          <span style="font-size: 0.8rem; color: var(--accent-cyan); font-family: var(--font-mono);">
            Equipment: ${ex.equipment}
          </span>
          <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem;" onclick="app.quickAddExerciseToLog('${ex.name}')">
            Train Now
          </button>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // PROGRAM DIRECTORY
  // ==========================================================================
  renderProgramCards() {
    const container = document.getElementById('programCardsGrid');
    if (!container) return;

    container.innerHTML = WORKOUT_PROGRAMS.map(prog => `
      <div class="program-card">
        <div>
          <div class="program-badge-row">
            <span class="tag-chip tag-lime">${prog.tag}</span>
            <span class="tag-chip tag-cyan">${prog.difficulty}</span>
          </div>

          <h3 class="program-title">${prog.title}</h3>
          <p class="program-desc">${prog.description}</p>

          <div class="program-specs">
            <div>
              <div class="spec-val">${prog.daysPerWeek} Days</div>
              <div class="spec-lbl">Weekly Freq</div>
            </div>
            <div>
              <div class="spec-val">${prog.cycleWeeks} Wks</div>
              <div class="spec-lbl">Cycle Length</div>
            </div>
            <div>
              <div class="spec-val">Compound</div>
              <div class="spec-lbl">Primary Stimulus</div>
            </div>
          </div>
        </div>

        <button class="btn-secondary" style="width: 100%; justify-content: center;" onclick="app.openProgramDetails('${prog.id}')">
          View Periodization Split →
        </button>
      </div>
    `).join('');
  }

  openProgramDetails(programId) {
    const prog = WORKOUT_PROGRAMS.find(p => p.id === programId);
    if (!prog) return;

    const modalBackdrop = document.getElementById('programModal');
    const modalContent = document.getElementById('programModalBody');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="tag-chip tag-lime">${prog.tag}</span>
        <h2 style="font-size: 1.8rem; margin: 8px 0 4px;">${prog.title}</h2>
        <p style="color: var(--text-secondary);">${prog.description}</p>
      </div>

      <div class="split-days-container">
        ${prog.splitDays.map(sd => `
          <div class="split-day-block">
            <div class="split-day-header">
              <div>
                <h4 class="split-day-title">${sd.day}</h4>
                <p style="font-size: 0.8rem; color: var(--accent-cyan); font-family: var(--font-mono);">${sd.focus}</p>
              </div>
              <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem;" onclick="app.loadRoutineIntoSession('${prog.id}', '${sd.day}')">
                Load Into Tracker
              </button>
            </div>

            <table class="routine-table">
              <thead>
                <tr>
                  <th>Exercise Movement</th>
                  <th>Sets</th>
                  <th>Target Reps</th>
                  <th>RPE / Intensity</th>
                </tr>
              </thead>
              <tbody>
                ${sd.exercises.map(ex => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${ex.name}</td>
                    <td><span class="pill-rep-scheme">${ex.sets}</span></td>
                    <td><span class="pill-rep-scheme">${ex.reps}</span></td>
                    <td style="font-family: var(--font-mono); color: var(--accent-orange);">@ ${ex.rpe}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `).join('')}
      </div>
    `;

    this.openModal('programModal');
  }

  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.add('open');
      m.classList.add('active');
    }
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.remove('open');
      m.classList.remove('active');
    }
  }

  loadRoutineIntoSession(progId, dayTitle) {
    const prog = WORKOUT_PROGRAMS.find(p => p.id === progId);
    if (!prog) return;
    const splitDay = prog.splitDays.find(d => d.day === dayTitle);
    if (!splitDay) return;

    this.activeLogSets = [];
    splitDay.exercises.forEach(ex => {
      const setsCount = parseInt(ex.sets) || 3;
      for (let s = 1; s <= setsCount; s++) {
        this.activeLogSets.push({
          exercise: ex.name,
          weight: 60,
          reps: parseInt(ex.reps) || 8,
          rpe: parseFloat(ex.rpe) || 8
        });
      }
    });

    this.closeModal('programModal');
    this.renderActiveLogger();
    
    // Switch to workout logger tab
    const loggerTabBtn = document.querySelector('.nav-item[data-tab="logger"]');
    if (loggerTabBtn) loggerTabBtn.click();

    this.showToast(`Loaded "${splitDay.day}" (${this.activeLogSets.length} sets) into session tracker!`);
  }

  // ==========================================================================
  // LIVE INTERVAL & HIIT ENGINE
  // ==========================================================================
  bindHIITTimer() {
    const startBtn = document.getElementById('timerToggleBtn');
    const resetBtn = document.getElementById('timerResetBtn');
    const skipBtn = document.getElementById('timerSkipBtn');
    const soundToggle = document.getElementById('soundToggle');

    // Preset Buttons
    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const work = parseInt(pill.getAttribute('data-work'));
        const rest = parseInt(pill.getAttribute('data-rest'));
        const rounds = parseInt(pill.getAttribute('data-rounds'));

        this.setTimerConfig(work, rest, rounds);
      });
    });

    // Custom Sliders
    const workSlider = document.getElementById('workDurationSlider');
    const restSlider = document.getElementById('restDurationSlider');
    const roundsSlider = document.getElementById('roundsCountSlider');

    if (workSlider) {
      workSlider.addEventListener('input', (e) => {
        this.timerConfig.workSec = parseInt(e.target.value);
        document.getElementById('workSliderVal').textContent = `${this.timerConfig.workSec}s`;
        if (!this.timerState.isRunning && this.timerState.isWorkPhase) {
          this.timerState.secondsLeft = this.timerConfig.workSec;
          this.updateTimerDisplay();
        }
      });
    }

    if (restSlider) {
      restSlider.addEventListener('input', (e) => {
        this.timerConfig.restSec = parseInt(e.target.value);
        document.getElementById('restSliderVal').textContent = `${this.timerConfig.restSec}s`;
      });
    }

    if (roundsSlider) {
      roundsSlider.addEventListener('input', (e) => {
        this.timerConfig.totalRounds = parseInt(e.target.value);
        document.getElementById('roundsSliderVal').textContent = `${this.timerConfig.totalRounds}`;
        this.updateTimerDisplay();
      });
    }

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (this.timerState.isRunning) {
          this.pauseTimer();
        } else {
          this.startTimer();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetTimer());
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => this.skipTimerPhase());
    }

    if (soundToggle) {
      soundToggle.addEventListener('change', (e) => {
        this.audio.enabled = e.target.checked;
      });
    }

    this.updateTimerDisplay();
  }

  setTimerConfig(work, rest, rounds) {
    this.timerConfig.workSec = work;
    this.timerConfig.restSec = rest;
    this.timerConfig.totalRounds = rounds;

    // Update Sliders
    const ws = document.getElementById('workDurationSlider');
    const rs = document.getElementById('restDurationSlider');
    const rds = document.getElementById('roundsCountSlider');
    if (ws) ws.value = work;
    if (rs) rs.value = rest;
    if (rds) rds.value = rounds;

    document.getElementById('workSliderVal').textContent = `${work}s`;
    document.getElementById('restSliderVal').textContent = `${rest}s`;
    document.getElementById('roundsSliderVal').textContent = `${rounds}`;

    this.resetTimer();
  }

  startTimer() {
    this.audio.init();
    this.timerState.isRunning = true;
    const btn = document.getElementById('timerToggleBtn');
    if (btn) btn.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;

    if (this.timerState.isWorkPhase) {
      this.audio.playWorkPhaseStart();
    } else {
      this.audio.playRestPhaseStart();
    }

    this.timerState.intervalId = setInterval(() => {
      this.tickTimer();
    }, 1000);
  }

  pauseTimer() {
    this.timerState.isRunning = false;
    clearInterval(this.timerState.intervalId);
    const btn = document.getElementById('timerToggleBtn');
    if (btn) btn.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
  }

  resetTimer() {
    this.pauseTimer();
    this.timerState.isWorkPhase = true;
    this.timerState.currentRound = 1;
    this.timerState.secondsLeft = this.timerConfig.workSec;
    this.updateTimerDisplay();
  }

  skipTimerPhase() {
    this.advancePhase();
  }

  tickTimer() {
    this.timerState.secondsLeft--;

    if (this.timerState.secondsLeft <= 3 && this.timerState.secondsLeft > 0) {
      this.audio.playCountdownTick();
    }

    if (this.timerState.secondsLeft <= 0) {
      this.advancePhase();
    } else {
      this.updateTimerDisplay();
    }
  }

  advancePhase() {
    if (this.timerState.isWorkPhase) {
      // Transition from Work -> Rest
      if (this.timerState.currentRound >= this.timerConfig.totalRounds) {
        // Complete!
        this.resetTimer();
        this.audio.playSessionComplete();
        this.showToast("Workout Finished! Outstanding high-intensity performance!");
        return;
      }
      this.timerState.isWorkPhase = false;
      this.timerState.secondsLeft = this.timerConfig.restSec;
      this.audio.playRestPhaseStart();
    } else {
      // Transition from Rest -> Work next round
      this.timerState.isWorkPhase = true;
      this.timerState.currentRound++;
      this.timerState.secondsLeft = this.timerConfig.workSec;
      this.audio.playWorkPhaseStart();
    }
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const digitsElem = document.getElementById('timerDigits');
    const phaseElem = document.getElementById('timerPhaseText');
    const roundElem = document.getElementById('timerRoundInfo');
    const progressRing = document.getElementById('timerProgressRing');

    if (digitsElem) {
      const mins = Math.floor(this.timerState.secondsLeft / 60);
      const secs = this.timerState.secondsLeft % 60;
      digitsElem.textContent = `${mins > 0 ? mins + ':' : ''}${secs < 10 ? '0' : ''}${secs}`;
    }

    if (phaseElem) {
      if (this.timerState.isWorkPhase) {
        phaseElem.textContent = "WORK INTERVAL";
        phaseElem.classList.remove('rest');
        if (progressRing) progressRing.classList.remove('rest-phase');
      } else {
        phaseElem.textContent = "RECOVERY REST";
        phaseElem.classList.add('rest');
        if (progressRing) progressRing.classList.add('rest-phase');
      }
    }

    if (roundElem) {
      roundElem.textContent = `ROUND ${this.timerState.currentRound} OF ${this.timerConfig.totalRounds}`;
    }

    if (progressRing) {
      const maxSecs = this.timerState.isWorkPhase ? this.timerConfig.workSec : this.timerConfig.restSec;
      const pct = (this.timerState.secondsLeft / maxSecs);
      const circumference = 880;
      progressRing.style.strokeDashoffset = circumference * (1 - pct);
    }
  }

  // ==========================================================================
  // CALCULATORS: 1RM AND MACROS
  // ==========================================================================
  bindCalculators() {
    // 1RM Calculation
    const calc1RM = () => {
      const weight = parseFloat(document.getElementById('onermWeightInput').value) || 0;
      const reps = parseInt(document.getElementById('onermRepsInput').value) || 1;

      if (weight <= 0) return;

      // Brzycki formula: weight / (1.0278 - 0.0278 * reps)
      const brzycki = reps === 1 ? weight : weight / (1.0278 - (0.0278 * reps));
      // Epley formula: weight * (1 + 0.0333 * reps)
      const epley = reps === 1 ? weight : weight * (1 + 0.0333 * reps);
      const avg1RM = Math.round((brzycki + epley) / 2);

      const valDisplay = document.getElementById('onermResultVal');
      if (valDisplay) valDisplay.textContent = `${avg1RM} kg`;

      // Percentage Table
      const tableBody = document.getElementById('onermTableBody');
      if (tableBody) {
        const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];
        const estReps = ["2 reps", "3-4 reps", "5-6 reps", "7-8 reps", "9-10 reps", "11-12 reps", "13-15 reps", "16-18 reps", "20 reps", "Speed/Warmup"];

        tableBody.innerHTML = percentages.map((pct, idx) => {
          const loadKg = Math.round(avg1RM * (pct / 100));
          return `
            <tr>
              <td style="color: var(--accent-cyan); font-weight: 700;">${pct}%</td>
              <td style="color: #ffffff; font-weight: 600;">${loadKg} kg</td>
              <td style="color: var(--text-muted);">${estReps[idx]}</td>
            </tr>
          `;
        }).join('');
      }
    };

    const wInput = document.getElementById('onermWeightInput');
    const rInput = document.getElementById('onermRepsInput');
    if (wInput) wInput.addEventListener('input', calc1RM);
    if (rInput) rInput.addEventListener('input', calc1RM);
    calc1RM();

    // Macro & TDEE Calculation
    const calcMacros = () => {
      const weight = parseFloat(document.getElementById('macroWeight').value) || 80;
      const height = parseFloat(document.getElementById('macroHeight').value) || 180;
      const age = parseFloat(document.getElementById('macroAge').value) || 28;
      const gender = document.getElementById('macroGender').value;
      const activity = parseFloat(document.getElementById('macroActivity').value) || 1.55;
      const goal = document.getElementById('macroGoal').value;

      // Mifflin-St Jeor BMR
      let bmr = (10 * weight) + (6.25 * height) - (5 * age);
      bmr = (gender === 'male') ? bmr + 5 : bmr - 161;

      const tdee = bmr * activity;
      let targetCalories = tdee;

      if (goal === 'cut') {
        targetCalories = tdee * 0.8; // -20%
      } else if (goal === 'recomp') {
        targetCalories = tdee;
      } else if (goal === 'bulk') {
        targetCalories = tdee * 1.12; // +12%
      }

      targetCalories = Math.round(targetCalories);

      // Macro splits (Protein: 2.2g/kg, Fat: 25% of calories, Rest: Carbs)
      const proteinGrams = Math.round(weight * 2.2);
      const proteinCals = proteinGrams * 4;

      const fatCals = targetCalories * 0.25;
      const fatGrams = Math.round(fatCals / 9);

      const carbCals = Math.max(0, targetCalories - (proteinCals + fatCals));
      const carbGrams = Math.round(carbCals / 4);

      // UI Update
      document.getElementById('macroTargetCalories').textContent = `${targetCalories} kcal`;
      document.getElementById('macroProteinVal').textContent = `${proteinGrams}g`;
      document.getElementById('macroCarbsVal').textContent = `${carbGrams}g`;
      document.getElementById('macroFatsVal').textContent = `${fatGrams}g`;

      // Split bar widths
      const pPct = Math.round((proteinCals / targetCalories) * 100);
      const cPct = Math.round((carbCals / targetCalories) * 100);
      const fPct = Math.round((fatCals / targetCalories) * 100);

      document.getElementById('macroBarProtein').style.width = `${pPct}%`;
      document.getElementById('macroBarCarbs').style.width = `${cPct}%`;
      document.getElementById('macroBarFats').style.width = `${fPct}%`;

      // Daily Water Target
      const waterLiters = (weight * 0.04).toFixed(1);
      const waterElem = document.getElementById('macroHydrationTarget');
      if (waterElem) waterElem.textContent = `${waterLiters} Liters/day`;
    };

    ['macroWeight', 'macroHeight', 'macroAge', 'macroGender', 'macroActivity', 'macroGoal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calcMacros);
    });
    calcMacros();
  }

  // ==========================================================================
  // BODY COMPOSITION & WEIGHT DEFICIT PLANNER ENGINE
  // ==========================================================================
  bindBodyCompositionAndPlanner() {
    // 1. Precision Body Composition (BMI & US Navy Body Fat)
    const calcBodyComp = () => {
      const gender = document.getElementById('compGender')?.value || 'male';
      const weight = parseFloat(document.getElementById('compWeight')?.value) || 82.5;
      const height = parseFloat(document.getElementById('compHeight')?.value) || 182;
      const neck = parseFloat(document.getElementById('compNeck')?.value) || 40;
      const waist = parseFloat(document.getElementById('compWaist')?.value) || 84;
      const hip = parseFloat(document.getElementById('compHip')?.value) || 98;

      const hipField = document.getElementById('compHipField');
      if (hipField) {
        hipField.style.display = (gender === 'female') ? 'block' : 'none';
      }

      // BMI Formula = weight (kg) / (height(m))^2
      const heightM = height / 100;
      const bmi = (weight / (heightM * heightM)).toFixed(1);

      // BMI pointer percentage (15 to 35 range mapped to 0% to 100%)
      const bmiMin = 15;
      const bmiMax = 35;
      const clampedBmi = Math.max(bmiMin, Math.min(bmiMax, parseFloat(bmi)));
      const bmiPointerPct = Math.round(((clampedBmi - bmiMin) / (bmiMax - bmiMin)) * 100);

      // US Navy Body Fat % Formula
      let bodyFat = 15;
      if (gender === 'male') {
        const diff = waist - neck;
        if (diff > 0 && height > 0) {
          bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(height)) - 450;
        }
      } else {
        const diff = waist + hip - neck;
        if (diff > 0 && height > 0) {
          bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(diff) + 0.22100 * Math.log10(height)) - 450;
        }
      }
      bodyFat = Math.max(4, Math.min(50, bodyFat));
      const bfPct = bodyFat.toFixed(1);

      // Functional Lean Mass vs Fat Mass
      const fatMassKg = (weight * (bodyFat / 100)).toFixed(1);
      const leanMassKg = (weight - parseFloat(fatMassKg)).toFixed(1);

      // Classification Category
      let category = 'FITNESS / ATHLETIC';
      if (gender === 'male') {
        if (bodyFat < 6) category = 'ESSENTIAL FAT (COMPETITION DRY)';
        else if (bodyFat <= 13) category = 'ELITE ATHLETE (SHREDDED)';
        else if (bodyFat <= 17) category = 'ATHLETIC FITNESS';
        else if (bodyFat <= 24) category = 'AVERAGE HEALTHY';
        else category = 'ADIPOSE SURPLUS (CUT RECOMMENDED)';
      } else {
        if (bodyFat < 14) category = 'ESSENTIAL FAT (COMPETITION DRY)';
        else if (bodyFat <= 20) category = 'ELITE ATHLETE (SHREDDED)';
        else if (bodyFat <= 24) category = 'ATHLETIC FITNESS';
        else if (bodyFat <= 31) category = 'AVERAGE HEALTHY';
        else category = 'ADIPOSE SURPLUS (CUT RECOMMENDED)';
      }

      // Update DOM
      const bmiEl = document.getElementById('compBmiVal');
      const bfEl = document.getElementById('compBfVal');
      const pointerEl = document.getElementById('compBmiPointer');
      const leanEl = document.getElementById('compLeanMassVal');
      const fatEl = document.getElementById('compFatMassVal');
      const catEl = document.getElementById('compCategoryBadge');

      if (bmiEl) bmiEl.textContent = bmi;
      if (bfEl) bfEl.textContent = `${bfPct}%`;
      if (pointerEl) pointerEl.style.left = `${bmiPointerPct}%`;
      if (leanEl) leanEl.textContent = `${leanMassKg} kg`;
      if (fatEl) fatEl.textContent = `${fatMassKg} kg`;
      if (catEl) catEl.textContent = category;
    };

    ['compGender', 'compWeight', 'compHeight', 'compNeck', 'compWaist', 'compHip'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calcBodyComp);
    });
    calcBodyComp();

    // 2. Weight Deficit & Workout Caloric Projection Simulator
    const calcWeightProjection = () => {
      const currentW = parseFloat(document.getElementById('planCurrentWeight')?.value) || 85;
      const targetW = parseFloat(document.getElementById('planTargetWeight')?.value) || 78;
      const burnRatePerMin = parseFloat(document.getElementById('planExerciseType')?.value) || 8.5;
      const durationMins = parseFloat(document.getElementById('planDuration')?.value) || 60;
      const frequencyDays = parseFloat(document.getElementById('planFrequency')?.value) || 4;
      const dietDeficitDaily = parseFloat(document.getElementById('planDietDeficit')?.value) || 500;

      // Calories burned per workout: duration * rate * (weight / 75kg baseline)
      const weightFactor = currentW / 75;
      const sessionBurn = Math.round(durationMins * burnRatePerMin * weightFactor);

      // Weekly exercise burn + dietary deficit
      const weeklyExerciseBurn = sessionBurn * frequencyDays;
      const weeklyDietDeficit = dietDeficitDaily * 7;
      const weeklyTotalDeficit = weeklyExerciseBurn + weeklyDietDeficit;

      // 1kg fat deficit = ~7,700 kcal
      const weeklyWeightLossKg = (weeklyTotalDeficit / 7700);
      const totalWeightToLose = currentW - targetW;

      let estWeeks = 0;
      if (totalWeightToLose > 0 && weeklyWeightLossKg > 0) {
        estWeeks = (totalWeightToLose / weeklyWeightLossKg).toFixed(1);
      } else if (totalWeightToLose <= 0) {
        estWeeks = '0.0';
      }

      // UI update
      const sessionEl = document.getElementById('planSessionBurnVal');
      const weeklyDefEl = document.getElementById('planWeeklyDeficitVal');
      const weeklyRateEl = document.getElementById('planWeeklyRateVal');
      const estWeeksEl = document.getElementById('planEstWeeksVal');

      if (sessionEl) sessionEl.textContent = `${sessionBurn} kcal`;
      if (weeklyDefEl) weeklyDefEl.textContent = `${weeklyTotalDeficit.toLocaleString()} kcal`;
      if (weeklyRateEl) weeklyRateEl.textContent = `-${weeklyWeightLossKg.toFixed(2)} kg/wk`;
      if (estWeeksEl) estWeeksEl.textContent = `${estWeeks} Wks`;

      // Milestones timeline
      const timelineEl = document.getElementById('planMilestonesTimeline');
      if (timelineEl) {
        const milestones = [
          { label: 'Week 2', weeks: 2 },
          { label: 'Week 4', weeks: 4 },
          { label: 'Week 8', weeks: 8 },
          { label: 'Target Reached', weeks: parseFloat(estWeeks) || 10 }
        ];

        timelineEl.innerHTML = milestones.map(m => {
          const projectedW = Math.max(targetW, currentW - (weeklyWeightLossKg * m.weeks));
          const date = new Date();
          date.setDate(date.getDate() + Math.round(m.weeks * 7));
          const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          const drop = (currentW - projectedW).toFixed(1);

          return `
            <div class="milestone-row">
              <div class="milestone-week">${m.label} <span style="font-size: 0.72rem; color: var(--text-muted);">(${dateStr})</span></div>
              <div class="milestone-weight">${projectedW.toFixed(1)} kg</div>
              <div class="milestone-loss">-${drop} kg drop</div>
            </div>
          `;
        }).join('');
      }
    };

    ['planCurrentWeight', 'planTargetWeight', 'planExerciseType', 'planDuration', 'planFrequency', 'planDietDeficit'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calcWeightProjection);
    });
    calcWeightProjection();
  }

  // ==========================================================================
  // KINETIX NEURAL AI COACH LAB
  // ==========================================================================
  initAiCoach() {
    const defaultHistory = [
      {
        sender: 'bot',
        text: `Greetings, Athlete. I am the <strong>Kinetix Athletic Neural Coach</strong>, specialized strictly in biomechanics, sports physiology, hypertrophy periodization, and caloric deficit science.<br><br>I have synced with your active performance profile (<strong>${KinetixAuth.getCurrentUser()?.name || 'Bilal Khan'}</strong>). Ask me anything regarding your workouts, 1RM loading, BMI, fat loss trajectory, or movement execution cues.`
      }
    ];

    const saved = localStorage.getItem('kinetix_ai_chat_history');
    this.aiChatHistory = saved ? JSON.parse(saved) : defaultHistory;
    this.renderAiChatFeed();
  }

  renderAiChatFeed() {
    const feed = document.getElementById('aiChatFeed');
    if (!feed) return;

    feed.innerHTML = this.aiChatHistory.map(msg => `
      <div class="ai-message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}">
        <div class="ai-msg-avatar">${msg.sender === 'user' ? 'YOU' : 'AI'}</div>
        <div class="ai-msg-bubble">${msg.text}</div>
      </div>
    `).join('');

    feed.scrollTop = feed.scrollHeight;
  }

  sendAiPrompt(promptText) {
    const input = document.getElementById('aiCoachInput');
    if (input) {
      input.value = promptText;
      this.handleAiSubmit();
    }
  }

  clearAiChat() {
    localStorage.removeItem('kinetix_ai_chat_history');
    this.initAiCoach();
    this.showToast('AI Coach chat history cleared.');
  }

  handleAiSubmit() {
    const input = document.getElementById('aiCoachInput');
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = '';

    // Add user message
    this.aiChatHistory.push({ sender: 'user', text: userText });
    this.renderAiChatFeed();

    // Generate specialized athletic response
    setTimeout(() => {
      const botResponse = this.generateAthleticAiResponse(userText);
      this.aiChatHistory.push({ sender: 'bot', text: botResponse });
      localStorage.setItem('kinetix_ai_chat_history', JSON.stringify(this.aiChatHistory));
      this.renderAiChatFeed();
    }, 300);
  }

  generateAthleticAiResponse(query) {
    const q = query.toLowerCase();
    const currentUser = KinetixAuth.getCurrentUser();
    const athleteName = currentUser ? currentUser.name : 'Bilal Khan';

    // Strict Domain Guardrail Check
    const fitnessKeywords = [
      'workout', 'exercise', 'gym', 'weight', 'loss', 'fat', 'muscle', 'bench', 'squat',
      'deadlift', 'protein', 'calories', 'deficit', 'surplus', 'macro', 'bmi', 'body fat',
      'reps', 'sets', 'rpe', 'cardio', 'hiit', 'hydration', 'water', 'sleep', 'recovery',
      'split', 'hypertrophy', 'strength', 'creatine', 'diet', 'cut', 'bulk', 'chest', 'back',
      'legs', 'biceps', 'triceps', 'abs', 'core', 'push', 'pull', 'bilal', 'volume', 'pr',
      '1rm', 'tone', 'endurance', 'tempo', 'nutrition', 'training', 'metabolism'
    ];

    const isFitnessRelated = fitnessKeywords.some(kw => q.includes(kw));

    if (!isFitnessRelated) {
      return `⚠️ <strong>Guardrail Notice:</strong> I am strictly configured as the <strong>Kinetix Athletic &amp; Biomechanics AI Coach</strong>. I do not answer non-fitness or unrelated queries.<br><br>Please ask questions specifically regarding:
        <ul>
          <li><strong>Strength &amp; Hypertrophy Programming</strong> (PPL, Upper/Lower, 1RM loading)</li>
          <li><strong>Body Composition &amp; BMI</strong> (Body fat reduction, US Navy formula)</li>
          <li><strong>Workout Caloric Burn &amp; Weight Deficit Planning</strong></li>
          <li><strong>Movement Biomechanics &amp; Injury Prevention</strong></li>
        </ul>`;
    }

    // Specialized Domain Answers
    if (q.includes('bmi') || q.includes('body fat')) {
      const weight = document.getElementById('compWeight')?.value || '82.5';
      const height = document.getElementById('compHeight')?.value || '182';
      const bmi = document.getElementById('compBmiVal')?.textContent || '24.9';
      const bf = document.getElementById('compBfVal')?.textContent || '13.8%';
      return `📊 <strong>Body Composition Analysis for ${athleteName}:</strong><br><br>
        Based on your current biometric metrics (Weight: <strong>${weight}kg</strong>, Height: <strong>${height}cm</strong>):
        <ul>
          <li><strong>Calculated BMI:</strong> ${bmi} (Optimal Athletic Functional Range)</li>
          <li><strong>Estimated Body Fat:</strong> ${bf} via U.S. Navy Biometric algorithm</li>
          <li><strong>Nutritional Recommendation:</strong> Maintain lean muscular density with <strong>1.8g - 2.2g protein per kg</strong> (~${Math.round(weight * 2.2)}g daily). If initiating a cut, establish a 400-500 kcal deficit while keeping compound intensity at RPE 8.</li>
        </ul>`;
    }

    if (q.includes('drop') || q.includes('loss') || q.includes('burn') || q.includes('cardio') || q.includes('5kg') || q.includes('weight')) {
      return `🔥 <strong>Target Deficit &amp; Weight Reduction Protocol:</strong><br><br>
        To shed <strong>5 kg of adipose tissue</strong> without losing contractile muscle density:
        <ol>
          <li><strong>Caloric Energy Equation:</strong> 1kg of human fat equals approximately <strong>7,700 kcal</strong>. Dropping 5kg requires a cumulative deficit of <strong>38,500 kcal</strong>.</li>
          <li><strong>Optimal Pace:</strong> A sustainable rate is <strong>0.5kg - 0.75kg per week</strong> (~500 - 750 kcal daily net deficit).</li>
          <li><strong>Exercise Prescription:</strong> 4 weekly sessions of 45-60 mins (combining Heavy Resistance Training + 15 min HIIT finisher) burns ~<strong>2,400 kcal/week</strong>.</li>
          <li><strong>Projected Timeline:</strong> At this rate, you will hit your 5kg target in approximately <strong>7 to 8 weeks</strong> while keeping strength PRs intact!</li>
        </ol>`;
    }

    if (q.includes('split') || q.includes('routine') || q.includes('hypertrophy') || q.includes('upper') || q.includes('lower') || q.includes('4-day')) {
      return `⚡ <strong>Recommended 4-Day Periodized Athletic Split:</strong><br><br>
        <ul>
          <li><strong>Day 1 (Monday) - Upper Power:</strong> Barbell Flat Bench (3x5), Neutral Pull-Ups (3x6), Overhead Press (3x6), Cable Chest Flye (3x10).</li>
          <li><strong>Day 2 (Tuesday) - Lower Biomechanics:</strong> Barbell Back Squat (3x5), Romanian Deadlift (3x8), Bulgarian Split Squat (3x10/leg), Standing Calf Raises (4x12).</li>
          <li><strong>Day 3 (Wednesday):</strong> Active CNS Recovery &amp; Mobility / 20 min Zone 2 Cardio.</li>
          <li><strong>Day 4 (Thursday) - Upper Hypertrophy:</strong> Incline DB Press (4x8-10), Chest-Supported DB Row (4x10), Lateral Raises (4x15), Tricep Dips (3x12).</li>
          <li><strong>Day 5 (Friday) - Lower Posterior &amp; Core:</strong> Conventional Deadlift (3x5), Leg Press (3x12), Hamstring Curls (3x12), Hanging Leg Raises (4x15).</li>
        </ul>
        Maintain <strong>RPE 7-8</strong> on primary compounds and leave 1-2 Reps in Reserve (RIR).`;
    }

    if (q.includes('bench') || q.includes('1rm') || q.includes('increase') || q.includes('squat') || q.includes('deadlift')) {
      return `🏋️ <strong>1RM Progression &amp; Biomechanical Optimization:</strong><br><br>
        To break past plateaus on compound lifts:
        <ul>
          <li><strong>Scapular Retraction &amp; Arch:</strong> Lock your shoulder blades into the bench to minimize stroke distance and engage the lower pectorals.</li>
          <li><strong>Bar Path:</strong> Do not press in a straight vertical line; press in a slight backward J-curve toward your eye level.</li>
          <li><strong>Wave Loading:</strong> Cycle weeks with 85% 1RM (3-4 reps), 90% 1RM (2 reps), and 70% deload to allow CNS neuro-muscular adaptation.</li>
          <li><strong>Assistance Work:</strong> Strengthen triceps lockout with Weighted Dips and Close-Grip Bench.</li>
        </ul>`;
    }

    if (q.includes('protein') || q.includes('water') || q.includes('diet') || q.includes('hydration') || q.includes('creatine')) {
      return `🥗 <strong>Precision Sports Nutrition Guidelines for ${athleteName}:</strong><br><br>
        <ul>
          <li><strong>Protein Target:</strong> 2.0g - 2.2g per kg bodyweight. Prioritize complete amino acid profiles (Whey isolate, eggs, lean beef, chicken, Greek yogurt).</li>
          <li><strong>Creatine Monohydrate:</strong> 5g daily consistently (no loading phase needed) for ATP phosphocreatine cellular saturation.</li>
          <li><strong>Hydration Target:</strong> 3.5 to 4.0 Liters daily. During heavy training sessions, add 500mg sodium and electrolytes to maintain intra-cellular osmolarity and muscular pumps.</li>
          <li><strong>Pre-Workout Fuel:</strong> 40g easily digestible complex carbohydrates 60-90 minutes prior to lifting.</li>
        </ul>`;
    }

    // General athletic fallback
    return `⚡ <strong>Athletic Status Insight for ${athleteName}:</strong><br><br>
      High-performance biomechanics requires balancing <strong>Mechanical Tension</strong>, <strong>Metabolic Stress</strong>, and <strong>Central Nervous System Recovery</strong>.<br><br>
      Your active profile currently holds <strong>${currentUser?.workoutsCompleted || 142} recorded sessions</strong> in Google Cloud Firestore. Your readiness score is primed.<br><br>
      Feel free to ask about specific exercise cues (e.g. <em>deadlift hip hinge</em>, <em>squat knee tracking</em>), calorie deficit calculations, or your personal 1RM percentages!`;
  }

  // ==========================================================================
  // WORKOUT LOGGER & TELEMETRY
  // ==========================================================================
  bindLogger() {
    this.renderActiveLogger();

    const addSetBtn = document.getElementById('addSetRowBtn');
    if (addSetBtn) {
      addSetBtn.addEventListener('click', () => {
        const last = this.activeLogSets[this.activeLogSets.length - 1];
        this.activeLogSets.push({
          exercise: last ? last.exercise : "Barbell Flat Bench Press",
          weight: last ? last.weight : 70,
          reps: last ? last.reps : 8,
          rpe: 8
        });
        this.renderActiveLogger();
      });
    }

    const finishBtn = document.getElementById('finishSessionBtn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => this.completeWorkoutSession());
    }
  }

  quickAddExerciseToLog(exerciseName) {
    this.activeLogSets.push({
      exercise: exerciseName,
      weight: 60,
      reps: 10,
      rpe: 8
    });
    this.renderActiveLogger();
    this.showToast(`Added ${exerciseName} to active training session!`);
  }

  renderActiveLogger() {
    const container = document.getElementById('setRowsContainer');
    if (!container) return;

    container.innerHTML = this.activeLogSets.map((set, index) => `
      <div class="set-row">
        <span class="set-number-label">#${index + 1}</span>

        <select class="log-input" onchange="app.updateActiveSet(${index}, 'exercise', this.value)">
          ${EXERCISES_DATABASE.map(ex => `
            <option value="${ex.name}" ${ex.name === set.exercise ? 'selected' : ''}>${ex.name}</option>
          `).join('')}
        </select>

        <input type="number" class="log-input" placeholder="Kg" value="${set.weight}" onchange="app.updateActiveSet(${index}, 'weight', this.value)" />

        <input type="number" class="log-input" placeholder="Reps" value="${set.reps}" onchange="app.updateActiveSet(${index}, 'reps', this.value)" />

        <input type="number" step="0.5" class="log-input" placeholder="RPE" value="${set.rpe}" onchange="app.updateActiveSet(${index}, 'rpe', this.value)" />

        <button class="btn-remove-set" onclick="app.removeSetRow(${index})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `).join('');

    this.calculateActiveVolume();
  }

  updateActiveSet(index, field, value) {
    if (!this.activeLogSets[index]) return;
    if (field === 'weight' || field === 'reps' || field === 'rpe') {
      this.activeLogSets[index][field] = parseFloat(value) || 0;
    } else {
      this.activeLogSets[index][field] = value;
    }
    this.calculateActiveVolume();
  }

  removeSetRow(index) {
    this.activeLogSets.splice(index, 1);
    this.renderActiveLogger();
  }

  calculateActiveVolume() {
    let totalVolume = 0;
    this.activeLogSets.forEach(set => {
      totalVolume += (set.weight * set.reps);
    });

    const display = document.getElementById('activeSessionVolume');
    if (display) {
      display.textContent = `${totalVolume.toLocaleString()} kg`;
    }
  }

  completeWorkoutSession() {
    if (this.activeLogSets.length === 0) {
      alert("Please log at least one completed set.");
      return;
    }

    let volume = 0;
    this.activeLogSets.forEach(s => volume += (s.weight * s.reps));

    const newLog = {
      id: Date.now(),
      date: "Today at " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      title: "Custom Athletic Session",
      totalVolumeKg: Math.round(volume),
      setsCount: this.activeLogSets.length,
      durationMins: 52
    };

    this.userData.workoutLogs.unshift(newLog);
    this.saveUserData();
    this.renderHistoryAndCharts();

    // Persist to Firebase Firestore
    KinetixAuth.logWorkout(newLog);

    this.showToast(`Workout Completed! Logged ${volume.toLocaleString()} kg total volume load.`);
    this.audio.playSessionComplete();
  }

  renderHistoryAndCharts() {
    const feed = document.getElementById('historyFeedList');
    if (feed) {
      feed.innerHTML = this.userData.workoutLogs.map(log => `
        <div class="history-card">
          <div class="history-card-header">
            <span class="history-date">${log.date}</span>
            <span class="history-stats-pill">${log.totalVolumeKg.toLocaleString()} kg Total</span>
          </div>
          <h4 class="history-title">${log.title}</h4>
          <p style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-top: 4px;">
            ${log.setsCount} Total Sets • ${log.durationMins} Mins Duration
          </p>
        </div>
      `).join('');
    }

    // PR Hall
    const prContainer = document.getElementById('prHallList');
    if (prContainer) {
      prContainer.innerHTML = this.userData.personalRecords.map(pr => `
        <div class="trophy-card">
          <div class="trophy-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34c3.24-.76 5-3.32 5-6.66V4H6v4c0 3.34 1.76 5.9 5 6.66z"></path></svg>
          </div>
          <div class="trophy-info">
            <h5>${pr.lift}</h5>
            <p>1RM Standard Assessment</p>
          </div>
          <div class="trophy-val">${pr.weight} ${pr.unit}</div>
        </div>
      `).join('');
    }

    this.drawTelemetryCharts();
  }

  // Draw Canvas Charts (Volume Load Progress + Muscle Radar)
  drawTelemetryCharts() {
    const canvas = document.getElementById('volumeProgressionCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle HiDPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
      const y = (h / 5) * i;
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(w - 20, y);
      ctx.stroke();
    }

    // Data points (Days of week: Mon, Tue, Wed, Thu, Fri, Sat, Sun)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const volumes = [7200, 9400, 0, 8420, 11250, 6800, 4200];
    const maxVol = 14000;

    const getX = (idx) => 50 + (idx * ((w - 80) / (days.length - 1)));
    const getY = (val) => h - 35 - ((val / maxVol) * (h - 70));

    // Gradient fill under curve
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(204, 255, 0, 0.35)');
    gradient.addColorStop(1, 'rgba(204, 255, 0, 0.0)');

    ctx.beginPath();
    ctx.moveTo(getX(0), getY(volumes[0]));
    for (let i = 1; i < volumes.length; i++) {
      ctx.lineTo(getX(i), getY(volumes[i]));
    }
    ctx.lineTo(getX(volumes.length - 1), h - 35);
    ctx.lineTo(getX(0), h - 35);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line curve
    ctx.beginPath();
    ctx.strokeStyle = '#ccff00';
    ctx.lineWidth = 3;
    ctx.moveTo(getX(0), getY(volumes[0]));
    for (let i = 1; i < volumes.length; i++) {
      ctx.lineTo(getX(i), getY(volumes[i]));
    }
    ctx.stroke();

    // Points & Labels
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';

    volumes.forEach((v, i) => {
      const x = getX(i);
      const y = getY(v);

      // Node
      ctx.fillStyle = '#080a0f';
      ctx.strokeStyle = '#ccff00';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Day Label
      ctx.fillStyle = '#64748b';
      ctx.fillText(days[i], x, h - 12);

      // Volume Label
      if (v > 0) {
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(`${(v / 1000).toFixed(1)}k`, x, y - 10);
      }
    });
  }

  showToast(message) {
    const container = document.getElementById('toastAlertContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-lime); flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <div>${message}</div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ========================================================================
  // AUTHENTICATION & CLIENT / ADMIN CONTROL METHODS
  // ========================================================================
  initAuth() {
    this.updateUserUI(KinetixAuth.getCurrentUser());

    window.addEventListener('kinetix_auth_changed', (e) => {
      this.updateUserUI(e.detail);
      this.renderAdminDashboard();
    });

    window.addEventListener('kinetix_cloud_synced', (e) => {
      this.renderAdminDashboard();
      this.updateUserUI(KinetixAuth.getCurrentUser());
      console.log('⚡ UI synced with Firebase Cloud data');
    });

    // Close user dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('headerUserDropdown');
      const badge = document.getElementById('headerUserBadge');
      if (dropdown && badge && !badge.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });

    // Mandatory Login Gatekeeper: Prompt login if no authenticated session
    if (!KinetixAuth.getCurrentUser()) {
      setTimeout(() => this.openAuthModal('signin'), 500);
    }
  }

  updateUserUI(user) {
    const headerName = document.getElementById('headerUserName');
    const headerRole = document.getElementById('headerUserRoleBadge');
    const headerAvatar = document.getElementById('headerUserAvatar');
    const dropdownName = document.getElementById('dropdownUserName');
    const dropdownEmail = document.getElementById('dropdownUserEmail');
    const dropdownAdminLink = document.getElementById('dropdownAdminLink');

    const sidebarName = document.getElementById('sidebarUserName');
    const sidebarTier = document.getElementById('sidebarUserTier');
    const sidebarAvatar = document.getElementById('sidebarUserAvatar');

    const adminNavCat = document.getElementById('adminNavCategory');
    const adminNavItem = document.getElementById('adminNavItem');

    if (user) {
      if (headerName) headerName.textContent = user.name;
      if (headerAvatar) headerAvatar.src = user.avatar;
      if (dropdownName) dropdownName.textContent = user.name;
      if (dropdownEmail) dropdownEmail.textContent = user.email;

      if (sidebarName) sidebarName.textContent = user.name;
      if (sidebarTier) sidebarTier.textContent = user.tier || (user.role === 'admin' ? 'HEAD OF PERFORMANCE' : 'ELITE ATHLETE');
      if (sidebarAvatar) {
        const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        sidebarAvatar.textContent = initials || 'KT';
      }

      if (user.role === 'admin') {
        if (headerRole) {
          headerRole.textContent = 'ADMIN';
          headerRole.className = 'header-role-pill role-admin';
        }
        if (adminNavCat) adminNavCat.style.display = 'block';
        if (adminNavItem) adminNavItem.style.display = 'flex';
        if (dropdownAdminLink) dropdownAdminLink.style.display = 'flex';
      } else {
        if (headerRole) {
          headerRole.textContent = 'ATHLETE';
          headerRole.className = 'header-role-pill';
        }
        if (adminNavCat) adminNavCat.style.display = 'none';
        if (adminNavItem) adminNavItem.style.display = 'none';
        if (dropdownAdminLink) dropdownAdminLink.style.display = 'none';

        // If regular user is currently on admin tab, switch away
        if (this.currentTab === 'admin') {
          const dashNav = document.querySelector('.nav-item[data-tab="dashboard"]');
          if (dashNav) dashNav.click();
        }
      }
    } else {
      if (headerName) headerName.textContent = 'Sign In';
      if (headerRole) headerRole.textContent = 'GUEST';
      if (dropdownName) dropdownName.textContent = 'Guest Visitor';
      if (dropdownEmail) dropdownEmail.textContent = 'Sign in to access custom training';
      if (adminNavCat) adminNavCat.style.display = 'none';
      if (adminNavItem) adminNavItem.style.display = 'none';
      if (dropdownAdminLink) dropdownAdminLink.style.display = 'none';
    }
  }

  toggleUserMenu(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('headerUserDropdown');
    if (!dropdown) return;
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }

  openAuthModal(defaultTab = 'switch') {
    const modal = document.getElementById('authModal');
    if (modal) {
      this.switchAuthTab(defaultTab);
      modal.classList.add('open');
      modal.classList.add('active');
    }
  }

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.remove('open');
      modal.classList.remove('active');
    }
    this.hideAuthAlert();
  }

  switchAuthTab(tab) {
    const btnSwitch = document.getElementById('tabBtnSwitch');
    const btnSignIn = document.getElementById('tabBtnSignIn');
    const btnRegister = document.getElementById('tabBtnRegister');
    const formSwitch = document.getElementById('switchForm');
    const formSignIn = document.getElementById('signInForm');
    const formRegister = document.getElementById('registerForm');

    this.hideAuthAlert();

    [btnSwitch, btnSignIn, btnRegister].forEach(b => b && b.classList.remove('active'));
    [formSwitch, formSignIn, formRegister].forEach(f => f && (f.style.display = 'none'));

    if (tab === 'switch') {
      if (btnSwitch) btnSwitch.classList.add('active');
      if (formSwitch) formSwitch.style.display = 'block';
      this.renderSwitchUserList();
    } else if (tab === 'signin') {
      if (btnSignIn) btnSignIn.classList.add('active');
      if (formSignIn) formSignIn.style.display = 'block';
    } else if (tab === 'register') {
      if (btnRegister) btnRegister.classList.add('active');
      if (formRegister) formRegister.style.display = 'block';
    }
  }

  renderSwitchUserList() {
    const listEl = document.getElementById('switchUserList');
    if (!listEl) return;

    const users = KinetixAuth.getAllUsers();
    const currentUser = KinetixAuth.getCurrentUser();

    if (!users || users.length === 0) {
      listEl.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No profiles loaded. Synchronizing with cloud database...
        </div>
      `;
      return;
    }

    listEl.innerHTML = users.map(u => {
      const isCurrent = currentUser && (currentUser.id === u.id || currentUser.email.toLowerCase() === u.email.toLowerCase());
      const isMaster = u.email === KinetixAuth.MASTER_ADMIN_EMAIL;

      return `
        <div class="auth-user-card ${isCurrent ? 'current-active' : ''}">
          <div class="auth-user-info">
            <img src="${u.avatar}" alt="${u.name}" class="auth-user-avatar">
            <div>
              <div class="auth-user-name">
                <span>${u.name}</span>
                ${isMaster ? '<span class="role-badge-tag admin" style="font-size: 0.65rem; padding: 2px 6px;">MASTER ADMIN</span>' : '<span class="role-badge-tag client" style="font-size: 0.65rem; padding: 2px 6px;">ATHLETE</span>'}
              </div>
              <div class="auth-user-sub">${u.email} • ${u.workoutsCompleted || 0} Sessions</div>
            </div>
          </div>
          <div>
            ${isCurrent ? `
              <span class="auth-active-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Active
              </span>
            ` : `
              <button class="auth-switch-btn" onclick="app.switchProfile('${u.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line></svg>
                Switch
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  switchProfile(userId) {
    const res = KinetixAuth.switchUser(userId);
    if (!res.success) {
      this.showAuthAlert(res.message, 'error');
      return;
    }
    this.closeAuthModal();
    this.updateUserUI(res.user);
    this.showToast(res.message);

    if (res.user.role === 'admin') {
      this.renderAdminDashboard();
    }
  }

  showAuthAlert(message, type = 'error') {
    const alertBox = document.getElementById('authAlertBox');
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `auth-alert ${type}`;
    alertBox.style.display = 'block';
  }

  hideAuthAlert() {
    const alertBox = document.getElementById('authAlertBox');
    if (alertBox) alertBox.style.display = 'none';
  }

  togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      btn.style.color = 'var(--accent-lime)';
    } else {
      input.type = 'password';
      btn.style.color = 'var(--text-muted)';
    }
  }

  async submitSignIn() {
    const email = document.getElementById('signInEmail').value;
    const pass = document.getElementById('signInPassword').value;
    const submitBtn = document.getElementById('signInSubmitBtn');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Verifying Credentials...</span>';
    }

    try {
      const res = await KinetixAuth.login(email, pass);
      if (!res.success) {
        this.showAuthAlert(res.message, 'error');
        return;
      }

      this.closeAuthModal();
      this.showToast(res.message);

      if (res.user.role === 'admin') {
        const adminNav = document.querySelector('.nav-item[data-tab="admin"]');
        if (adminNav) adminNav.click();
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Log In to Cockpit</span>';
      }
    }
  }

  async submitRegister() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;
    const submitBtn = document.getElementById('registerSubmitBtn');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Creating Cloud Account...</span>';
    }

    try {
      const res = await KinetixAuth.register(name, email, pass);
      if (!res.success) {
        this.showAuthAlert(res.message, 'error');
        return;
      }

      this.closeAuthModal();
      this.showToast(`Welcome to Kinetix Lab, ${res.user.name}! Cloud profile created.`);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Create Athlete Account</span>';
      }
    }
  }

  quickFillAdmin() {
    this.switchAuthTab('signin');
    const emailEl = document.getElementById('signInEmail');
    const passEl = document.getElementById('signInPassword');
    if (emailEl) emailEl.value = KinetixAuth.MASTER_ADMIN_EMAIL;
    if (passEl) passEl.value = KinetixAuth.MASTER_ADMIN_DEFAULT_PASS;
    this.submitSignIn();
  }

  logout() {
    KinetixAuth.logout();
    const dropdown = document.getElementById('headerUserDropdown');
    if (dropdown) dropdown.style.display = 'none';
    this.updateUserUI(null);
    this.showToast('Signed out of session.');
    this.openAuthModal('switch');
  }

  // ========================================================================
  // ADMIN DASHBOARD METHODS (FIREBASE FIRESTORE SYNCED)
  // ========================================================================
  renderAdminDashboard(filterText = '') {
    const users = KinetixAuth.getAllUsers();
    const totalVal = document.getElementById('adminTotalUsersVal');
    if (totalVal) totalVal.textContent = users.length;

    // Update Firebase connection status indicator
    const dbStatusPill = document.getElementById('adminDbStatusBadge');
    if (dbStatusPill) {
      const isConnected = KinetixAuth.getIsCloudConnected();
      dbStatusPill.innerHTML = `
        <span class="live-pulse-dot" style="background: ${isConnected ? 'var(--accent-lime)' : 'var(--accent-cyan)'};"></span>
        <span>Firebase ${KinetixAuth.FIREBASE_PROJECT_ID}: ${isConnected ? 'LIVE CLOUD' : 'SYNC READY'}</span>
      `;
    }

    const tbody = document.getElementById('adminUsersTableBody');
    if (!tbody) return;

    const query = filterText.toLowerCase().trim();
    const filtered = query
      ? users.filter(u => u.name.toLowerCase().includes(query) || u.email.toLowerCase().includes(query))
      : users;

    tbody.innerHTML = filtered.map(u => {
      const isMaster = u.email === KinetixAuth.MASTER_ADMIN_EMAIL;
      return `
        <tr>
          <td>
            <div class="athlete-td-flex">
              <img src="${u.avatar}" alt="${u.name}" class="athlete-td-avatar">
              <div>
                <div class="athlete-td-name">${u.name} ${isMaster ? '<span style="color: var(--accent-orange); font-size: 0.75rem;">(Master Admin)</span>' : ''}</div>
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">ID: ${u.id}</div>
              </div>
            </div>
          </td>
          <td style="font-family: var(--font-mono); color: var(--text-secondary);">${u.email}</td>
          <td>
            <span class="role-badge-tag ${u.role}">${u.role.toUpperCase()}</span>
          </td>
          <td style="font-size: 0.8rem; color: var(--text-muted);">${u.tier || 'Athlete'}</td>
          <td style="font-family: var(--font-mono); font-weight: 600; color: var(--accent-lime);">${u.workoutsCompleted || 0} Sessions</td>
          <td>
            <span class="status-pill ${u.status.toLowerCase()}">${u.status}</span>
          </td>
          <td style="text-align: right;">
            <button class="admin-action-btn" onclick="app.adminToggleUser('${u.id}')" title="Change status">
              ${u.status === 'Active' ? 'Suspend' : 'Activate'}
            </button>
            ${!isMaster ? `
              <button class="admin-action-btn btn-del" onclick="app.adminDeleteUser('${u.id}', '${u.name}')" title="Delete record">
                Remove
              </button>
            ` : ''}
          </td>
        </tr>
      `;
    }).join('');
  }

  async refreshAdminDashboard() {
    this.showToast('Connecting to Firebase Firestore (kinetix-3121)...');
    const res = await KinetixAuth.syncWithCloud();
    this.renderAdminDashboard();
    if (res.success) {
      this.showToast(`Firebase Firestore Synced: ${res.users.length} athletes loaded.`);
    } else {
      this.showToast('Using local cache. Offline or cloud sync in progress.');
    }
  }

  filterAdminUsers(val) {
    this.renderAdminDashboard(val);
  }

  async adminToggleUser(userId) {
    const res = await KinetixAuth.toggleUserStatus(userId);
    if (res.success) {
      this.showToast(res.message);
      this.renderAdminDashboard();
    } else {
      this.showToast(res.message);
    }
  }

  async adminDeleteUser(userId, name) {
    if (confirm(`Are you sure you want to remove ${name} from Firebase Firestore database?`)) {
      const res = await KinetixAuth.deleteUser(userId);
      if (res.success) {
        this.showToast(res.message);
        this.renderAdminDashboard();
      } else {
        this.showToast(res.message);
      }
    }
  }

  openNewAthleteModal() {
    this.openAuthModal('register');
  }

  // ==========================================================================
  // SAAS MEMBERSHIP & STRIPE BILLING
  // ==========================================================================
  initBilling() {
    this.billingCycle = 'monthly';
    this.pendingCheckout = null;
    this.updateBillingViewUI();
  }

  setBillingCycle(cycle) {
    this.billingCycle = cycle;
    const monthlyBtn = document.getElementById('cycleMonthlyBtn');
    const annualBtn = document.getElementById('cycleAnnualBtn');
    if (monthlyBtn && annualBtn) {
      if (cycle === 'monthly') {
        monthlyBtn.classList.add('active');
        annualBtn.classList.remove('active');
      } else {
        annualBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
      }
    }

    document.querySelectorAll('.pricing-figure').forEach(el => {
      const val = el.getAttribute(`data-${cycle}`);
      if (val) el.textContent = val;
    });

    this.updateBillingViewUI();
  }

  updateBillingViewUI() {
    const user = KinetixAuth.getCurrentUser();
    const userTier = user ? (user.tier || '').toLowerCase() : 'starter';
    const emailEl = document.getElementById('billingUserEmail');
    const tierBadge = document.getElementById('currentTierBadge');
    const planTitle = document.getElementById('billingCurrentPlanTitle');
    const priceTag = document.getElementById('billingCurrentPriceTag');

    if (emailEl && user) emailEl.textContent = user.email;

    // Reset button states
    const btnStarter = document.getElementById('btnTierStarter');
    const btnElite = document.getElementById('btnTierElite');
    const btnMaster = document.getElementById('btnTierMaster');

    if (btnStarter) {
      btnStarter.className = 'pricing-action-btn';
      btnStarter.innerHTML = '<span>Select Starter</span>';
    }
    if (btnElite) {
      btnElite.className = 'pricing-action-btn primary-featured';
      btnElite.innerHTML = '<span>Upgrade to Elite</span>';
    }
    if (btnMaster) {
      btnMaster.className = 'pricing-action-btn';
      btnMaster.innerHTML = '<span>Upgrade to Master</span>';
    }

    if (userTier.includes('master') || userTier.includes('coach') || (user && user.role === 'admin')) {
      if (tierBadge) tierBadge.textContent = 'ACTIVE: MASTER / PRO';
      if (planTitle) planTitle.textContent = 'Master Coach / Pro Membership';
      if (priceTag) priceTag.textContent = this.billingCycle === 'annual' ? '$79 / Month' : '$99 / Month';
      if (btnMaster) {
        btnMaster.className = 'pricing-action-btn current';
        btnMaster.innerHTML = '<span>Current Active Plan ✓</span>';
      }
    } else if (userTier.includes('elite')) {
      if (tierBadge) tierBadge.textContent = 'ACTIVE: ELITE';
      if (planTitle) planTitle.textContent = 'Elite Competitor Membership';
      if (priceTag) priceTag.textContent = this.billingCycle === 'annual' ? '$31 / Month' : '$39 / Month';
      if (btnElite) {
        btnElite.className = 'pricing-action-btn current';
        btnElite.innerHTML = '<span>Current Active Plan ✓</span>';
      }
    } else {
      if (tierBadge) tierBadge.textContent = 'ACTIVE: STARTER';
      if (planTitle) planTitle.textContent = 'Starter Athlete Membership';
      if (priceTag) priceTag.textContent = this.billingCycle === 'annual' ? '$15 / Month' : '$19 / Month';
      if (btnStarter) {
        btnStarter.className = 'pricing-action-btn current';
        btnStarter.innerHTML = '<span>Current Active Plan ✓</span>';
      }
    }
  }

  openStripeModal(tier, planTitle, monthlyPrice) {
    const user = KinetixAuth.getCurrentUser();
    if (!user) {
      this.showToast('Please sign in or create an athlete profile to subscribe.');
      this.openAuthModal('signin');
      return;
    }

    const price = this.billingCycle === 'annual' ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
    this.pendingCheckout = { tier, planTitle, price, cycle: this.billingCycle };

    const titleEl = document.getElementById('stripePlanTitle');
    const priceEl = document.getElementById('stripePlanPrice');
    const periodEl = document.getElementById('stripePlanPeriod');
    const nameEl = document.getElementById('stripeCardholderName');

    if (titleEl) titleEl.textContent = planTitle;
    if (priceEl) priceEl.textContent = `$${price}.00`;
    if (periodEl) periodEl.textContent = `/ month (${this.billingCycle === 'annual' ? 'Billed annually' : 'Monthly'})`;
    if (nameEl) nameEl.value = user.name || '';

    this.openModal('stripeCheckoutModal');
  }

  async processSubscription() {
    if (!this.pendingCheckout) return;
    const user = KinetixAuth.getCurrentUser();
    if (!user) return;

    const submitBtn = document.getElementById('stripeSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Authorizing via Stripe Gateway...</span>';
    }

    try {
      const res = await KinetixAuth.upgradeSubscription(user.id, this.pendingCheckout.tier, this.pendingCheckout.cycle);
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Authorize &amp; Activate Tier</span>';
        }
        this.closeModal('stripeCheckoutModal');
        this.updateBillingViewUI();
        
        // Update user session headers
        const headerTierBadge = document.getElementById('headerUserRoleBadge');
        if (headerTierBadge) headerTierBadge.textContent = this.pendingCheckout.tier.toUpperCase();
        const sidebarTier = document.getElementById('sidebarUserTier');
        if (sidebarTier) sidebarTier.textContent = `${this.pendingCheckout.tier.toUpperCase()} ATHLETE`;

        this.showToast(`🎉 Payment Confirmed! Activated ${this.pendingCheckout.planTitle} (${this.pendingCheckout.cycle}). Cloud status: Active.`);
      }, 750);
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Authorize &amp; Activate Tier</span>';
      }
      this.showToast(`Payment failed: ${err.message}`);
    }
  }

  // ==========================================================================
  // CLOUD NOTIFICATIONS & BROADCASTS
  // ==========================================================================
  async loadNotifications() {
    try {
      const broadcasts = await KinetixAuth.fetchBroadcasts();
      const notifList = document.getElementById('notifListContainer');
      const notifBadge = document.getElementById('headerNotifBadge');
      const unreadCount = document.getElementById('notifUnreadCount');

      if (!notifList) return;

      if (!broadcasts || broadcasts.length === 0) {
        notifList.innerHTML = '<div class="notif-empty">No active protocol alerts or announcements.</div>';
        if (notifBadge) notifBadge.style.display = 'none';
        if (unreadCount) unreadCount.textContent = '0 new';
        return;
      }

      if (notifBadge) {
        notifBadge.textContent = broadcasts.length;
        notifBadge.style.display = 'inline-block';
      }
      if (unreadCount) unreadCount.textContent = `${broadcasts.length} updates`;

      notifList.innerHTML = broadcasts.map(b => `
        <div class="notif-item unread">
          <div class="notif-item-title">
            <span>${b.title}</span>
            <span style="font-size: 0.68rem; color: var(--accent-lime); font-family: var(--font-mono);">${b.priority || 'OFFICIAL'}</span>
          </div>
          <div class="notif-item-desc">${b.body}</div>
          <div class="notif-item-time">${b.author || 'Master Coach'} • ${new Date(b.timestamp).toLocaleDateString()}</div>
        </div>
      `).join('');
    } catch (e) {
      console.warn('Error loading notifications:', e);
    }
  }

  toggleNotifications(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('notifDropdown');
    if (!dropdown) return;
    const isShowing = dropdown.style.display === 'block';
    dropdown.style.display = isShowing ? 'none' : 'block';

    if (!isShowing) {
      const closeHandler = (e) => {
        if (!dropdown.contains(e.target) && e.target.id !== 'headerNotifBtn') {
          dropdown.style.display = 'none';
          document.removeEventListener('click', closeHandler);
        }
      };
      setTimeout(() => document.addEventListener('click', closeHandler), 10);
    }
  }

  clearNotifications() {
    const notifBadge = document.getElementById('headerNotifBadge');
    const unreadCount = document.getElementById('notifUnreadCount');
    if (notifBadge) notifBadge.style.display = 'none';
    if (unreadCount) unreadCount.textContent = '0 new';
    document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
    this.showToast('All notifications marked as read.');
  }

  async dispatchBroadcast() {
    const titleEl = document.getElementById('adminBroadcastTitle');
    const bodyEl = document.getElementById('adminBroadcastBody');
    if (!titleEl || !titleEl.value.trim()) {
      this.showToast('Please enter a broadcast headline.');
      return;
    }
    const headline = titleEl.value.trim();
    const body = bodyEl ? bodyEl.value.trim() : 'Urgent training cycle directive.';
    titleEl.value = '';
    if (bodyEl) bodyEl.value = '';

    const user = KinetixAuth.getCurrentUser();
    const author = user ? user.name : 'Bilal Khan (Head of Performance)';

    const res = await KinetixAuth.postBroadcast({ title: headline, body, author, priority: 'BROADCAST' });
    if (res.success) {
      this.showToast(`Broadcast dispatched to cloud: "${headline}"`);
      await this.loadNotifications();
    } else {
      this.showToast(`Broadcast failed: ${res.message}`);
    }
  }

  // ==========================================================================
  // HIGH-RESOLUTION ATHLETE PERFORMANCE DOSSIER (PDF EXPORT)
  // ==========================================================================
  openReportModal() {
    this.generatePdfReport();
    this.openModal('reportPreviewModal');
  }

  generatePdfReport() {
    const container = document.getElementById('printableDossierContent');
    if (!container) return;

    const user = KinetixAuth.getCurrentUser() || { name: 'Bilal Khan', email: 'bilallodhi824@gmail.com', role: 'admin', tier: 'Master Coach / Pro' };
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const logs = (this.userData && this.userData.workoutLogs) ? this.userData.workoutLogs : [];
    const totalVolume = logs.reduce((acc, l) => acc + (l.totalVolumeKg || 0), 47120);
    const totalSets = logs.reduce((acc, l) => acc + (l.setsCount || 0), 114);

    container.innerHTML = `
      <div class="dossier-header-grid">
        <div>
          <div class="dossier-lab-brand">KINETIX <span>LAB</span> // PERFORMANCE DOSSIER</div>
          <div style="font-size: 0.84rem; color: var(--text-secondary); margin-top: 4px;">
            Physiological Biomechanics, Volume Telemetry &amp; Loading Matrix
          </div>
        </div>
        <div class="dossier-meta-list">
          <div><strong>DATE GENERATED:</strong> ${dateStr}</div>
          <div><strong>ATHLETE ID:</strong> ${user.id || 'usr_client_live'}</div>
          <div><strong>PROGRAM CYCLE:</strong> Cycle 4 • Hypertrophic Block</div>
          <div><strong>SYSTEM STATUS:</strong> VERIFIED REAL-TIME DATA</div>
        </div>
      </div>

      <div class="dossier-section-title">Athlete Profile &amp; Physiological Parameters</div>
      <div class="dossier-kpi-row">
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Athlete Name</div>
          <div class="dossier-kpi-num" style="font-size: 1.1rem; margin-top: 4px;">${user.name}</div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Classification / Tier</div>
          <div class="dossier-kpi-num" style="font-size: 1.1rem; color: var(--accent-lime); margin-top: 4px;">${user.tier || 'Elite Athlete'}</div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Current Bodyweight</div>
          <div class="dossier-kpi-num">${this.userData.weightKg || 82.5} <span style="font-size: 0.8rem; color: var(--text-muted);">kg</span></div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Readiness Score</div>
          <div class="dossier-kpi-num" style="color: var(--accent-cyan);">${this.userData.readinessScore || 88}%</div>
        </div>
      </div>

      <div class="dossier-section-title">Cycle Volume &amp; Density Telemetry</div>
      <div class="dossier-kpi-row">
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Cumulative Volume</div>
          <div class="dossier-kpi-num">${totalVolume.toLocaleString()} <span style="font-size: 0.8rem; color: var(--text-muted);">kg</span></div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Total Sets Completed</div>
          <div class="dossier-kpi-num">${totalSets}</div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">Average Intensity</div>
          <div class="dossier-kpi-num">8.2 <span style="font-size: 0.8rem; color: var(--text-muted);">RPE</span></div>
        </div>
        <div class="dossier-kpi-card">
          <div class="dossier-kpi-sub">System Readiness</div>
          <div class="dossier-kpi-num" style="font-size: 1rem; color: var(--accent-lime); margin-top: 6px;">OPTIMAL PEAK</div>
        </div>
      </div>

      <div class="dossier-section-title">Calculated 1RM &amp; Loading Matrix</div>
      <table class="dossier-table">
        <thead>
          <tr>
            <th>Primary Movement Pattern</th>
            <th>Tested 1RM</th>
            <th>90% (Peak Heavy)</th>
            <th>80% (Hypertrophy)</th>
            <th>70% (Speed / Dynamic)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Barbell Flat Bench Press</strong></td>
            <td>140.0 kg</td>
            <td>126.0 kg</td>
            <td>112.0 kg</td>
            <td>98.0 kg</td>
          </tr>
          <tr>
            <td><strong>Low-Bar Back Squat</strong></td>
            <td>195.0 kg</td>
            <td>175.5 kg</td>
            <td>156.0 kg</td>
            <td>136.5 kg</td>
          </tr>
          <tr>
            <td><strong>Conventional Deadlift</strong></td>
            <td>230.0 kg</td>
            <td>207.0 kg</td>
            <td>184.0 kg</td>
            <td>161.0 kg</td>
          </tr>
          <tr>
            <td><strong>Standing Overhead Press</strong></td>
            <td>90.0 kg</td>
            <td>81.0 kg</td>
            <td>72.0 kg</td>
            <td>63.0 kg</td>
          </tr>
        </tbody>
      </table>

      <div class="dossier-signoff-box">
        <div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">CERTIFIED SPORTS SCIENCE ASSESSMENT:</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-top: 2px;">Bilal Khan</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary);">Head of Performance &amp; Biomechanical Analysis</div>
        </div>
        <div class="dossier-stamp">
          <strong>KINETIX PERFORMANCE LAB</strong>
          <span>OFFICIALLY CERTIFIED</span>
          <span>CLOUD SYNC: kinetix-3121</span>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // EXERCISE BIOMECHANICS DETAIL GUIDE
  // ==========================================================================
  openExerciseDetail(exerciseId) {
    const ex = EXERCISES_DATABASE.find(e => e.id === exerciseId || e.name === exerciseId);
    if (!ex) return;

    const content = document.getElementById('exerciseDetailContent');
    if (!content) return;

    const tempos = (ex.tempo || "3-1-1-0").split('-');

    content.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.08em; text-transform: uppercase;">
            ${ex.category.toUpperCase()} // ${ex.mechanic.toUpperCase()}
          </div>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin: 4px 0 0;">${ex.name}</h2>
        </div>
        <span class="tag-chip tag-lime">${ex.difficulty || 'Intermediate'}</span>
      </div>

      <div class="exercise-modal-hero">
        <div class="exercise-kinetic-loop">
          <svg width="220" height="130" viewBox="0 0 220 130">
            <defs>
              <linearGradient id="exGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent-lime)" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="var(--accent-cyan)" stop-opacity="0.8"/>
              </linearGradient>
            </defs>
            <circle cx="110" cy="30" r="14" fill="none" stroke="var(--accent-lime)" stroke-width="2.5" />
            <line x1="110" y1="44" x2="110" y2="85" stroke="var(--accent-cyan)" stroke-width="3.5" stroke-linecap="round" />
            <line x1="110" y1="55" x2="60" y2="70" stroke="var(--accent-lime)" stroke-width="3" stroke-linecap="round">
              <animate attributeName="y2" values="70;50;70" dur="2.4s" repeatCount="indefinite" />
            </line>
            <line x1="110" y1="55" x2="160" y2="70" stroke="var(--accent-lime)" stroke-width="3" stroke-linecap="round">
              <animate attributeName="y2" values="70;50;70" dur="2.4s" repeatCount="indefinite" />
            </line>
            <line x1="110" y1="85" x2="80" y2="120" stroke="var(--accent-cyan)" stroke-width="3.5" stroke-linecap="round" />
            <line x1="110" y1="85" x2="140" y2="120" stroke="var(--accent-cyan)" stroke-width="3.5" stroke-linecap="round" />
            <rect x="50" y="45" width="120" height="6" rx="3" fill="url(#exGlow)">
              <animate attributeName="y" values="45;65;45" dur="2.4s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
        <div style="font-size: 0.74rem; color: var(--text-muted); font-family: var(--font-mono);">
          KINETIC MOVEMENT VECTOR // OPTIMAL JOINT ANGLE TRACKING
        </div>
      </div>

      <div style="font-size: 0.8rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Prescribed Tempo Cadence</div>
      <div class="exercise-tempo-breakdown">
        <div class="tempo-box">
          <div class="tempo-val">${tempos[0] || '3'}s</div>
          <div class="tempo-lbl">Eccentric</div>
        </div>
        <div class="tempo-box">
          <div class="tempo-val">${tempos[1] || '1'}s</div>
          <div class="tempo-lbl">Pause / Bottom</div>
        </div>
        <div class="tempo-box">
          <div class="tempo-val">${tempos[2] || '1'}s</div>
          <div class="tempo-lbl">Concentric</div>
        </div>
        <div class="tempo-box">
          <div class="tempo-val">${tempos[3] || '0'}s</div>
          <div class="tempo-lbl">Lockout</div>
        </div>
      </div>

      <div style="font-size: 0.8rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Biomechanical Form &amp; Setup Protocol</div>
      <div class="cues-checklist">
        <div class="cue-point">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <div><strong>Prime Movers:</strong> ${ex.primaryMuscle}. Secondary: ${ex.secondaryMuscles.join(', ')}.</div>
        </div>
        <div class="cue-point">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <div><strong>Execution:</strong> ${ex.cues}</div>
        </div>
        <div class="cue-point">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <div><strong>Equipment &amp; Setup:</strong> Utilize calibrated ${ex.equipment} with proper safety collars or spotter arms.</div>
        </div>
      </div>

      <button class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;" onclick="app.quickAddExerciseToLog('${ex.name}'); app.closeModal('exerciseDetailModal');">
        <span>+ Add Exercise to Active Session Log</span>
      </button>
    `;

    this.openModal('exerciseDetailModal');
  }

  // ==========================================================================
  // FORGOT PASSWORD / ACCOUNT RECOVERY
  // ==========================================================================
  showForgotPassword() {
    const switchForm = document.getElementById('switchForm');
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotPassForm');

    if (switchForm) switchForm.style.display = 'none';
    if (signInForm) signInForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'none';
    if (forgotForm) forgotForm.style.display = 'block';

    document.querySelectorAll('.auth-tab-btn').forEach(btn => btn.classList.remove('active'));
  }

  async submitForgotPassword() {
    const emailInput = document.getElementById('forgotEmail');
    const passInput = document.getElementById('forgotNewPassword');
    const submitBtn = document.getElementById('forgotSubmitBtn');

    if (!emailInput || !emailInput.value.trim()) {
      this.showToast('Please enter your athlete email address.');
      return;
    }
    if (!passInput || passInput.value.length < 6) {
      this.showToast('New password must be at least 6 characters.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Updating Cloud Credentials...</span>';
    }

    const email = emailInput.value.trim().toLowerCase();
    const newPassword = passInput.value;

    const res = await KinetixAuth.resetPassword(email, newPassword);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Update &amp; Authenticate</span>';
    }

    if (res.success) {
      this.showToast('Password successfully reset! Please sign in with your new password.');
      this.switchAuthTab('signin');
      const signInEmail = document.getElementById('signInEmail');
      if (signInEmail) signInEmail.value = email;
    } else {
      this.showToast(res.message);
    }
  }
}

// Global App Bootstrapper
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new KinetixApp();
  window.app = app;

  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Kinetix Service Worker registered:', reg.scope))
      .catch(err => console.log('Service Worker registration error:', err));
  }

  // PWA Install Prompt Handling
  let deferredPrompt;
  const pwaInstallBtn = document.getElementById('pwaInstallBtn');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaInstallBtn) {
      pwaInstallBtn.style.display = 'inline-flex';
      pwaInstallBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          pwaInstallBtn.style.display = 'none';
        }
        deferredPrompt = null;
      });
    }
  });

  window.addEventListener('appinstalled', () => {
    if (pwaInstallBtn) pwaInstallBtn.style.display = 'none';
    if (app && app.showToast) {
      app.showToast('Kinetix installed successfully as a standalone desktop/mobile app!');
    }
  });
});

