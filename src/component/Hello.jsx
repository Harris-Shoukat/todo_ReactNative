import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hello = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#e3e3e3'}}>
      <Text style={{fontSize:20,textAlign:'center',marginTop:50}}>Hello</Text>
      <Text style={{fontSize:40,textAlign:'center',marginTop:40}}>Hello</Text>
      <Text style={{fontSize:60,textAlign:'center',marginTop:30}}>Hello</Text>

    </SafeAreaView>
  )
}

export default Hello

const styles = StyleSheet.create({})