import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { localImages } from '../../util/localImages'
import { vh, vw } from '../../util/dimensions'
import colors from '../../util/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={localImages.LEFTARROW} style={styles.arrowIcon} />
            <Text style={styles.title}>Hello! Register to get started</Text>
            <TextInput
                style={styles.inputBox}
                placeholder='Name'
                placeholderTextColor={colors.DIMGRAY}
                placeholderStyle={{ fontSize: 50 }}

            />
            <TextInput
                style={styles.inputBox}
                placeholder='Enter Phone Number'
                placeholderTextColor={colors.DIMGRAY}
                placeholderStyle={{ fontSize: 50 }}

            />
            <TextInput
                style={styles.inputBox}
                placeholder='Enter Referral Code'
                placeholderTextColor={colors.DIMGRAY}
                placeholderStyle={{ fontSize: 50 }}

            />
            <View style={styles.checkBox}>
                <Image source={localImages.CHECKBOX} style={styles.checkBoxImg}/>
                <Text style={styles.checkBoxTxt}>I agree to the <Text style={styles.editTxtcolor}>Terms of Service</Text>and <Text style={styles.editTxtcolor}>Privacy Policy</Text></Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt}>Reister</Text>
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
        marginTop:vh(34),
        marginBottom:vw(23)
    },
    inputBox: {
        borderWidth: 1,
        paddingLeft: vw(19),
        paddingVertical: vh(17),
        marginBottom:vw(27),
        borderRadius: 8,
        backgroundColor:'#F8F8F8'
    },
    button:{
        backgroundColor:colors.BLUE,
        paddingVertical:vh(17),
        borderRadius:vw(106),
        alignItems:"center",
        justifyContent:'center'
    },
    buttonTxt:{
        fontSize:vw(15),
        fontWeight:'600',
        color:colors.WHITE
    },
    checkBox:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:vw(21)
    },
    checkBoxImg:{
        marginRight:vw(10)
    },
    checkBoxTxt:{
        fontSize:vw(10),
        fontWeight:'400',
        color:colors.BLACK
    },
    editTxtcolor:{
        color:colors.BLUE
    }
})