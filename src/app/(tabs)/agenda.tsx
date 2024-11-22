import { View, Text } from "react-native";
import { CaretLeft } from "phosphor-react-native";

export default function Agenda(){
    return(
        <View className="bg-[#0D0D0D] flex-1 flex gap-16 pt-5">
            <View className=" flex h-min flex-row mt-3 items-center ml-4">

                <View className="h-2/4 mb-1 w-4/12">
                    <CaretLeft size={30} color="#00BF63" />
                </View>

                <View className="flex flex-row gap-8">
                    <View className="w-3/6">
                        <Text className="font-ibmMedium text-xl mt-2 text-white capitalize">Atendimento</Text>
                    </View>

                    <View className="w-2/6 flex-row gap-3 mt-2">
                        
                    </View>
                </View>
            </View>
        </View>
    );
}

