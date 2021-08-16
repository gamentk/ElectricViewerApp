import React, { useState, useContext } from 'react';
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

// Auth Contex
import { AuthContext } from '../../AuthContext';

const SignInScreen = ({ navigation }) => {
    // Use Auth Context
    const { signIn } = useContext(AuthContext);

    // User State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);

    // Render Header
    function renderHeader() {
        return (
            <View
                style={{
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.sing_1}
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
                    ELECTRIC
                </Text>
                <Text
                    style={{
                        ...FONTS.h1,
                        color: COLORS.white,
                        fontSize: 40,
                        paddingTop: 10
                    }}
                >
                    VIEWER
                </Text>
            </View>
        );
    }

    // Render Content
    function renderContent() {
        return (
            <View
                style={{
                    flex: 2,
                    justifyContent: 'center',
                    backgroundColor: COLORS.white,
                }}
            >
                {/* Alert Message */}
                {(alert)
                    ? <Text
                        style={{
                            ...FONTS.body3,
                            position: 'absolute',
                            top: 4,
                            color: '#F00',
                            marginLeft: 25,
                        }}
                    >
                        ไม่พบผู้ใช้
                    </Text>
                    : null}

                {/* Username Input */}
                <TextInput
                    onChangeText={setUsername}
                    placeholder="ชื่อผู้ใช้"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.gray}
                />

                {/* Password Input */}
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="รหัสผ่าน"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.gray}
                />

                {/* Sign In Button */}
                <TouchableOpacity
                    onPress={validateUser}
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
                        เข้าสู่ระบบ
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[
                        styles.button,
                        {
                            alignSelf: 'center',
                            backgroundColor: COLORS.gray
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
            </View>
        );
    }

    function validateUser() {
        const admin = (username === 'sing') && (password === 'sing123') || (username === 'teen') && (password === 'teen123');

        if (!admin) {
            setAlert(true);
            return;
        }

        signIn();
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
        paddingLeft: 20
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