import { View, Text, TextInput } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Comment} from '../Comment'
import { Subcomment } from '../subComment'
import { FlatList } from 'react-native';
import { userStorage } from '../../storage/zustand/store';
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { ScrollView } from 'react-native-virtualized-view';
import { Image } from 'expo-image';

type CommentProps = {
    authorId: number,
    authorName: string,
    content: string,
    profilePicture: string,
    
}

interface CommentsProp{
    idPost: number,
    comments: CommentProps[]
    refetch : any
}



export function Comments({idPost, comments,  refetch}:CommentsProp){
    const [commentContent, setCommentContent] = useState('')
    const user = userStorage((state) => state.user)





    async function handleSubmitComment(){
        try{

            const {data} = await axios.post(`https://belifter-server.onrender.com/posts/${idPost}/comments/create`, {
                content: commentContent},
                {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
                
            })
            refetch()
            console.log(data)
        }catch(e){
            console.error(e)
        }
        
    }
    function handleCommentChange(text : string){
        setCommentContent(text)
    }

    return(
        <View className='flex h-full justify-between'>
            <View className='flex-1'>

                <View className="items-center mt-3">
                    <View className='h-1.5 bg-slate-100 w-32 rounded-3xl'></View>

                    <Text className='text-white text-xl mt-2 font-ibmRegular'>Comentários</Text>
                </View>

                <ScrollView >
                    <FlatList
                        
                        data={comments}
                        renderItem={({item}) => <Comment comment={item.content} author={item.authorName} authorImage={item.profilePicture}/>}
                        keyExtractor={(item, key) => `${item}-${key}`}
                    />
                </ScrollView>
                

            </View>

            <View className='flex flex-row content-between w-full py-8'>
                <View className='flex-row items-center justify-center gap-6'>
                    <Image source={user.profilePicture} style={{width: 48, height: 48, borderRadius: 100}}/>
                    <View className=''>
                        <TextInput 
                            className='border-b-2 border-white w-96 font-ibmRegular text-white'
                            placeholder='Adicione um comentário...'
                            placeholderTextColor={"#fff"}
                            value={commentContent}
                            onChangeText={handleCommentChange}
                            onSubmitEditing={handleSubmitComment}
                        />
                    </View>
                </View>
                
                
            </View>
        </View>
        
    )
}
