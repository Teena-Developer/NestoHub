import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { getAPI } from '../../util/api';

 function Home() {
  // useEffect(()=>(
  //   getAPI('/photos',{},
  //   (response)=>{console.log(response)},
  //   (error)=>{console.log(error)})
  // ),[])
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
export default Home;