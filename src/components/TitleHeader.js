import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Constants
import { FONTS } from '../constants';

const TitleHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 35,
    },
    title: {
        ...FONTS.body2
    }
});

export default TitleHeader;