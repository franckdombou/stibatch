import { View, Text,KeyboardAvoidingView, } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../../assets/constants/theme'
import Fields from '../../components/auth/Fields'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Btn from '../../components/auth/Btn'
import { TouchableOpacity } from 'react-native'
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height



const Login = (props) => {
    return (
        <Background>
            <KeyboardAvoidingView>
            <View style={{ alignItems: "center", width: WIDTH }}>
                <Text style={{ color: "white", fontSize: 60, fontFamily: "bold", marginVertical: 35 }}>
                    Good doctor
                </Text>
                <View style={{
                    backgroundColor: "white", height: HEIGHT * 0.86,
                    width: WIDTH, borderTopLeftRadius: 130, paddingTop: 100, alignItems: "center"
                }}>
                    <Text style={{ fontSize: 40, color: COLORS.blue1, fontFamily: "bold" }}>Bon Retour !!!</Text>
                    <Text style={{ fontSize: 15, color: "gray", fontFamily: "bold", marginBottom: 20 }}>Accèdes à ton compte.</Text>
                    <Fields placeholder="Email \ username" keyboardType='email-address' />
                    <Fields placeholder="Mot de passe" keyboardType='email-address' secureTextEntry={true} />

                    <View style={{alignItems:"flex-end", width:"78%",paddingRight:16,marginBottom:160}}>
                        <Text style={{color:COLORS.blue1,fontFamily:'bold',fontSize:10}}>Mot de pass oublié ?</Text>
                    </View>
                    <Btn  bgColor={COLORS.blue1} btnLabel='Login' txtColor="white" Press={()=>props.navigation.navigate('Login')} />
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}  style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
                        <Text>Pas de compte ? </Text>
                        <Text style={{color:COLORS.blue1}}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </Background>
    )
}

export default Login