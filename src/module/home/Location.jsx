import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { vh, vw } from '../../util/dimensions'
import colors from '../../util/colors'
import { getAPI } from '../../util/api'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Location(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        let payload = {
            location: `${props.route.params.area.lat},${props.route.params.area.lng}`,
            radius: props.route.params.radius,
            type: props.route.params.utility,
            key: 'AIzaSyCa2UU39SqehkAxIO7X7iMmBkqZjt4GzuQ'
        }
        getAPI(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
            payload,
            (response) => {
                console.log("res", response)
                setData(response.data.results)
            },
            (error) => console.log(error)
        )
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text>hii</Text>
            {data.map((item, index) => {
                return (
                    <View style={{}}>
                        <TouchableOpacity><Text>{item.name}</Text></TouchableOpacity>
                    </View>
                )
            })}
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
})