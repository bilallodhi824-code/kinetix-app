import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/custom_components.dart';

class DashboardScreen extends StatelessWidget {
  final VoidCallback onStartSession;

  const DashboardScreen({super.key, required this.onStartSession});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        children: [
          // Header Bar
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppTheme.accentLime,
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: const Text(
                          'K',
                          style: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w900,
                            fontSize: 14,
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      const Text(
                        'KINETIX LAB',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                          letterSpacing: 1.2,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  const Text(
                    'ATHLETIC OS v3.8 • PRO SUITE',
                    style: TextStyle(
                      color: AppTheme.textMuted,
                      fontSize: 11,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: AppTheme.accentCyan.withAlpha(30),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: AppTheme.accentCyan.withAlpha(75)),
                ),
                child: const Row(
                  children: [
                    CircleAvatar(radius: 4, backgroundColor: AppTheme.accentCyan),
                    SizedBox(width: 6),
                    Text(
                      '88% READINESS',
                      style: TextStyle(
                        color: AppTheme.accentCyan,
                        fontSize: 11,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),

          // Primary Telemetry Metrics
          const Row(
            children: [
              Expanded(
                child: MetricCard(
                  label: 'Weekly Volume',
                  value: '47,120',
                  unit: 'kg',
                  trend: '↑ +14.2% vs last cycle',
                  accentColor: AppTheme.accentLime,
                  icon: Icons.bolt,
                ),
              ),
              SizedBox(width: 12),
              Expanded(
                child: MetricCard(
                  label: 'CNS Readiness',
                  value: '88%',
                  unit: 'Prime',
                  trend: 'HRV 72ms optimal',
                  accentColor: AppTheme.accentCyan,
                  icon: Icons.favorite,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          const Row(
            children: [
              Expanded(
                child: MetricCard(
                  label: 'Active Streak',
                  value: '18',
                  unit: 'days',
                  trend: 'Cycle 4 Microcycle 2',
                  accentColor: AppTheme.accentOrange,
                  icon: Icons.local_fire_department,
                ),
              ),
              SizedBox(width: 12),
              Expanded(
                child: MetricCard(
                  label: 'Workouts Done',
                  value: '5 / 6',
                  unit: 'sessions',
                  trend: '1 session remaining',
                  accentColor: AppTheme.accentPurple,
                  icon: Icons.checklist,
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),

          // Action Protocol Banner
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [AppTheme.bgCard, Color(0xFF1E2638)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: AppTheme.borderSubtle),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'TODAY\'S PROTOCOL',
                      style: TextStyle(
                        color: AppTheme.accentLime,
                        fontSize: 11,
                        fontWeight: FontWeight.w800,
                        letterSpacing: 1.1,
                      ),
                    ),
                    Text(
                      'DAY 4: UPPER HYPERTROPHY',
                      style: TextStyle(
                        color: Colors.white.withAlpha(150),
                        fontSize: 11,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                const Text(
                  'Incline Dumbbell Press & Weighted Pull-Ups',
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.textPrimary,
                  ),
                ),
                const SizedBox(height: 6),
                const Text(
                  'Target: 5 Movements • 18 Total Sets • Target RPE 8.0 - 8.5',
                  style: TextStyle(
                    color: AppTheme.textSecondary,
                    fontSize: 13,
                  ),
                ),
                const SizedBox(height: 18),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    onPressed: onStartSession,
                    icon: const Icon(Icons.play_arrow_rounded, color: Colors.black),
                    label: const Text(
                      'LAUNCH WORKOUT SESSION',
                      style: TextStyle(fontWeight: FontWeight.w800, letterSpacing: 0.5),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
