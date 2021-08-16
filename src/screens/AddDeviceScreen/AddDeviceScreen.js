import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// Component
import {
    DrawerHamburger,
    TitleHeader
} from '../../components';

// Constants
import { COLORS, FONTS } from '../../constants';

// Icons
import Icon from 'react-native-vector-icons/AntDesign';
import DeviceItem from './DeviceItem';

const AddDeviceScreen = ({ navigation }) => {
    // Render Header
    function renderHeader() {
        return (
            <>
                <DrawerHamburger toggleDrawer={navigation.toggleDrawer} />
                <TitleHeader title="เพิ่มอุปกรณ์" />
            </>
        );
    }

    // Render Content
    function renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: 100,
                    paddingHorizontal: 10,
                }}
            >
                <TextInput
                    placeholder="MAC ADDRESS: 08-00-27-CE-76-FE"
                    style={styles.textInput}
                />
                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        width: '70%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 14,
                        height: 40,
                        backgroundColor: COLORS.lightGreen,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body2,
                            color: COLORS.white
                        }}
                    >
                        เพิ่ม
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Render List
    function renderList() {
        return (
            <View
                style={{
                    flex: 3,
                    paddingHorizontal: 25,
                }}
            >
                <Text style={{ ...FONTS.body2, marginVertical: 5, color: COLORS.lightGreen }}>อุปกรณ์ที่เพิ่มแล้ว</Text>
                <ScrollView>
                    <DeviceItem />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderContent()}
            {renderList()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        marginHorizontal: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 16,
        paddingLeft: 20,
        ...FONTS.body3
    }
});

export default AddDeviceScreen;