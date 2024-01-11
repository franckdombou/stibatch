import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/doctor/doct4.jpeg')}
        style={{ height: "100%" }}
      ></ImageBackground>
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  )
}

export default Background

const styles = StyleSheet.create({})