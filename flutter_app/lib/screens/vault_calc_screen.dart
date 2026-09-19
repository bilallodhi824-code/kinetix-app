import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/fitness_models.dart';

class VaultCalcScreen extends StatefulWidget {
  const VaultCalcScreen({super.key});

  @override
  State<VaultCalcScreen> createState() => _VaultCalcScreenState();
}

class _VaultCalcScreenState extends State<VaultCalcScreen> {
  final TextEditingController _weightController = TextEditingController(text: '100');
  final TextEditingController _repsController = TextEditingController(text: '5');
  double _oneRepMax = 116.7;

  final List<ExerciseItem> _exercises = const [
    ExerciseItem(
      name: 'Barbell Flat Bench Press',
      category: 'Chest',
      primaryMuscle: 'Pectoralis Major',
      tempo: '3-1-1-0',
      mechanic: 'Compound',
      cue: 'Retract scapulae, maintain 5-point contact, drive through feet.',
    ),
    ExerciseItem(
      name: 'Weighted Pull-Ups',
      category: 'Back',
      primaryMuscle: 'Latissimus Dorsi',
      tempo: '3-0-1-1',
      mechanic: 'Compound',
      cue: 'Depress shoulders before initiating pull, drive elbows into back pockets.',
    ),
    ExerciseItem(
      name: 'Barbell Back Squat',
      category: 'Legs',
      primaryMuscle: 'Quadriceps & Glutes',
      tempo: '3-1-1-0',
      mechanic: 'Compound',
      cue: 'Create intra-abdominal pressure, break at hips and knees together.',
    ),
    ExerciseItem(
      name: 'Romanian Deadlift (RDL)',
      category: 'Posterior',
      primaryMuscle: 'Hamstrings & Glutes',
      tempo: '3-1-1-0',
      mechanic: 'Compound',
      cue: 'Push hips backward towards wall, keep lats engaged and bar on shins.',
    ),
  ];

  void _calculate1RM() {
    final weight = double.tryParse(_weightController.text) ?? 0;
    final reps = double.tryParse(_repsController.text) ?? 1;
    if (weight > 0 && reps > 0) {
      setState(() {
        // Epley Formula
        _oneRepMax = weight * (1 + (reps / 30));
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        children: [
          const Text(
            '1RM Calculator & Biometrics',
            style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.w800,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 4),
          const Text(
            'Epley, Brzycki & Lombardi algorithmic strength estimation',
            style: TextStyle(color: AppTheme.textSecondary, fontSize: 13),
          ),
          const SizedBox(height: 20),

          // Inputs
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _weightController,
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: AppTheme.textPrimary, fontWeight: FontWeight.w700),
                  decoration: InputDecoration(
                    labelText: 'Weight Lifted (kg)',
                    labelStyle: const TextStyle(color: AppTheme.textSecondary),
                    filled: true,
                    fillColor: AppTheme.bgCard,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.borderSubtle),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.borderSubtle),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.accentLime),
                    ),
                  ),
                  onChanged: (_) => _calculate1RM(),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: TextField(
                  controller: _repsController,
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: AppTheme.textPrimary, fontWeight: FontWeight.w700),
                  decoration: InputDecoration(
                    labelText: 'Reps Performed',
                    labelStyle: const TextStyle(color: AppTheme.textSecondary),
                    filled: true,
                    fillColor: AppTheme.bgCard,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.borderSubtle),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.borderSubtle),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: AppTheme.accentLime),
                    ),
                  ),
                  onChanged: (_) => _calculate1RM(),
                ),
              ),
            ],
          ),
          const SizedBox(height: 18),

          // 1RM Result Card
          Container(
            padding: const EdgeInsets.all(22),
            decoration: BoxDecoration(
              color: AppTheme.bgCard,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: AppTheme.borderLimeGlow),
            ),
            child: Column(
              children: [
                const Text(
                  'ESTIMATED 1-REP MAX (1RM)',
                  style: TextStyle(
                    color: AppTheme.textSecondary,
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.1,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  '${_oneRepMax.toStringAsFixed(1)} kg',
                  style: const TextStyle(
                    fontSize: 44,
                    fontWeight: FontWeight.w900,
                    color: AppTheme.accentLime,
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildSub1RM('90%', (_oneRepMax * 0.9).toStringAsFixed(1)),
                    _buildSub1RM('85%', (_oneRepMax * 0.85).toStringAsFixed(1)),
                    _buildSub1RM('80%', (_oneRepMax * 0.8).toStringAsFixed(1)),
                    _buildSub1RM('70%', (_oneRepMax * 0.7).toStringAsFixed(1)),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 28),

          // Exercise Vault Snippet
          const Text(
            'Curated Biomechanical Movements',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w800,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 12),
          ..._exercises.map((ex) {
            return Container(
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppTheme.bgCard,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: AppTheme.borderSubtle),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        ex.name,
                        style: const TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: AppTheme.accentCyan.withAlpha(30),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          ex.mechanic,
                          style: const TextStyle(
                            color: AppTheme.accentCyan,
                            fontSize: 10,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Target: ${ex.primaryMuscle} • Tempo: ${ex.tempo}',
                    style: const TextStyle(
                      color: AppTheme.textSecondary,
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Cue: ${ex.cue}',
                    style: const TextStyle(
                      color: AppTheme.textMuted,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            );
          }),
        ],
      ),
    );
  }

  Widget _buildSub1RM(String percent, String load) {
    return Column(
      children: [
        Text(percent, style: const TextStyle(color: AppTheme.textMuted, fontSize: 12)),
        const SizedBox(height: 2),
        Text(
          '$load kg',
          style: const TextStyle(
            fontWeight: FontWeight.w800,
            fontSize: 14,
            color: AppTheme.textPrimary,
          ),
        ),
      ],
    );
  }
}
