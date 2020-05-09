import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
          // naviagate('Category', {categoryId: your-data})
        }}
      >
        <View>
          <Text> {itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
export default CategoriesScreen;
