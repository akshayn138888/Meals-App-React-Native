import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  // initialRoute:'Categories';
  //mode: "modal",
  // overrides everything if not set here then.
  {
    // initialRouteName: 'Categories' you can just initial route
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);
const tabScreenConfig = {
  Meal: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);
