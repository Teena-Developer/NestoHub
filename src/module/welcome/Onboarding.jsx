import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../util/colors';
import { localImages } from '../../util/localImages';
import { vh, vw } from '../../util/dimensions';

export default function Onboarding({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={localImages.OVERLAY} style={styles.Img} resizeMode='contain'/>
            <View style={styles.bottomcontainer}>
                <Text style={styles.title}>New Place, New Home!</Text>
                <Text style={styles.paragraph}>Are you ready to uproot and start over in{'\n'}a new area?</Text>
                {/* <Text style={styles.paragraph}></Text> */}
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Login')}>
                    <Image source={localImages.BROKER} />
                    <Text style={styles.Txt}>Broker</Text>
                </TouchableOpacity>
                <View style={styles.lineContainer}>
                    <View style={styles.leftLine}></View>
                    <Text style={styles.lineTxt}>OR</Text>
                    <View style={styles.rightLine}></View>
                </View>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Login')}>
                    <Image source={localImages.BUILDER} />
                    <Text style={styles.Txt}>Builder</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    Img: {
        width: '100%',
        // height:vh(300)
        marginTop:vh(-50)

    },
    bottomcontainer: {
        paddingHorizontal: vw(15),
        paddingVertical: vh(20),
        alignItems: "center"
    },
    title: {
        fontSize: vw(20),
        fontWeight: '700',
        color: colors.BLACK,
    },
    paragraph: {
        fontSize: vw(16),
        fontWeight: '400',
        color: colors.DIMGRAY,
        textAlign: "center",
        marginVertical: vh(16),
    },
    Button: {
        backgroundColor: colors.BLUE,
        borderRadius: vw(31),
        alignItems: "center",
        flexDirection: 'row',
        paddingVertical:vh(12.5),
        width:'100%',
        justifyContent:'center',
        shadowColor:colors.BLUE,
        shadowOpacity:vw(0.45),
        elevation: 6,
        shadowRadius:vw(57)
    },
    Txt: {
        fontSize: vw(14),
        fontWeight: '400',
        color: colors.WHITE,
        paddingLeft: 10
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftLine: {
        flex: 1, height: 1,
        backgroundColor: colors.DIMGRAY
    },
    lineTxt: {
        fontSize: vw(12),
        fontWeight: '400',
        paddingVertical: vh(14),
        paddingHorizontal: 15
    },
    rightLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.DIMGRAY
    },
    buttomline:{
        marginTop: vh(10)
    }
})