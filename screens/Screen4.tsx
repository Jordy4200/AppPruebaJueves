import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';

export default function Screen4() {

  const API_ITSQMET = 'https://jritsqmet.github.io/web-api/crash.json'
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch(API_ITSQMET)
    .then( response => response.json ())
    .then( datos => setdata(datos))
    .catch(error => console.log(error))
    
  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >API LISTA </Text>
      <FlatList
      data={data}
      renderItem={({item} :{item:any}) =>  
        <View style={styles.item}><Cards data ={item} /></View>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100, 
  },
  item:{
  color:"white",
  backgroundColor:"#666",
  margin:10,
  justifyContent:"space-between",
  flexDirection:"row",
},
titulo:{
  textAlign:'center',
  fontSize:50
},
})