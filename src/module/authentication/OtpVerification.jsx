import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { localImages } from '../../util/localImages'
import { vh, vw } from '../../util/dimensions'
import colors from '../../util/colors'


export default function OtpVerification({ navigation }) {

    const Otp1 = useRef();
    const Otp2 = useRef();
    const Otp3 = useRef();
    const Otp4 = useRef();
    const Otp5 = useRef();
    const Otp6 = useRef();
    const [otp, setOtp] = useState({ t1: '', t2: '', t3: '', t4: '', t5: '', t6: '' })

    const onPressVerify = () => {
        let OTP = otp?.t1 + otp?.t2 + otp?.t3 + otp?.t4 + otp?.t5 + otp?.t6
        if (OTP?.length === 6) {
            Alert.alert('OTP',
                'OTP is varify Successfully', [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('Home'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },

            ]);
        } else {
            Alert.alert('OTP',
                'OTP is Invalid', [
                { text: 'OK' },
                { text: 'Cancel' }
            ]);
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}><Image source={localImages.LEFTARROW} style={styles.arrowIcon} /></TouchableOpacity>
            <Text style={styles?.title}>OTP Verification</Text>
            <Text style={styles.paragraph}>Enter the verification code we just sent on your email address.</Text>
            <View style={styles.otpContainer}>
                <TextInput
                    style={[otp?.t1.length == 1 ? (styles.activeInput) : (styles.input)]}
                    autoFocus={true}
                    ref={Otp1}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t1: text })
                        if (text?.length) {
                            Otp2.current.focus();
                        } else if (text.length == '') {
                            Otp1.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[otp?.t2.length == 1 ? (styles.activeInput) : (styles.input)]}
                    ref={Otp2}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t2: text })
                        if (text?.length) {
                            Otp3.current.focus();
                        } else if (text.length == '') {
                            Otp1.current.focus();
                        }
                    }}

                />
                <TextInput
                    style={[otp?.t3.length == 1 ? (styles.activeInput) : (styles.input)]}
                    ref={Otp3}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t3: text })
                        if (text?.length) {
                            Otp4.current.focus();
                        } else if (text.length == '') {
                            Otp2.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[otp?.t4.length == 1 ? (styles.activeInput) : (styles.input)]}
                    ref={Otp4}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t4: text })
                        if (text?.length) {
                            Otp5.current.focus();
                        } else if (text.length == '') {
                            Otp3.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[otp?.t5.length == 1 ? (styles.activeInput) : (styles.input)]}
                    ref={Otp5}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t5: text })
                        if (text?.length) {
                            Otp6.current.focus();
                        } else if (text.length == '') {
                            Otp4.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[otp?.t6.length == 1 ? (styles.activeInput) : (styles.input)]}
                    ref={Otp6}
                    maxLength={1}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setOtp({ ...otp, t6: text })
                        if (text.length == '') {
                            Otp5.current.focus();
                        }
                    }}
                />

            </View>
            <TouchableOpacity style={styles.button} onPress={onPressVerify}>
                <Text style={styles.buttonTxt}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(22),
        paddingVertical: vh(30),
        backgroundColor: colors.WHITE
    },
    arrowIcon: {
        height: vh(12),
        width: vw(14)
    },
    title: {
        fontSize: vw(30),
        fontWeight: '700',
        color: colors.BLACK,
        marginVertical: vh(34)
    },
    paragraph: {
        fontSize: vw(16),
        fontWeight: '400',

    },
    button: {
        backgroundColor: colors.BLUE,
        paddingVertical: vh(17),
        borderRadius: vw(106),
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTxt: {
        fontSize: vw(15),
        fontWeight: '600',
        color: colors.WHITE
    },
    otpContainer: {
        flexDirection: "row",
        width: "100%",
        marginVertical: vh(55),
        justifyContent: 'space-between'
    },
    input: {
        borderWidth: vw(1),
        borderColor: colors.GRAY,
        borderRadius: vw(8.53),
        height: vh(60.32),
        width: vw(45),
        textAlign: 'center',
        fontSize: vw(24),
        fontWeight: '700'
    },
    activeInput: {
        borderWidth: vw(1.28),
        borderColor: colors.BLUE,
        borderRadius: vw(8.53),
        height: vh(60.32),
        width: vw(45),
        textAlign: 'center',
        fontSize: vw(24),
        fontWeight: '700'
    }

})