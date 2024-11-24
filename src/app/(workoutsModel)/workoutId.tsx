import { useEffect, useState } from 'react';
import { StyleSheet, Platform, View, Text, ImageComponent, TouchableOpacity, Button, ScrollView, ImageSourcePropType, FlatList } from 'react-native';
import { ArrowCircleRight, Barbell, Circle, Repeat, Timer } from 'phosphor-react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, ImageBackground } from 'expo-image';
import Exercise from '../../components/Exercise';
import { it } from 'rn-emoji-keyboard';


interface exercisesModel {
  name: string,
  description: string,
  idExercise: number,
  image: ImageSourcePropType
}


export default function HomeScreen() {
  const {text, data, id, bodyPart, imgModel} = useLocalSearchParams();
  const [dados, setDados] = useState<exercisesModel[]>();
  const router = useRouter();

  useEffect(() => {
    
    if (data) {
      const parsedData = JSON.parse(data as string);
      
      if (parsedData) {
        setDados(parsedData);
      }
    }
  }, [data, id]);

  function navigateToPost() {
    router.push("../post");
  }

  return (
    <View style={styles.fullDiv}>
      <View>
        <ImageBackground source={JSON.parse(imgModel as string || "{}")} style={[styles.Image]}>

          <View style={styles.topSpace}>

          </View>

          <View style={styles.bottomDiv}>

            <Text style={styles.topText}>
                {text}
            </Text>

            <Text style={styles.bottomText}>
                Criado por Basso
            </Text>

          </View>

        </ImageBackground>
      </View>
      
      <ScrollView style={styles.scroll}>
      <View style={[styles.content]}>
        <View style={(styles.exercises)}>
{/* 
          <View style={(styles.toTextExercises)}> */}
            <Text style={(styles.exeText)}>Exercicios</Text>
          {/* </View> */}

          <View style={(styles.activities)}>
            {
              dados ? dados.map((item) => <Exercise title={item.name} desc={item.description} img={item.image} key={item.idExercise}/>) : <View></View>
            }
            
            
            
          </View>
        </View>

          <View style={[styles.muscularGroups]}>
            <View  style={[styles.textGroup]}>
              <Text style={[styles.muscularText]}>Grupos Musculares</Text>
            </View>
            <View>
              <Image style={styles.muscleImage} source={JSON.parse(bodyPart as string || "{}")}></Image>
            </View>
            <View style={[styles.textGroup]}>
              <Text style={[styles.muscularText]}>Primarios</Text>
              <Text style={[styles.muscularText]}>Musculos treinados</Text>
            </View>
            
          </View>

          

          
      </View>
    </ScrollView>


      <View style={[styles.bottomButton]}>
        <TouchableOpacity style={[styles.Button]} onPress={() => { navigateToPost() }}>
          <Text style={[styles.textButton]}>Finalizar treino</Text>
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
    marginLeft: 20,
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
  muscleImage:{
    height: 300,
    width: 300,
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
    height: 120,
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
    marginTop: 10,
    color: 'rgb(255,255,255)',
  },
  topContent:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:15
  },
  bottomContent:{
    display: 'flex',
  },
  infoBox:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#090909',
    height: 35,
    width: 330,
    borderRadius: 20,
    marginBottom: 5,
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
      marginBottom: 14
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
    

