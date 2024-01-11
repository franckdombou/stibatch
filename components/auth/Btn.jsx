import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

const Btn = ({bgColor,btnLabel,txtColor,Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
    style={{backgroundColor:bgColor,
    borderRadius:100,alignItems:"center",width:WIDTH*0.7,
    paddingVertical:5,
    marginVertical:10,
    alignSelf:"center"
    }}>
        <Text style={{color:txtColor,fontSize:25,fontFamily:"bold"}} >
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}

export default Btn