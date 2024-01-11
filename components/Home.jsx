import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './auth/Btn'
import { COLORS } from '../assets/constants/theme'

const Home = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal:45,marginVertical:100}}>
      <Text style={{color:"white", fontSize:64,fontFamily:"regular"}}>Let's start</Text>
      <Text style={{color:"white", fontSize:40,fontFamily:"semibold",marginBottom:70}}>Good Doctor!</Text>
      <Btn  bgColor={COLORS.blue1} btnLabel='Login' txtColor="white" Press={()=>props.navigation.navigate('Login')} />
      <Btn  bgColor="white" btnLabel='Signup' txtColor={COLORS.blue1}  Press={()=>props.navigation.navigate('Signup')} />
      </View>
    </Background>
  )
}

export default Home

const styles = StyleSheet.create({})