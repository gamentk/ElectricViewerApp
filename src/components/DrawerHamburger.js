import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/Feather';

const DrawerHamburger = ({ toggleDrawer }) => {
    return (
        <TouchableOpacity
            onPress={() => toggleDrawer()}
            style={styles.container}
        >
            <Icon
                name="menu"
                size={30}
                color="#000"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 35,
        left: 25
    }
});

export default DrawerHamburger;