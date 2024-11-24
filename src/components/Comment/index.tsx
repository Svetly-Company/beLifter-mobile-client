import { View, Text } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Image } from 'expo-image';



interface CommentProps{
    comment: string,
    author: string,
    authorImage: string
}

export function Comment({comment, author, authorImage}:CommentProps){
    return(
        <View>

            <View className='flex flex-row'>

                <View className="flex gap-3 ml-10 mt-5">

                    <Image source={authorImage} style={{height: 50, width: 50, borderRadius: 100}} />
                  
                </View>
                    
                <View>

                    <View className='flex ml-2 mt-4 h-min'>
                            <View className='flex flex-row'>
                                <Text className="text-white font-ibmMedium ml-2 text-lg">{author}</Text>
                                <Text className="text-slate-300 text-base mt-0.5 ml-7 font-ibmRegular"></Text>
                            </View>
                             
                            <Text className='text-white font-ibmRegular ml-2 text-lg'>{comment}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}
