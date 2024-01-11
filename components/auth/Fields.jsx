import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { COLORS } from '../../assets/constants/theme'

const Fields = (props) => {
  return (
    <TextInput
    {...props}
    style={{borderRadius:100, color:COLORS.blue1,
        paddingHorizontal:20,width:"80%",backgroundColor:"#eee",
        height:50,marginVertical:10
    }}
        placeholderTextColor={COLORS.blue1}
       
        
    />
  )
}

export default Fields