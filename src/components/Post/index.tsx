import { Text, View, TouchableHighlight, Image, TouchableOpacity, ImageBackground } from "react-native";
import { CaretCircleRight, DotsThree, Timer } from "phosphor-react-native";

export function Post(){
    return(
    <View className="mt-8 px-8 flex flex-col">
        <View className="flex-row justify-between items-center">
            <View className="flex flex-row gap-3 items-center">
                <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                <View>
                    <Text className="text-white text-base font-ibmRegular">Josivaldo Pereira</Text>
                    <View className="flex flex-row justify-between mt-2 items-center">
                        <Text className="text-gray-1050 text-xs font-ibmMedium">Há 5 Horas</Text>
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
            <Text className="text-white text-base font-ibmRegular">Legday de hoje, posterior tá ficando enorme</Text>
            <View className="w-full h-72 mt-6">
                <ImageBackground className="flex-1 justify-end " 
                source={require('../../assets/mulherTreinando.webp')} resizeMode="cover" imageStyle={{borderRadius: 30}}>
                    <View className="flex flex-row justify-between bg-gray-1000/65 mx-2 my-1 px-6 rounded-full">
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <TouchableHighlight>
                            <CaretCircleRight size={34} color="#3E3E3E" weight="fill"/>
                        </TouchableHighlight>
                        <View className="absolute h-7 w-5 bg-white rounded-full right-8 top-1 -z-10"/>
                    </View>
                </ImageBackground>
            </View>           
        </View>
    </View>
    );
}