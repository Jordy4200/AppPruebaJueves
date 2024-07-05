import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Cards(props:any) {
  return (
    <View  >
      <Text style={styles.titulo} >{props.data.name}</Text>
      <Text  style={styles.titulo}>{props.data.description}</Text>
      <Image
        style={styles.image}
        source={{ uri: props.data.image }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'flex-end', 
      },
      titulo: {
       color:"white"
      }
})