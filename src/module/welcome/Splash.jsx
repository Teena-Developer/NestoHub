import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { localImages } from '../../util/localImages';
import colors from '../../util/colors';

function Splash({ navigation }) {
    
    setTimeout(() => {
        console.log('hiii')
        navigation.navigate('AfterSplash')
    }, 2000)
    return (
        <View style={styles.container}>
            <Image source={localImages.LOGO} />
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.WHITE
    },
    img: {

    }

});