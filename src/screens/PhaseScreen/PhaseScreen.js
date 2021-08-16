import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// Components
import InfoBox from './InfoBox';
import { DrawerHamburger } from '../../components';
import { COLORS } from '../../constants';

// Constants

const PhaseScreen = ({ navigation }) => {
    // Dummy Info
    const info = [
        { title: 'VOLT', value: 193.2 },
        { title: 'AMP', value: 16.39 },
        { title: 'WATT', value: 3135.6 },
        { title: 'KWH', value: 3.574 },
        { title: 'HZ', value: 49.9 },
        { title: 'PF', value: 0.99 },
    ]

    // Render Header
    function renderHeader() {
        return (
            <DrawerHamburger toggleDrawer={navigation.toggleDrawer} />
        );
    }

    // Render Content
    function renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 100,
                    paddingHorizontal: 10
                }}
            >
                {info.map((item, index) => (
                    <InfoBox key={index} {...item} />
                ))}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default PhaseScreen;