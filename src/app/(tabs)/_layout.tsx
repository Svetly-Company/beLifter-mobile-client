import { Tabs } from "expo-router";
import { Barbell, ChartPieSlice, ChatTeardropText, Globe, House, User } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import { AccessibilityState, GestureResponderEvent, Text, TouchableOpacity, StyleSheet } from "react-native";
import {BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient()
export default function TabLayout(){
  return(
    <QueryClientProvider client={queryClient}> 
    <StatusBar backgroundColor={'#000'} style="light" translucent/>
    <Tabs screenOptions={({navigation, route}) => ({
      headerShown: false,
      tabBarLabel: navigation.isFocused() ? route.name : '',
      tabBarStyle: {
        backgroundColor: "#232324",
        position: "absolute",
        bottom: 15,
        left: 28,
        right: 28,
        borderRadius: 35,
        height: 65,
        borderWidth: 0,
        borderColor: '#000'
        
      },
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        textTransform: "capitalize",
        fontFamily: "Montserrat_500Medium",
      },
      tabBarActiveTintColor: "#fff",
      
      
  
    })}>
      <Tabs.Screen name="home"  options={{
        tabBarIcon: ({size, color, focused}) => (
          <House size={size} color={color} weight="bold"/>
        ),
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
      <Tabs.Screen name="comunidade" options={
        {
          tabBarIcon: ({size, color, focused}) => (
            <Globe size={size} color={color} weight="bold"/>
          
          ),
          tabBarButton: (props) => {
            return <TabButton {...props}/>
          }
        }
      }/>
      <Tabs.Screen name="treino" options={{
        tabBarIcon: ({size, color, focused}) => (
          <Barbell size={size} color={color} weight="bold"/>
        ),
        
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
      <Tabs.Screen name="estatistica" options={{
        tabBarIcon: ({size, color, focused}) => (
          <ChartPieSlice size={size} color={color} weight="bold"/>
        ),

        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }} />

      <Tabs.Screen name="perfil" options={{
        tabBarIcon: ({size, color, focused}) => (
          <User size={size} color={color} weight="bold"/>
        ),

        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }} />
      <Tabs.Screen name="messages" options={{
        tabBarStyle: {display: "none"}, 
        href: null
      }}/>
      <Tabs.Screen name="(chat)/[chatid]" options={{
        tabBarStyle: {display: "none"},
        href: null,
      }}/>

    </Tabs>
    </QueryClientProvider>
  )
}

function TabButton({children, onPress, accessibilityState}: BottomTabBarButtonProps){
  const state = accessibilityState?.selected
  return(
    <TouchableOpacity style={state? styleTabButton.activeButton : styleTabButton.unActiveButton} onPress={onPress}>{children}</TouchableOpacity>
  )
}

const styleTabButton = StyleSheet.create( {
  activeButton: {
    flex: 2,   
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#00592E',
    color: 'white',
    borderRadius: 35,
    padding: 8,
    margin: 6,
  },
  unActiveButton: {
    flex:1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }


})
