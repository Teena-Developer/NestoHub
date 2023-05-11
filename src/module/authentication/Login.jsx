import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { localImages } from '../../util/localImages'
import { vh, vw } from '../../util/dimensions'
import colors from '../../util/colors'

export default function Login({ navigation }) {
    const [Phone, setPhone] = useState('')
    console.log('input', Phone)

    const Submit = () => {
        const phoneNo = /^[0]?[6789]\d{9}$/;
        if (Phone == '') {
            Alert.alert(Login,
                'Please Enter Your Phone Number',
                [{ text: "Cancel" }, { text: "OK" }])
        } else if (phoneNo.test(Phone) == false) {
            Alert.alert("Login",
                'Phone number is invalid',
                [{ text: "Cancel" }, { text: "OK" }])
        } else if (Phone.length != 10) {
            Alert.alert('Login', 'Please Enter Your valid Phone Number',
                [{ text: "Cancel" }, { text: "OK" }])
        } else {
            Alert.alert('Login', 'OTP is sent to Your Phone Number', [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('OtpVerification'),
                },
                { text: 'Cancel' }
            ]);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}><Image source={localImages.LEFTARROW} style={styles.arrowIcon} /></TouchableOpacity>
            <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
            <TextInput
                value={Phone}
                keyboardType='phone-pad'
                onChangeText={(e) => setPhone(e)}
                style={styles.inputBox}
                placeholder='Enter your phone number'
                placeholderTextColor={colors.DIMGRAY}
                placeholderStyle={{ fontSize: 50 }}

            />
            <TouchableOpacity style={styles.button} onPress={Submit}>
                <Text style={styles.buttonTxt}>Continue</Text>
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
    inputBox: {
        borderWidth: 1,
        paddingLeft: vw(19),
        paddingVertical: vh(17),
        marginBottom: vw(27),
        borderRadius: 8,
        backgroundColor: '#F8F8F8'
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
    }
})