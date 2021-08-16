import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
    SignInScreen,
    SignUpScreen
} from '../screens';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen
                name="SignIn"
                component={SignInScreen}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUpScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen;