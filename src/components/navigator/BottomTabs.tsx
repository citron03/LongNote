import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screen/Main';
import Setting from '../screen/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

interface tabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const mainTabBarIcon = ({color, size}: tabBarIconProps) => {
  return <Ionicons name="document" size={size} color={color} />;
};
const settingTabBarIcon = ({color, size}: tabBarIconProps) => {
  return <Ionicons name="settings" size={size} color={color} />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: mainTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: settingTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
