import {ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import { ArrowCircleRight } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { useEffect, useState } from "react";


interface exercisesModel {
    name: string,
    description: string,
    idExercise: number,
    image: ImageSourcePropType
  }

type TWorkout = {
    source:ImageSourcePropType,
    text:string,
    description:string,
    id: number,
    exerciseInfo: Array<exercisesModel>,
    bodyPart: ImageSourcePropType
}

interface scheduleModel {
    idWorkout: number,
    name: string,
    description: string
    image: ImageSourcePropType,
    exercises: exercisesModel[]
  }

export function Workouts({source, text, description, id, exerciseInfo, bodyPart}:TWorkout){
    const [list, setList] = useState([])


    return(
        <View className="w-72 h-72 px-4 border-box">
            <ImageBackground style={{flex: 1}}
            source={source} contentFit="cover" imageStyle={{borderRadius: 20}}>
                <LinearGradient colors={['transparent', 'black']} start={{x: 0.5, y: 0.2}} className="flex flex-1 justify-end rounded-3xl p-2">
                    <View className="flex justify-between px-2">
                        <View>
                            <Text className="text-white text-md font-ibmMedium drop-shadow-lg">{text}</Text>
                            <Text className="text-slate-200 font-ibmRegular font-thin text-xs drop-shadow-lg text-justify">{description}</Text>
                        </View>
                        <View className="justify-end items-end w-full">
                            
                            <Link href={{pathname: "(workoutsModel)/[workoutId)", params: {
                                data: JSON.stringify(exerciseInfo),
                                imgModel: JSON.stringify(source),
                                id,
                                text,
                                bodyPart: JSON.stringify(bodyPart)
                            }}} asChild>
                                <TouchableOpacity><ArrowCircleRight color="white" size={38}/></TouchableOpacity>
                            </Link>
                            
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}