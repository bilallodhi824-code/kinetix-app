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
    icon: "🏋️‍♂️"
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
    icon: "💪"
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
    icon: "⚡"
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
    icon: "🔥"
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
    icon: "⚡"
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
    icon: "🧗"
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
    icon: "🎯"
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
    icon: "🛡️"
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
    icon: "🏋️"
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
    icon: "⚡"
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
    icon: "🔥"
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
    icon: "🚀"
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
    icon: "🌀"
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
    icon: "👟"
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
    icon: "🛡️"
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
    icon: "🦅"
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
    icon: "⚡"
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
    icon: "💪"
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
    icon: "💀"
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
    icon: "🔨"
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
    icon: "⛓️"
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
    icon: "🧘"
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
    icon: "🌪️"
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
    icon: "⚙️"
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
    this.bindNavigation();
    this.renderMetricsHeader();
    this.renderExerciseVault();
    this.renderAnatomyMap();
    this.renderProgramCards();
    this.bindHIITTimer();
    this.bindCalculators();
    this.bindLogger();
    this.renderHistoryAndCharts();

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
            <h3 class="exercise-card-title">${ex.icon} ${ex.name}</h3>
            <span class="exercise-mechanic-badge">${ex.mechanic}</span>
          </div>

          <div class="exercise-muscles-row">
            <span class="muscle-badge-primary">🎯 ${ex.primaryMuscle}</span>
            ${ex.secondaryMuscles.map(m => `<span class="muscle-badge-secondary">${m}</span>`).join('')}
          </div>

          <div class="exercise-cues-box">
            <strong>Form & Biomechanics:</strong> ${ex.cues}
          </div>
        </div>

        <div class="exercise-card-footer">
          <span class="exercise-equipment-tag">⚙️ ${ex.equipment} • Tempo: ${ex.tempo}</span>
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.78rem;" onclick="app.quickAddExerciseToLog('${ex.name}')">
            + Add to Session
          </button>
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

    modalBackdrop.classList.add('open');
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('open');
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
        this.showToast("🎉 Workout Finished! Outstanding high-intensity performance!");
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

    this.showToast(`🔥 Workout Completed! Logged ${volume.toLocaleString()} kg total volume load.`);
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
          <div class="trophy-icon">🏆</div>
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
      <span style="color: var(--accent-lime); font-size: 1.2rem;">⚡</span>
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

