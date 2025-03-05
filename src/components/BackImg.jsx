import { View, Text, Image } from 'react-native'
import React from 'react'

const BackImg = () => {
  return (
    <View style={{alignItems:'center' , justifyContent:'center',marginTop:50}}>
        <Image
        source={require('../../asset/todoImg.png')}
        style={{height:300,width:300}}
        />
        <Text style={{fontSize:16, color:'#a6a9ac', fontWeight:'600', paddingVertical:10}}>
            Hey! What's you plan?
        </Text>
    </View>
  )
}

export default BackImg