import { View, Text, StyleSheet } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen ({mealId})</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
