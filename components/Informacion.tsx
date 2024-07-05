import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion(props:any) {
  console.log(props.data.monto);
  return (
    
    <View>
      <Text>{props.data.monto}</Text>
      <Text>{props.data.categoria}</Text>
      <Text>{props.data.descripcion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})