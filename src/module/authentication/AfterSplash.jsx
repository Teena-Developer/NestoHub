import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { localImages } from '../../util/localImages'
import { vh, vw } from '../../util/dimensions'
import colors from '../../util/colors'
import Swiper from 'react-native-swiper'
import { getAPI, postAPI } from '../../util/api'
import endpoint from '../../util/endpoint'
export default function AfterSplash({ navigation }) {

    // useEffect(()=>(
    //     getAPI('/photos',{id:7},
    //     (response)=>{console.log(response)},
    //     (error)=>{console.log(error)})
    //   ),[])

    // useEffect(() => (
    //     postAPI(
    //         endpoint?.GET_PHOTOS,
    //         { name: "teena" },
    //         (response) => { console.log(response) },
    //         (error) => { console.log(error) }
    //     )
    // ), [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={localImages.LOGO2} style={styles.headerIMG} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
                    <Text style={styles.buttontxt}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Loreum ipsum dolor sit amet</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.</Text>
            <Swiper
                showsButtons={false}
                containerStyle={styles.sliderContainer}
                key={4}
                scrollEnabled={true}
                autoplay
                loop
                style={{ height: vh(40) }}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
            >
                <Text style={styles.slider}>Looking for the Best broker for your New Home</Text>
                <Text style={styles.slider}>Looking for the Best broker for your New Home</Text>
                <Text style={styles.slider}>Looking for the Best broker for your New Home</Text>
                <Text style={styles.slider}>Looking for the Best broker for your New Home</Text>
            </Swiper>
            <Image source={localImages.ARROW} style={styles.arrowImg} resizeMode='contain' />
            <Image source={localImages.CARTOON} style={styles.cartoonImg} resizeMode='contain' />
            <Image source={localImages.RACTANGLE} style={styles.bottomImg} resizeMode='contain' />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: vw(15),
        marginTop: vh(25),
        justifyContent: 'space-between'
    },
    headerIMG: {
        width: vw(130),
        height: vh(22)
    },
    button: {
        paddingHorizontal: vw(25),
        paddingVertical: vh(6),
        borderColor: colors.LIGHTGRAY,
        borderWidth: vw(0.5),
        backgroundColor: colors.WHITE,
        borderRadius: 31
    },
    buttontxt: {
        fontSize: vw(10),
        fontWeight: '400',
        color: colors.DARKGRAY
    },
    title: {
        fontSize: vw(20),
        fontWeight: '700',
        color: colors.BLACK,
        paddingHorizontal: vw(15),
        marginTop: vh(20),
    },
    content: {
        fontWeight: '400',
        fontSize: vw(16),
        color: colors.GRAY,
        paddingHorizontal: vw(15),
    },
    sliderContainer: {
        marginLeft: vw(15),
        paddingHorizontal: vw(12),
        paddingTop: vh(8),
        backgroundColor: colors.BLUE,
        marginTop: vh(15),
        borderRadius: vw(6),
        width: vw(180),
        flex: 0,
        height: vh(65)
    },
    slider: {
        fontSize: vw(12.64),
        fontWeight: '300',
        color: colors.WHITE,
    },
    arrowImg: {
        position: "absolute",
        top: vh(230),
        left: vw(190),
        height: vh(70)
    },
    cartoonImg: {
        position: 'absolute',
        top: vh(235),
        right: vh(0),
        zIndex: 1
    },
    bottomImg: {
        position: 'absolute',
        bottom: vh(-25),
        width: '100%'
    },
    dot: {
        width: vw(6.6),
        height: vh(1.9),
        backgroundColor: colors.GRAY,
        marginHorizontal: vw(2),
        marginBottom: vh(-30)
    },
    activeDot: {
        width: vw(6.6),
        height: vh(1.9),
        backgroundColor: colors.WHITE,
        marginHorizontal: vw(2),
        marginBottom: vh(-30)
    }
})