import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ContactFormScreen from '../screens/ContactFormScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserSignupListScreen from '../screens/UserSignupListScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Contact Form" component={ContactFormScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="User Signup List" component={UserSignupListScreen} />
    </Tab.Navigator>
);

export default TabNavigator;
