import { View, Text, Image, TextInput } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Comment} from '../Comment'
import { Subcomment } from '../subComment'




export function Comments(){
    return(
        <View className='flex h-3/4'>
            <View className='overflow-y-auto h-98'>

            <View className="items-center mt-3">
                <View className='h-1.5 bg-slate-100 w-32 rounded-3xl'>

                </View>

                <Text className='text-white text-xl mt-2 font-ibmRegular'>Comentários</Text>
            </View>
                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>
            </View>

            <View className='h-1/4 mt-64 position: sticky bg-gray-800 flex flex-row content-between w-full'>
                <View className='ml-10 mt-12'>
                    <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                    
                </View>
                <View className='ml-3 mt-12'>
                    <TextInput 
                        className='border-b-2 border-white w-96 font-ibmRegular text-xl placeholder-white'
                        placeholder='Adicione um comentário...'
                    />
                </View>
                
            </View>
        </View>
        
    )
}
