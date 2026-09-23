// Strongly typed data models for the Kinetix ecosystem

class MetricData {
  final String label;
  final String value;
  final String unit;
  final String trend;
  final bool isPositive;

  const MetricData({
    required this.label,
    required this.value,
    required this.unit,
    required this.trend,
    this.isPositive = true,
  });
}

class WorkoutSplit {
  final String id;
  final String title;
  final String frequency;
  final String focus;
  final String targetRpe;
  final String badgeText;
  final List<String> primaryMovements;

  const WorkoutSplit({
    required this.id,
    required this.title,
    required this.frequency,
    required this.focus,
    required this.targetRpe,
    required this.badgeText,
    required this.primaryMovements,
  });
}

class ExerciseItem {
  final String name;
  final String category;
  final String primaryMuscle;
  final String tempo;
  final String mechanic;
  final String cue;

  const ExerciseItem({
    required this.name,
    required this.category,
    required this.primaryMuscle,
    required this.tempo,
    required this.mechanic,
    required this.cue,
  });
}
