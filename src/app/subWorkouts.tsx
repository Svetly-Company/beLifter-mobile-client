import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ImageBackground, ImageComponent, TouchableOpacity, Button, ScrollView } from 'react-native';
import { ArrowCircleRight, Barbell, Circle, Repeat, Timer } from 'phosphor-react-native'
import { NavigationContainer } from '@react-navigation/native';
import {router} from 'expo-router'
export default function HomeScreen() {
  const [height, setHeight] = useState()

  function navigateToEdit(){
    router.navigate("editWorkout")
  }

  return (
    <View style={styles.fullDiv}>
      <View>
        <ImageBackground source={require ("../assets/homemTreinando.webp")} style={[styles.Image]}>

          <View style={styles.topSpace}>

          </View>

          <View style={styles.bottomDiv}>

            <Text style={styles.topText}>
                Treino B - Peito e biceps
            </Text>

            <Text style={styles.bottomText}>
                Criado por username
            </Text>

          </View>

        </ImageBackground>
      </View>
      
    <ScrollView style={styles.scroll}>
      <View style={[styles.content]}>
        <View style={(styles.exercises)}>

          <View>
            <Text style={(styles.exeText)}>Exercicios</Text>
          </View>

          <View style={(styles.activities)}>
            <View style={[styles.topContent]}>
                  <View style={[styles.left]}>
                    <Image source={require ("../assets/homemTreinando.webp")} style={[styles.boxImg]}>
                    </Image>
                  </View>

                  <View style={[styles.right]}>

                    <View >
                      <Text style={[styles.boxText]}>Exercicio X</Text>
                    </View>

                    <View >
                      <Text style={[styles.boxText]}>(método)</Text>
                    </View>
                    <View>
                      <Text style={[styles.subBoxText]}>n séries</Text>
                    </View>
                    
                  </View>

                  <View style={[styles.overRight]}>
                    <TouchableOpacity>
                      <ArrowCircleRight size={25} color='white'/>
                    </TouchableOpacity>
                    
                  </View>
            </View>
            <View style={(styles.line)}>

            </View>
            <View style={[styles.topContent]}>
                  <View style={[styles.left]}>
                    <Image source={require ("../assets/homemTreinando.webp")} style={[styles.boxImg]}>
                    </Image>
                  </View>

                  <View style={[styles.right]}>

                    <View >
                      <Text style={[styles.boxText]}>Exercicio X</Text>
                    </View>

                    <View >
                      <Text style={[styles.boxText]}>(método)</Text>
                    </View>
                    <View>
                      <Text style={[styles.subBoxText]}>n séries</Text>
                    </View>
                    
                  </View>

                  <View style={[styles.overRight]}>
                    <TouchableOpacity>
                      
                      <ArrowCircleRight size={25} color='white'/>
                    </TouchableOpacity>
                    
                  </View>
            </View>
            
          </View>
        </View>

          <View style={[styles.muscularGroups]}>
            <View  style={[styles.textGroup]}>
              <Text style={[styles.muscularText]}>Grupos Musculares</Text>
            </View>
            <View>
              <Image source={require ('../assets/muscles.png')}></Image>
            </View>
            <View style={[styles.textGroup]}>
              <Text style={[styles.muscularText]}>Primarios</Text>
              <Text style={[styles.muscularText]}>Musculos treinados</Text>
            </View>
            
          </View>

          

          
      </View>
    </ScrollView>

      <View style={[styles.bottomButton]}> 
        <TouchableOpacity style={[styles.Button]} onPress={navigateToEdit}>
          <Text style={[styles.textButton]}>Iniciar treino</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  Image:{
    width: '100%',
    height: 250
  },
  topSpace:{
      height: '80%',
  },
  bottomDiv:{
    marginLeft: '5%',
  },
  topText:{
    fontWeight: 'bold',
    color: 'white'
  },
  bottomText:{
    fontWeight: 'thin',
    color: 'white'
  },
  content:{
    height: '55%',
    backgroundColor: 'rgba(9,9,9,255)',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  fullDiv:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#090909',
  },
  box:{
    height: 92,
    width: '90%',
    backgroundColor: 'rgb(24,20,20)',
    borderRadius: 25,
    alignContent: 'center',
    gap:5,
    textAlign: 'center',
    margin: 12,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  boxImg:{
    height: 43,
    width: 80,
    borderRadius: 10,
  },
  left:{
    width: '40%',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  right:{
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '32%'
  },
  boxText:{
    color:'white'
  },
  subBoxText:{
    color:'white',
    fontSize: 10,
    fontWeight: 'light'
  },
  boxCheck:{
    height: 15,
    width: 15,
  },
  overRight:{
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '24%'
  },
  bottomButton:{
    backgroundColor:'rgb(24,20,20)',
    height: 100,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  Button:{
    height: 40,
    width: 170,
    backgroundColor: 'rgb(8,180,92)',
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30  
  },
  textButton:{
    marginTop: '6%',
    color: 'rgb(255,255,255)',
  },
  topContent:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomContent:{
    height: 80,
    display: 'flex',
    
  },
  infoBox:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#090909',
    height: 35,
    width: 330,
    borderRadius: 20,
    gap:7,
    alignItems: 'center',
    marginTop: 5,
  },
  subInfo:{
    backgroundColor: '#302C30',
    height: 20,
    borderRadius: 7,
    color: 'white',
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  textSubInfo:{
    color: 'white',
    fontWeight: 'ultralight',
    paddingLeft: 7,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  subInfoImage:{
    height: 15,
    width: 15,
    marginLeft: 12,
  },
  textOne:{
    color:'white',
    marginLeft: 15,
    fontSize: 15
  },
  scroll:{
    backgroundColor: 'rgb(12,12,12)',
  },
  muscularGroups:{
    backgroundColor: 'rgb(24,20,20)',
    width: '90%',
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  muscularText:{
    color: 'white',
  },
  textGroup:{
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '15%',
    gap: 4,
    marginTop: '7%',
    marginBottom: '7%',
    },
    exercises:{
      height: 'auto',
      backgroundColor: '#151415',
      width: '90%',
      marginTop: 30,
      borderRadius: 30,
      display: 'flex',
      marginBottom:30,

    },
    main:{
      alignContent: 'center',
      alignItems: 'center'
    },
    exeText:{
      color: 'white',
      marginLeft: 34,
      marginTop: 14,
    },
    activities:{
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center'
    },
    line:{
      height: 2,
      width: '90%',
      backgroundColor: '#322E33'
    }
});