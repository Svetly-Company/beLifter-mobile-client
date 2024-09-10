import { View, Text, Image } from 'react-native';
import { HeartStraight } from "phosphor-react-native";


export function Subcomment(){
    return(
        <View className='items-center content-end flex flex-row'>

            <View className='w-2/12'>
                
            </View>

            <View className='flex flex-row gap-14'>

                <View className='flex flex-row'>
                    <View className="flex gap-3 mt-5">

                    <Image source={require('../../assets/moca.jpg')} className="w-10 h-10 rounded-full" />

                    </View>

                    <View className='items-center content-center gap-2'>

                    <View className='flex ml-2 mt-4 h-min'>
                            <View className='flex flex-row'>
                                <Text className="text-white font-ibmMedium ml-2 text-base">Josivaldo Pereira</Text>
                                <Text className="text-slate-300 text-sm mt-0.5 ml-7 font-ibmRegular">Há 5 Horas</Text>
                            </View>
                            <View>
                                <Text className='text-white font-ibmRegular text-base ml-3'>grato ❤️.</Text>
                            </View>
                            
                    </View>

                    </View>

                </View>

                

                <View className=' mt-9 ml-1'>
                    <HeartStraight size={19} color="white" weight="regular"/>
                </View>
            </View>

           
            
        </View>
    )
}
