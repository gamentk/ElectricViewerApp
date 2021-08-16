import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/AntDesign';

// Constants
import { FONTS } from '../../constants';

const DeviceItem = () => {
    return (
        <View
            style={styles.container}
        >
            {/* Icon */}
            <View
                style={styles.icon}
            >
                <Icon
                    name="minus"
                    size={30}
                    color="#000"
                />
            </View>

            {/* Device Name */}
            <View
                style={styles.deviceName}
            >
                <Text
                    style={{ ...FONTS.h3 }}
                >
                    Teen Device 1
                </Text>
            </View>

            {/* MAC Address */}
            <View
                style={styles.macAddress}
            >
                <Text
                    style={{ ...FONTS.body3 }}
                >
                    08-00-27-CE-76-FE
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginVertical: 5,
    },
    icon: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deviceName: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    macAddress: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DeviceItem;