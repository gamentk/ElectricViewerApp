// Make sure this import stay at the top
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack Screen
import {
    AuthStackScreen,
    DrawerStackScreen
} from './components';

// Auth Context
import { AuthContext } from './AuthContext';

// Initial App
const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
            headerShown: false
        }}
    >
        {
            (userToken)
                ? <RootStack.Screen
                    name="AppStack"
                    component={DrawerStackScreen}
                />
                : <RootStack.Screen
                    name="AuthStack"
                    component={AuthStackScreen}
                />
        }
    </RootStack.Navigator>
)

// Entry Point
const App = () => {
    const [userToken, setUserToken] = React.useState('admin');

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setUserToken('admin');
            },
            signOut: () => {
                setUserToken(null);
            }
        }
    });

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStackScreen userToken={userToken} />
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;