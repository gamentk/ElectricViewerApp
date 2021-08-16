import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Text
} from 'react-native';

// Stack Screens
import {
    HomeTabStackScreen
} from '../components';

// Screens
import {
    AddDeviceScreen
} from '../screens';

// Constants
import { COLORS, FONTS } from '../constants';

const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
    return (
        <DrawerStack.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLORS.lightGreen,
                drawerStyle: {
                    width: 250
                }
            }}
        >
            <DrawerStack.Screen
                name="HomeStack"
                options={{ title: 'หน้าแรก' }}
                component={HomeTabStackScreen}
                options={{
                    drawerLabel: ({ focused }) => (
                        <View>
                            <Text style={{
                                ...FONTS.body2,
                                color: (focused) ? COLORS.white : COLORS.black
                            }}>หน้าแรก</Text>
                        </View>
                    )
                }}
            />
            <DrawerStack.Screen
                name="AddDevice"
                options={{ title: 'เพิ่มอุปกรณ์' }}
                component={AddDeviceScreen}
                options={{
                    drawerLabel: ({ focused }) => (
                        <View>
                            <Text style={{
                                ...FONTS.body2,
                                color: (focused) ? COLORS.white : COLORS.black
                            }}>เพิ่มอุปกรณ์</Text>
                        </View>
                    )
                }}
            />
        </DrawerStack.Navigator>
    );
}

export default DrawerStackScreen;