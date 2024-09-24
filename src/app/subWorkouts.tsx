import { ImageBackground, ImageSourcePropType, ScrollView, View, Text } from "react-native";

type TsubWorkout = {
    source:ImageSourcePropType,
    text:string,
    description:string
}

export default function subWorkouts({text, description, source}:TsubWorkout){
    return(
        <ScrollView className="flex-1 ">
            <View className="flex-1">
                <ImageBackground
                source={require("../../src/assets/homemTreinando.webp")} resizeMode="cover" imageStyle={{borderRadius: 20}}>
                    <Text>
                        {text}
                    </Text>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}