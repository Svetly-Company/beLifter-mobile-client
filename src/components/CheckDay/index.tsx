import {Text, View } from "react-native";
import { CheckFat } from "phosphor-react-native";

type TCheckDay = { 
    checked?: boolean,
    children: React.ReactNode
    };

export function CheckDay({checked, children}: TCheckDay){

    function CheckColor(){
        if(checked == true){
            return(
                <View className={`flex flex-col justify-center items-center bggray h-16 w-12 rounded-md bg-green-800`}>
                    <CheckFat weight="fill" color="white" size={21}></CheckFat>
                </View>
            )
        }else{
            return(
                <View className={`flex flex-col justify-center items-center bggray h-16 w-12 rounded-md bg-gray-1000`}>
                    <Text>1</Text>
                </View>
            )
        }
    };

return(
    <View className="flex flex-col items-center gap-2">
        <CheckColor/>
        <Text className="font-ibmRegular text-white text-x">{children}</Text>
    </View>
);}