import { View, Text, Image } from 'react-native';
import { HeartStraight } from "phosphor-react-native";


export function Comment(){
    return(
        <View className='ml-2'>

            <View className='flex flex-row items-center content-center gap-2'>

                <View className="flex gap-3 mt-5">

                    <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                  
                </View>
                    
                <View>

                    <View className='flex mt-4 h-min'>
                            <View className='flex flex-row gap-2'>
                                <Text className="text-white font-ibmMedium ml-2 text-lg">Josivaldo Pereira</Text>
                                <Text className="text-slate-300 text-base mt-0.5 font-ibmRegular">Há 5 Horas</Text>
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
