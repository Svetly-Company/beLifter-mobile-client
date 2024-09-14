import { Text, View, TouchableHighlight, Image, TextInput, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { ArrowCircleRight, Bell, CaretCircleRight, CaretDown, CaretUp, DotsThree, MagnifyingGlass, PaperPlaneRight, PaperPlaneTilt, Timer } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../components/Post";
import { useState, useEffect } from "react";
import { getUserData } from "../../storage/userData/getUserData";
import axios from "axios";
import { ScrollView } from "react-native-virtualized-view";


export default function Comunidade(){
    interface userModel{
        token: string
    }
    interface PostObject 
    {author: Object, comments: [], content: string, idPost: number, likes: number, media: string}
    
    const [user, setUser] = useState<userModel>()

    const [posts, setPosts] = useState<PostObject[]>([])


    useEffect(()=>{
        
        const fetch = async () => {
            if(user) {
                loadPosts()
                return;
            } 
            loadUserData() 
            
        }
        fetch()

        console.log(posts)
    }, [])

    async function loadUserData(){
        const userData = await getUserData()
        setUser(userData)
        loadPosts()
        console.log(userData)
        
    }

    async function loadPosts(){
        try{
            if(user){
                const values = await axios.get('https://belifter-server.onrender.com/posts/all',
                    {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    })
        
                    setPosts(values.data)
                    console.log(values.data)
            }
            
        }catch(Err){
            console.error(Err + 'Post')
        }
    }
    



    return(
    <SafeAreaView style={{flex: 1}}>
        <ScrollView className="bg-gray-950 flex-1">
            <View className="p-7 flex-row justify-between items-center">
            <Image source={require('../../assets/BeLifter.jpg')} className="h-14 w-32" />
                <View className="flex flex-row gap-3">
                    <TouchableOpacity>
                        <Bell color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <PaperPlaneTilt color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex flex-row mx-8 px-2 py-1 gap-1 items-center border border-white rounded-full">
                <TouchableOpacity>
                    <MagnifyingGlass color="white" size={19}/>
                </TouchableOpacity>
                <TextInput className="flex-1 text-lg color-white" placeholderTextColor={"white"} placeholder="Pesquisar"></TextInput>
            </View>
            <View className="flex-row gap-1 justify-center mb-4 mt-8">
                <TouchableOpacity>
                    <Text className="text-black font-ibmMedium rounded-full px-2 py-1 bg-white">Descobrir</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="font-ibmMedium rounded-full px-2 py-1 text-white">A seguir</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post image={require('../../assets/mulherTreinando.webp')} content={item.content}/>}
                keyExtractor={item => item.idPost.toString()}
            />
            
        </ScrollView>
    </SafeAreaView>
    )
}