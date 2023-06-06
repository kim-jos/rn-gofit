import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import B2bLoginScreen from "../auth/b2b.login.screen";
import MainStackScreen from "../navigation/main.navigator";
import HomeScreen from "./home.screen";
import MembershipsScreen from "./memberships.screen";
import MyPageScreen from "./my-page.screen";
import MyReservationsScreen from "./my-reservations.screen";

const Tab = createBottomTabNavigator();

const homeTab = "Go Fit";
const classesTab = "그룹 운동시설";
const membershipsTab = "멤버십 구매";
const reservationsTab = "예약현황";
const myPageTab = "내 정보";

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.disabled,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === homeTab) {
            iconName = "ios-home"; // Set the icon name for Tab1
          } else if (route.name === classesTab) {
            iconName = "ios-search"; // Set the icon name for Tab2
          } else if (route.name === membershipsTab) {
            iconName = "ios-cart-outline"; // Set the icon name for Tab3
          } else if (route.name === reservationsTab) {
            iconName = "ios-calendar-outline"; // Set the icon name for Tab4
          } else if (route.name === myPageTab) {
            iconName = "ios-person"; // Set the icon name for Tab5
          } else if (route.name === "Login") {
            iconName = "ios-person"; // Set the icon name for Tab5
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeTab} component={HomeScreen} />
      <Tab.Screen name={classesTab} component={MainStackScreen} />
      <Tab.Screen name={membershipsTab} component={MembershipsScreen} />
      <Tab.Screen name={reservationsTab} component={MyReservationsScreen} />
      <Tab.Screen name={myPageTab} component={MyPageScreen} />
      <Tab.Screen name="Login" component={B2bLoginScreen} />
    </Tab.Navigator>
  );
}
