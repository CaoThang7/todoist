import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { home } from '../common/navigator';
import Note from '../screens/note/note';
import Profile from '../screens/profile/profile';
import Color from "../common/color"

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Color.magenta,
                tabBarInactiveTintColor: Color.black,
                tabBarStyle: {
                    height: 80,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                    margin: 0,
                    paddingBottom: 5,
                },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name={home.note}
                component={Note}
                options={{
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    headerShown: false,
                    tabBarLabel: 'Note',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="note" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen
                name={home.profile}
                component={Profile}
                options={{
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={40} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs