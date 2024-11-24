import { Text, View, TouchableOpacity, ImageSourcePropType, Modal } from "react-native";
import { CaretCircleRight, ChatCircle, DotsThree, HeartStraight, Timer } from "phosphor-react-native";
import { useState } from "react";
import { Image, ImageBackground } from "expo-image";
import { TouchableHighlight } from "react-native-gesture-handler";
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Comments } from '../Comments';

interface PostImageProps {
    image: ImageSourcePropType,
    content: string,
    id: number,
    comments?: [],
    refetch?: any,
    author: string
    authorPicture: string
}

const transparent = 'rgba{0,0,0,0.5)'

export function Post({image, content, id, comments, refetch, author, authorPicture}:PostImageProps){
    let [status, setStatus] = useState(false);

    function toggleStatus(){
      setStatus(!status)
    }

    const [openModal, setOpenModal] = useState(false);

    function renderModal() {
  
    
        return (
            <View style={{flex: 1}}>
                <GestureRecognizer
                    style={{flex: 1}}
                    onSwipeDown={() => setOpenModal(false)}
                >
                    <Modal 
                        visible={openModal}
                        animationType="slide" 
                        transparent={true} 
                    >
                        <View className="flex-1 justify-end items-center" style={{backgroundColor: 'transparent'}}>
                            <View className="bg-neutral-900 p-15 w-full h-5/6 rounded-t-3xl">
                                {
                                    comments ? <Comments idPost={id} comments={comments} refetch={refetch}></Comments>  : <View> </View>

                                }
                                
                            </View>
                        </View>
                    </Modal>
                </GestureRecognizer>
    
                
            </View>
        );
    }

    return(
    <View className="mt-8 mx-2 p-6 flex flex-col bg-[#151415] rounded-3xl">
        <View className="flex-row justify-between items-center">
            <View className="flex flex-row gap-3 items-center">
                <Image source={authorPicture} style={{width: 56, height: 56, borderRadius: 100}} />
                <View>
                    <Text className="text-white text-lg font-ibmRegular ">{author}</Text>
                    <View className="flex flex-row justify-between mt-2 items-center">
                        <Text className="text-white text-xs font-ibmMedium mr-1">Há 5 Horas</Text>
                        <TouchableOpacity>
                            <Text className="text-gray-300  text-xs font-ibmMedium">Seguir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity> 
                <DotsThree color="white" weight="bold" size={30}/>
            </TouchableOpacity>
        </View>
        <View className="flex flex-col justify-center items-center mt-4">
            <Text className="text-white text-lg font-ibmRegular w-full">{content}</Text>
            <View className="w-full h-72 mt-6">
                <ImageBackground
                source={image} contentFit="cover" imageStyle={{borderRadius: 30}} style={{borderRadius: 16, flex: 1, justifyContent: "flex-end"}}>
                </ImageBackground>
            </View>
            {
                comments ?
                <View className="w-full flex flex-row items-center mt-4 gap-4">

                <View className="flex flex-row gap-2 items-center">
                    <TouchableOpacity onPress={() => toggleStatus()}>
                        {status ? <HeartStraight size={26} color="#00BF63" weight="fill"/> : <HeartStraight size={26} color="white" weight="bold"/>}
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row gap-4 items-center">
                    <TouchableOpacity onPress={()=> setOpenModal(true)}>
                        <ChatCircle size={26} color="white" weight="bold"/>
                    </TouchableOpacity>
                    {renderModal()}
                </View>
            </View>

            :

            <View></View>
            }
        </View>
    </View>
    );
}