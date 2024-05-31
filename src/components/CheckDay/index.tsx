import {Text, View } from "react-native";
import { CheckFat, X, Bed } from "phosphor-react-native";

type TCheckDay = { 
    checked?: "true" | "false" | "sleep" | "unchecked",
    children?: React.ReactNode,
    date: Number;
    };

export function CheckDay({checked, children, date}: TCheckDay){

    function CheckColor(){
        if(date == null){
            date = 69
        }
        switch(checked){
            case "true":
                return(
                    <View className="flex flex-col justify-center items-center bggray h-16 w-12 rounded-md bg-green-800">
                        <CheckFat weight="fill" color="white" size={21}/>
                    </View>
                );
            case "false":
                return(
                    <View className="flex flex-col justify-center items-center h-16 w-12 rounded-md bg-red-700">
                        <X weight="bold" color="white" size={21}/>
                    </View>
                );
            case "sleep":
                return(
                    <View className="flex flex-col justify-center items-center h-16 w-12 rounded-md bg-white">
                        <Bed weight="bold" color="black" size={21}/>
                    </View>
                );
            default:
                return(
                    <View className="flex flex-col justify-center items-center h-16 w-12 rounded-md bg-gray-1000">
                        <Text className="font-regular text-white text-x">{date.toString()}</Text>
                    </View>
                )
        }
            
            
        }
        return(
            <View className="flex flex-col items-center gap-2">
                <CheckColor/>
                <Text className="font-ibmRegular text-white text-x">{children}</Text>
            </View>
        );
};
