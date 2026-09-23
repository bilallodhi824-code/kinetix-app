import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class WorkoutProvider with ChangeNotifier {
  int _weeklyVolume = 0;
  int _cnsReadiness = 100;
  int _activeStreak = 0;
  int _workoutsDone = 0;

  int get weeklyVolume => _weeklyVolume;
  int get cnsReadiness => _cnsReadiness;
  int get activeStreak => _activeStreak;
  int get workoutsDone => _workoutsDone;

  WorkoutProvider() {
    _loadState();
  }

  Future<void> _loadState() async {
    final prefs = await SharedPreferences.getInstance();
    _weeklyVolume = prefs.getInt('weeklyVolume') ?? 47120; // Starting data
    _cnsReadiness = prefs.getInt('cnsReadiness') ?? 88;
    _activeStreak = prefs.getInt('activeStreak') ?? 18;
    _workoutsDone = prefs.getInt('workoutsDone') ?? 5;
    notifyListeners();
  }

  Future<void> _saveState() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setInt('weeklyVolume', _weeklyVolume);
    prefs.setInt('cnsReadiness', _cnsReadiness);
    prefs.setInt('activeStreak', _activeStreak);
    prefs.setInt('workoutsDone', _workoutsDone);
  }

  void logWorkout(int volume, int cnsDrop) {
    _weeklyVolume += volume;
    _cnsReadiness = (_cnsReadiness - cnsDrop).clamp(0, 100);
    _workoutsDone += 1;
    
    _saveState();
    notifyListeners();
  }
}
