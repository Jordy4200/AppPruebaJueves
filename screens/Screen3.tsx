import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// La base de datos
import { db } from '../config2/Config';
import { onValue, ref, remove, set, update } from "firebase/database";
import Informacion from '../components/Informacion';

export default function Screen3() {
  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setlista] = useState([])
  const [visible, setvisible] = useState(false)

  
  function leer(){
    const starCountRef = ref(db, 'usuarios/');  //linea ruta para leer datos
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  
    //CAMBIO DE FORMATO DE LOS DATOS
    const listaTemp:any =Object.keys(data).map((id)=>({
      key: id, ...data[id]
    }))
  
    console.log(listaTemp);
    setlista(listaTemp)
    
  });
  }

  useEffect(() => {
    leer()
  }, [])


  function eliminar(id: string){
    remove(ref(db, 'usuarios/' + id))
    .then(() => {
      Alert.alert('Mensaje', 'Usuario Eliminado');
      leer(); // Volver a leer los datos para actualizar la lista
    })
    .catch((error) => {
      console.log(error);
    });
    
  }


  function editar(id: string){
    update(ref(db, 'usuarios/' + id), {
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    })
    .then(() => {
      Alert.alert('Mensaje', 'Datos actualizados con éxito');
      leer(); 
    })
    .catch((error) => {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar la información');
    });
  
    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');
    leer();
    setvisible(false);
  }
  

  function editar2(item: any){
    setId(item.key);
    setMonto(item.monto);
    setCategoria(item.categoria);
    setDescripcion(item.descripcion);
    setvisible(true);
  }

  


  type Usuario = {
    id: string,
    monto: string,
    categoria: string,
    descripcion: string
  };

  
  return (
    <View style={styles.container}>
      <Text> sdasd
      </Text>
      <Button title='Editar' color={'#3fbcd5'} />
      <FlatList
        data={lista}
        renderItem={({item}:{item:Usuario})=>
        <View style={styles.item}>
        <Informacion data={item} />
        <Button title='Editar' color={'#3fbcd5'} onPress={ ()=> editar2(item)} />
        </View>
        
        }
      />
      <FlatList
        style={{marginTop:150}}
        data={lista}
        renderItem={({item}:{item:Usuario})=>
          <View >   
            <Text>{item.monto}</Text>
          </View>
        }
      />
  <Text>asdasd</Text>
    </View>
   );
  }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100, 
    alignItems:'center'
  },
  card: {
        
    backgroundColor: 'red',
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    
    shadowColor: '#19398f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,

  },
  item:{
    color:"white",
    backgroundColor:"red",
    margin:10,
    justifyContent:"space-between",
    flexDirection:"row",
  },
})