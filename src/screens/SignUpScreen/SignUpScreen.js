import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

// Constants
import { images, theme } from '../../constants';
const { COLORS, SIZES, FONTS } = theme;

const SignInScreen = ({ navigation }) => {
    // Render Header
    function renderHeader() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.teen_1}
                    resizeMode="cover"
                    blurRadius={3}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: 0.9,
                    }}
                />
                <Text
                    style={{
                        ...FONTS.h1,
                        color: COLORS.white,
                        fontSize: 40,
                        paddingTop: 10
                    }}
                >
                    สมัคร
                </Text>
                <Text
                    style={{
                        ...FONTS.h1,
                        color: COLORS.white,
                        fontSize: 40,
                        paddingTop: 10
                    }}
                >
                    สมาชิก
                </Text>
            </View>
        );
    }

    // Render Content
    function renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: COLORS.white,
                }}
            >
                <TextInput
                    placeholder="ชื่อผู้ใช้"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.gray}
                />
                <TextInput
                    placeholder="รหัสผ่าน"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.gray}
                />
                <TextInput
                    placeholder="ป้อนรหัสผ่านอีกครั้ง"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.gray}
                />
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            alignSelf: 'center',
                            backgroundColor: COLORS.lightGreen
                        }
                    ]}
                >
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.white
                        }}
                    >
                        สมัครสมาชิก
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={
                        {
                            alignSelf: 'center',
                        }
                    }
                >
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.blue,
                            marginVertical: 5
                        }}
                    >
                        เข้าสู่ระบบ
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <View style={styles.container}>
                {renderHeader()}
                {renderContent()}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        ...FONTS.body3,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        marginVertical: 5,
        paddingLeft: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '70%',
        marginVertical: 5,
        borderRadius: 25,
    }
});

export default SignInScreen;