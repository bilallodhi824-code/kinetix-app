import 'package:flutter/material.dart';

/// Centralized Design System Tokens for Kinetix Athletic Lab
class AppTheme {
  // Core Surface Colors
  static const Color bgBase = Color(0xFF080A0F);
  static const Color bgSurface = Color(0xFF0F121A);
  static const Color bgCard = Color(0xFF151924);
  static const Color bgCardHover = Color(0xFF1C2230);
  static const Color bgElevated = Color(0xFF232A3B);

  // High-Visibility Athletic Accents
  static const Color accentLime = Color(0xFFCCFF00);
  static const Color accentCyan = Color(0xFF00E5FF);
  static const Color accentOrange = Color(0xFFFF5722);
  static const Color accentPurple = Color(0xFF9D4EDD);

  // Typography Colors
  static const Color textPrimary = Color(0xFFF8FAFC);
  static const Color textSecondary = Color(0xFF94A3B8);
  static const Color textMuted = Color(0xFF64748B);

  // Subtle Border Colors
  static const Color borderSubtle = Color(0x14FFFFFF);
  static const Color borderMedium = Color(0x28FFFFFF);
  static const Color borderLimeGlow = Color(0x4DCCFF00);

  /// Dark High-Performance ThemeData
  static ThemeData get darkTheme {
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: bgBase,
      primaryColor: accentLime,
      cardColor: bgCard,
      colorScheme: const ColorScheme.dark(
        primary: accentLime,
        secondary: accentCyan,
        surface: bgSurface,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: bgSurface,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: TextStyle(
          color: textPrimary,
          fontSize: 18,
          fontWeight: FontWeight.w800,
          letterSpacing: 1.2,
        ),
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        backgroundColor: bgSurface,
        selectedItemColor: accentLime,
        unselectedItemColor: textMuted,
        type: BottomNavigationBarType.fixed,
        elevation: 0,
        selectedLabelStyle: TextStyle(fontWeight: FontWeight.w700, fontSize: 11),
        unselectedLabelStyle: TextStyle(fontWeight: FontWeight.w500, fontSize: 11),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: accentLime,
          foregroundColor: Colors.black,
          elevation: 0,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          textStyle: const TextStyle(fontWeight: FontWeight.w800, letterSpacing: 0.5),
        ),
      ),
    );
  }
}
