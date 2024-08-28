import { View, Text, Image } from 'react-native';
import { HeartStraight } from "phosphor-react-native";


export function Comment(){
    return(
        <View>

            <View className='flex flex-row'>

                <View className="flex gap-3 ml-10 mt-5">

                    <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                  
                </View>
                    
                <View>

                    <View className='flex ml-2 mt-4 h-min'>
                            <View className='flex flex-row'>
                                <Text className="text-white font-ibmMedium ml-2 text-lg">Josivaldo Pereira</Text>
                                <Text className="text-slate-300 text-base mt-0.5 ml-7 font-ibmRegular">Há 5 Horas</Text>
                            </View>
                             
                            <Text className='text-white font-ibmRegular ml-2 text-lg'>Nossa irmao ta monstro!!! ta pernudo.</Text>
                    </View>

                </View>

                <View className='ml-6 mt-9'>
                    <HeartStraight size={23} color="white" weight="regular"/>
                </View>
            </View>

           
            
        </View>
    )
}