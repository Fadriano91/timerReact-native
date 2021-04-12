import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Sandclock from './components/Sandclock'

const Botao = ({ onPress }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.containerBotao]}>
        <Text style={styles.titulo}>Timer</Text>
        
          <AntDesign name="clockcircle" style={styles.relogio}/>
          
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.play]}>
          <AntDesign name="playcircleo" size={100} color={"#1C1C1C"} />
          </View>
        </TouchableOpacity>
          <AntDesign name="Trophy" style={styles.trofeu}/>
          <Sandclock />
    </View>
  )
}

export default function App(){
  const onPress = () => {
    let mensagem = "Você clicou"
    alert(mensagem)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Botao onPress={onPress}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008B8B",
    alignItems: 'center'
  },
  titulo: {
    fontSize: 35,
    color: "#363636",
    paddingTop: 20,
    justifyContent: 'center'
  },
  containerBotao: {
    flex: 1,
    alignItems: 'center'

  },
  relogio: {
    fontSize: 30,
    color: "#363636",
    paddingTop: 70,
    paddingRight: '90%'
  },
  play: {
    backgroundColor: "#6495ED",
    height: 100 ,                   //Ajustar o TouchableOpacity junto com a extremidade do icon, e fazer o background
    width: 100 ,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  trofeu: {
    fontSize: 30,
    color: "#363636",
    paddingLeft: '90%'
  }
})