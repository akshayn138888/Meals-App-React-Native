import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.accentColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };
  }, [isVegetarian, isVegan, isLactoseFree, isGlutenFree]);
  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Togglers</Text>
      <FilterSwitch
        label="Gluten Free"
        state={isGlutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={newValue => setisLactoseFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setisVegan(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setisVegetarian(newValue)}
      ></FilterSwitch>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam("save")}
        ></Item>
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  }
});
export default FiltersScreen;
