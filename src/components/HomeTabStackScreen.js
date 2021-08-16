import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Text
} from 'react-native'

// Screens
import {
    PhaseScreen,
} from '../screens';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS } from '../constants';

const HomeTabStack = createBottomTabNavigator();
const HomeTabStackScreen = () => {
    return (
        <HomeTabStack.Navigator
            initialRouteName="OnePhase"
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarIcon: () => (
                    <View></View>
                ),
                tabBarIconStyle: {
                    position: 'absolute',
                },
                tabBarLabelStyle: {
                    position: 'absolute'
                },
                tabBarStyle: {
                    position: 'absolute',
                    top: 25,
                    marginHorizontal: 90,
                    borderRadius: 14,
                }
            }}
        >
            <HomeTabStack.Screen
                name="OnePhase"
                component={PhaseScreen}
                initialParams={{ phase: 1 }}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'Prompt-Regular',
                                    color: (focused) ? COLORS.lightGreen : COLORS.black
                                }}
                            >
                                1 Phase
                            </Text>
                        </View>
                    ),
                }}
            />
            <HomeTabStack.Screen
                name="TwoPhase"
                initialParams={{ phase: 2 }}
                component={PhaseScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'Prompt-Regular',
                                    color: (focused) ? COLORS.lightGreen : COLORS.black
                                }}
                            >
                                2 Phase
                            </Text>
                        </View>
                    ),
                }}
            />
            <HomeTabStack.Screen
                name="ThreePhase"
                initialParams={{ phase: 3 }}
                component={PhaseScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'Prompt-Regular',
                                    color: (focused) ? COLORS.lightGreen : COLORS.black
                                }}
                            >
                                3 Phase
                            </Text>
                        </View>
                    ),
                }}
            />
        </HomeTabStack.Navigator>
    );
}

export default HomeTabStackScreen;