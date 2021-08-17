import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// Components
import InfoBox from './InfoBox';
import { DrawerHamburger } from '../../components';

// Constants
import { COLORS } from '../../constants';

const PhaseScreen = ({ navigation }) => {
    // const [info, setInfo] = useState(Array.from({ length: 6 }));

    // Dummy Info
    const info = [
        { title: 'VOLT', value: (Math.random() * (220 - 190) + 190).toFixed(2) },
        { title: 'AMP', value: (Math.random() * (100 - 50) + 50).toFixed(2) },
        { title: 'WATT', value: (Math.random() * (3000 - 1500) + 1500).toFixed(2) },
        { title: 'KWH', value: (Math.random() * (3 - 1) + 1).toFixed(2) },
        { title: 'HZ', value: 49.9 },
        { title: 'PF', value: 0.99 },
    ]

    // Component Did Mount
    useEffect(() => {
        setInterval(() => {

        }, 1000)
    }, []);

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