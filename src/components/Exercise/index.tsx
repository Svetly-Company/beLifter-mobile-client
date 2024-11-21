import { Image } from "expo-image";
import { Link } from "expo-router";
import { ArrowCircleRight } from "phosphor-react-native";
import { ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface exerciseProp{
  title: string,
  desc: string,
  img: ImageSourcePropType
}

export default function Exercise({title, desc, img}:exerciseProp){
  return(
    <View className="flex-row justify-between items-center p-8 w-full">
      <View className="items-center justify-center">
        <Image style={{width: 80, height:45, borderRadius: 10}} source={img}></Image>
      </View>
      <View className="flex-1 items-start justify-center">
        <View className="items-start justify-start p-4">
          <Text className="text-white">{title}</Text>
          <Text className="text-gray-200 text-xs">{desc}</Text>
        </View>
      </View>
      <Link href={{pathname: "editExercise/[exerciseId]", params: {
        title,
        desc
      }}} asChild>
        <TouchableOpacity>
          <ArrowCircleRight size={28} color='white'/>
        </TouchableOpacity>
      </Link>
    </View>
  )
}