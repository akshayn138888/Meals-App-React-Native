import React from "react";
import MealList from "../components/MealList";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavoriteScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealsList listData={favMeals} navigation={props.navigation} />;
};
FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favourites"
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FavoriteScreen;
