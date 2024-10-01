import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ImageBackground, ImageComponent, TouchableOpacity, Button, ScrollView } from 'react-native';



export default function HomeScreen() {
  var [height, setHeight] = useState(90)
  



  return (
    <View style={[styles.fullDiv]}>
      <View>
        <ImageBackground source={require ("../assets/moca.jpg")} style={[styles.Image]}>

          <View style={[styles.topSpace]}>

          </View>

          <View style={[styles.bottomDiv]}>

            <Text style={[styles.topText]}>
                Treino B - Peito e biceps
            </Text>

            <Text style={[styles.bottomText]}>
                Criado por username
            </Text>

          </View>

        </ImageBackground>
      </View>
      
    <ScrollView style={[styles.scroll]}>
      <View style={[styles.content]}>
            <View style={[styles.box, {height}]}>
              <View style={[styles.topContent]}>
                <View style={[styles.left]}>
                  <Image source={require ("../assets/moca.jpg")} style={[styles.boxImg]}>
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
                    <Text style={[styles.subBoxText]}>0 de n séries concluidas</Text>
                  </View>
                  
                </View>

                <View style={[styles.overRight]}>
                  <TouchableOpacity onPress={ () => setHeight(240)}>
                    
                    <Image source={require ("../assets/moca.jpg")} style={[styles.boxCheck]}>
                    </Image>
                  </TouchableOpacity>
                  
                </View>
              </View>

              <View style={[styles.bottomContent]}>
                  <View style={styles.infoBox}>

                    <Text style={[styles.textOne]}>1</Text>

                    <View style={styles.subInfo}>
                      
                      <Text style={styles.textSubInfo}>12 repetições</Text>
                     
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>20kg</Text>
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>0</Text>
                    </View>

                    <Image source={require ("../assets/moca.jpg")} style={[styles.subInfoImage]}>
                    </Image>

                  </View>

                  <View style={[styles.infoBox]}>

                    <Text style={[styles.textOne]}>1</Text>

                    <View style={styles.subInfo}>
                      
                      <Text style={styles.textSubInfo}>12 repetições</Text>
                     
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>20kg</Text>
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>0</Text>
                    </View>
                    <TouchableOpacity>
                      <Image source={require ("../assets/moca.jpg")} style={[styles.subInfoImage]}></Image>
                    </TouchableOpacity>
                    
                    

                  </View>

                  <View style={styles.infoBox}>

                    <Text style={[styles.textOne]}>1</Text>

                    <View style={styles.subInfo}>
                      
                      <Text style={styles.textSubInfo}>12 repetições</Text>
                     
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>20kg</Text>
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>0</Text>
                    </View>

                    <Image source={require ("../assets/moca.jpg")} style={[styles.subInfoImage]}>
                    </Image>

                  </View>
              </View>
          </View>

          

          
      </View>
    </ScrollView>

      <View style={[styles.bottomButton]}> 
        <TouchableOpacity style={[styles.Button]}>
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
    marginLeft: '5%',
  },
  topText:{
    fontWeight: 'bold',
  },
  bottomText:{
    fontWeight: 'thin',
  },
  content:{
    height: '55%',
    backgroundColor: 'rgb(1,12,12)',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  fullDiv:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(12,12,12)',
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
    backgroundColor: 'rgb(12,12,12)',
    height: 35,
    width: 290,
    borderRadius: 20,
    gap:2,
    alignItems: 'center',
    marginTop: 5
  },
  subInfo:{
    backgroundColor: '#302C30',
    height: 20,
    borderRadius: 7,
    color: 'white',
    marginLeft: 10,

  },
  textSubInfo:{
    color: 'white',
    fontWeight: 'ultralight',
    paddingLeft: 10,
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
  }
});
