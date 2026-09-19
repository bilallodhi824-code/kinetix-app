import 'dart:async';
import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/custom_components.dart';

class HiitScreen extends StatefulWidget {
  const HiitScreen({super.key});

  @override
  State<HiitScreen> createState() => _HiitScreenState();
}

class _HiitScreenState extends State<HiitScreen> {
  final int _workTime = 20;
  final int _restTime = 10;
  final int _rounds = 8;

  int _currentRound = 1;
  int _remainingSeconds = 20;
  bool _isWorkPhase = true;
  bool _isRunning = false;
  Timer? _timer;

  double get _progress {
    final total = _isWorkPhase ? _workTime : _restTime;
    return (_remainingSeconds / total).clamp(0.0, 1.0);
  }

  void _toggleTimer() {
    if (_isRunning) {
      _timer?.cancel();
      setState(() => _isRunning = false);
    } else {
      setState(() => _isRunning = true);
      _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
        if (_remainingSeconds > 1) {
          setState(() => _remainingSeconds--);
        } else {
          // Switch between Work and Rest phases
          if (_isWorkPhase) {
            setState(() {
              _isWorkPhase = false;
              _remainingSeconds = _restTime;
            });
          } else {
            if (_currentRound < _rounds) {
              setState(() {
                _currentRound++;
                _isWorkPhase = true;
                _remainingSeconds = _workTime;
              });
            } else {
              _resetTimer();
            }
          }
        }
      });
    }
  }

  void _resetTimer() {
    _timer?.cancel();
    setState(() {
      _isRunning = false;
      _currentRound = 1;
      _isWorkPhase = true;
      _remainingSeconds = _workTime;
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final ringColor = _isWorkPhase ? AppTheme.accentLime : AppTheme.accentCyan;

    return SafeArea(
      child: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                decoration: BoxDecoration(
                  color: AppTheme.bgCard,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: AppTheme.borderSubtle),
                ),
                child: Text(
                  'ROUND $_currentRound OF $_rounds',
                  style: const TextStyle(
                    color: AppTheme.textSecondary,
                    fontSize: 13,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 2,
                  ),
                ),
              ),
              const SizedBox(height: 14),
              Text(
                _isWorkPhase ? 'WORK PHASE 🔥' : 'REST PHASE 💧',
                style: TextStyle(
                  color: ringColor,
                  fontSize: 26,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 1.5,
                ),
              ),
              const SizedBox(height: 36),

              // Custom Painted Radial Timer Ring
              SizedBox(
                width: 240,
                height: 240,
                child: CustomPaint(
                  painter: RadialTimerPainter(
                    progress: _progress,
                    ringColor: ringColor,
                  ),
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          '${_remainingSeconds}s',
                          style: const TextStyle(
                            fontSize: 64,
                            fontWeight: FontWeight.w900,
                            fontFamily: 'monospace',
                            color: AppTheme.textPrimary,
                          ),
                        ),
                        Text(
                          _isWorkPhase ? 'MAX INTENSITY' : 'RECOVER BREATH',
                          style: TextStyle(
                            color: ringColor,
                            fontSize: 11,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 1,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 48),

              // Control Actions Row
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton.filled(
                    onPressed: _resetTimer,
                    icon: const Icon(Icons.refresh),
                    iconSize: 28,
                    style: IconButton.styleFrom(
                      backgroundColor: AppTheme.bgCard,
                      foregroundColor: AppTheme.textPrimary,
                      padding: const EdgeInsets.all(16),
                      side: const BorderSide(color: AppTheme.borderSubtle),
                    ),
                  ),
                  const SizedBox(width: 24),
                  IconButton.filled(
                    onPressed: _toggleTimer,
                    icon: Icon(_isRunning ? Icons.pause : Icons.play_arrow),
                    iconSize: 36,
                    style: IconButton.styleFrom(
                      backgroundColor: AppTheme.accentLime,
                      foregroundColor: Colors.black,
                      padding: const EdgeInsets.all(22),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
