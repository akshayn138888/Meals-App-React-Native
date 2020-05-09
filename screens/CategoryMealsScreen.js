import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categorie Meal Screen Screen</Text>
      <Button
        title="Go to Meal Detail Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" }); //alternativly use navigate("Category Meals")
        }}
      ></Button>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack(); //pop can be used here.
        }}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoryMealsScreen;
