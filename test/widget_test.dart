import 'package:flutter_test/flutter_test.dart';
import 'package:kinetix_fitness_app/main.dart';

void main() {
  testWidgets('Kinetix fitness app loads successfully', (WidgetTester tester) async {
    await tester.pumpWidget(const KinetixFitnessApp());
    expect(find.text('KINETIX LAB'), findsOneWidget);
  });
}
