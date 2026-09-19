import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/fitness_models.dart';
import '../widgets/custom_components.dart';

class SplitsScreen extends StatefulWidget {
  const SplitsScreen({super.key});

  @override
  State<SplitsScreen> createState() => _SplitsScreenState();
}

class _SplitsScreenState extends State<SplitsScreen> {
  String _selectedFilter = 'ALL';

  final List<WorkoutSplit> _splits = const [
    WorkoutSplit(
      id: 'upper-lower',
      title: 'Upper / Lower Wave Periodization',
      frequency: '4 Days / Week',
      focus: 'Strength & Hypertrophy Wave',
      targetRpe: 'RPE 7.5 - 9.0',
      badgeText: 'POPULAR PRO',
      primaryMovements: ['Barbell Bench', 'Weighted Pull-Ups', 'Barbell Squat', 'Romanian Deadlift'],
    ),
    WorkoutSplit(
      id: 'ppl',
      title: 'Push / Pull / Legs (PPL) Density Block',
      frequency: '6 Days / Week',
      focus: 'Pure Muscle Hypertrophy',
      targetRpe: 'RPE 8.0 - 9.5',
      badgeText: 'HYPERTROPHY',
      primaryMovements: ['Incline DB Press', 'Barbell Row', 'Hack Squat', 'Lateral Raises'],
    ),
    WorkoutSplit(
      id: 'powerbuilding',
      title: 'Powerbuilding 5/3/1 Conjugate',
      frequency: '4 Days / Week',
      focus: 'Maximal Strength & Armor Building',
      targetRpe: 'RPE 8.5 - 10.0',
      badgeText: 'PEAK STRENGTH',
      primaryMovements: ['Deadlift 5/3/1', 'Overhead Press', 'Deficit Squats', 'Close-Grip Bench'],
    ),
    WorkoutSplit(
      id: 'metabolic',
      title: 'Metabolic Athletic Hybrid System',
      frequency: '5 Days / Week',
      focus: 'VO2 Max + Functional Explosiveness',
      targetRpe: 'RPE 7.0 - 8.5',
      badgeText: 'CONDITIONING',
      primaryMovements: ['Kettlebell Swings', 'Box Jumps', 'Battle Ropes', 'Clean & Press'],
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        children: [
          const Text(
            'Periodized Splits',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.w800,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 4),
          const Text(
            'Scientifically balanced training microcycles with auto-regulation',
            style: TextStyle(color: AppTheme.textSecondary, fontSize: 13),
          ),
          const SizedBox(height: 18),

          // Filter Pills
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: ['ALL', 'STRENGTH', 'HYPERTROPHY', 'CONDITIONING'].map((filter) {
                final isSelected = _selectedFilter == filter;
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: ChoiceChip(
                    label: Text(filter),
                    selected: isSelected,
                    onSelected: (selected) {
                      if (selected) setState(() => _selectedFilter = filter);
                    },
                    selectedColor: AppTheme.accentLime,
                    backgroundColor: AppTheme.bgCard,
                    labelStyle: TextStyle(
                      color: isSelected ? Colors.black : AppTheme.textSecondary,
                      fontWeight: FontWeight.w700,
                      fontSize: 11,
                    ),
                    side: BorderSide(
                      color: isSelected ? AppTheme.accentLime : AppTheme.borderSubtle,
                    ),
                  ),
                );
              }).toList(),
            ),
          ),
          const SizedBox(height: 18),

          // Splits List
          ..._splits.map((split) {
            return SplitCard(
              split: split,
              onTap: () {},
            );
          }),
        ],
      ),
    );
  }
}
