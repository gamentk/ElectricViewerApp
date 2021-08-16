import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Constants
import { theme } from '../../constants';
const { COLORS, SIZES, FONTS } = theme;

const InfoBox = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ ...FONTS.body2 }}>{title}</Text>
            </View>
            <View style={styles.value}>
                <Text style={{ ...FONTS.body1, color: COLORS.lightGreen }}>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '41%',
        height: 100,
        borderStartWidth: 3,
        borderStartColor: COLORS.regularGreen,
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: COLORS.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingLeft: 10
    },
    value: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10
    }
});

export default InfoBox;