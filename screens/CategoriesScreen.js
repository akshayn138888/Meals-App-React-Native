import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const CategoriesScreen = props => {
  return (
    //Console log props
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" }); //alternativly use navigate("Category Meals")
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
export default CategoriesScreen;