import React, { useRef, useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import Sandclock from './components/Sandclock'   //Tive dificuldade, pois a imagem rodava na web e no mobile não, 
//foi necessario fazer a converção SRV em outro site que acabou dando certo.

//Dificuldade em fazer o timer tbm, estava tentando usar o clearInterval e não conseguia... e consegui fazer dessa forma...mas com mto trabalho


var tempo = 10 ;

const Botao = ({ onPress, animatedValue }) => {

useEffect(() => {
  async function audioPlay(){
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/Won.mp3')
    );
    await sound.playAsync();
  }


  if (timer == 0 ) {
    audioPlay(); 
  };
  if(timer != tempo && timer >0){
    inicioTimer()
  } 
}, timer);

const [timer, setTimer] = React.useState(tempo)

function inicioTimer() {
  if(timer <= 0){
    setTimer(tempo)
  }
 setTimeout(contarNegativo, 1000);

  function contarNegativo() {
      setTimer(previousTime => previousTime - 1);
  }
}

  return (
    <View style={[StyleSheet.absoluteFillObject, estilos.containerBotao]}>
      <Text style={estilos.titulo}> Timer </Text>
     
      <Animated.View style={[estilos.relogio, {
  transform: [
    {
      translateX: animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0 , 350, 0]
      })
    }
  ]
}]}>
      <AntDesign name="clockcircle" style={estilos.relogio} />
      </Animated.View>
     

      <Animated.View style={[estilos.play, {
        transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '360deg', '0deg']
          })
        }
      ]
      }]}>
      <TouchableOpacity onPress={() => {inicioTimer(timer); onPress()}} >
      
        <View style={[estilos.play]}>
          <AntDesign name="playcircleo" size={100} color={"#1C1C1C"} />
        </View>
      </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[estilos.trofeu, {
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0 , 0.5, 1],
              outputRange: [0 , -105, 0]
            })
          }
        ]
      }]}>
      <AntDesign name="Trophy" style={estilos.trofeu} />
      </Animated.View>

      <Text style={estilos.titulo}> {timer} </Text>
      
      <Sandclock />
      
    </View>
  )
}
  
  

export default function App() {
  const valorAnimac = useRef(new Animated.Value(0)).current
  const [indice, setIndice] = useState(0)
  
  const animacao = (toValue) => Animated.timing(valorAnimac, {
    toValue: toValue,
    duration: 10000,
    useNativeDriver: false
  })

  const pressionar = () => {
    setIndice(indice === 1 ? 0 : 1)
    animacao(indice === 1 ? 0 : 1).start()
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Botao onPress={pressionar} animatedValue={valorAnimac} />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
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
    color: "#FFFFFF",
    paddingTop: 70,
    paddingRight: 170,
  },

  play: {
    backgroundColor: "#6495ED",
    height: 100,                   //Ajustar o TouchableOpacity junto com a extremidade do icon, e fazer o background
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  trofeu: {
    fontSize: 30,
    color: "#808000",
    paddingLeft: 170
  }
})