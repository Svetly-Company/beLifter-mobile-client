import { View, Text, Image } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Comment} from '../Comment'


export function Comments(){
    return(
        <View>
            <View className="items-center mt-3">
                <View className='h-1.5 bg-slate-100 w-32 rounded-3xl'>

                </View>

                <Text className='text-white text-xl mt-2 font-ibmRegular'>Comentários</Text>
            </View>

           <Comment></Comment>
            
        </View>
    )
}
