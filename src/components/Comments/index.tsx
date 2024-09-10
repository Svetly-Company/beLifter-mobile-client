import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Comment} from '../Comment'
import { Subcomment } from '../subComment'




export function Comments(){
    return(
        <View className='flex w-full'>

                <View className="items-center mt-3">
                    <View className='h-1.5 bg-slate-100 w-32 rounded-3xl'>

                    </View>

                    <Text className='text-white text-xl mt-2 font-ibmRegular'>Comentários</Text>
                </View>

            <ScrollView className='overflow-y-auto h-5/6'>

                
                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>


                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>

            </ScrollView>

            <View className='h-min position: sticky rounded-2xl bg-gray-800 flex flex-row gap-4 items-center content-center'>
                <View className='ml-6'>
                    <Image source={require('../../assets/moca.jpg')} className="w-11 h-11 mt-2 rounded-full" />
                </View>
                <View className='w-3/4'>
                    <TextInput
                        className='border-b border-white w-full font-ibmRegular text-xl placeholder-white'
                        placeholder='Adicione um comentário...'
                        placeholderTextColor="white"
                        
                    />
                </View>
                
            </View>
        </View>
        
    )
}
