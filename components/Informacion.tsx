import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion(props:any) {
  return (
    <View>
      <Text></Text>
      <Text>{props.data.id}</Text>
      <Text>{props.data.categoria}</Text>
      <Text>{props.data.descripcion}</Text>
      <Text>{props.data.monto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})