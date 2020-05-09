import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemsData => {
  return (
    <View>
      <Text> {itemsData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    //Console log props
    <FlatList
      keyExtractor={(item, index) => {
        item.id;
      }}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    ></FlatList>
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
