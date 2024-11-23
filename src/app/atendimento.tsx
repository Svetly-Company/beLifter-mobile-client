import { router } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Atendimentos(){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D0D0D'}}>
        <View className="bg-[#0D0D0D] flex-1 flex gap-16">
            <View className=" flex h-min flex-row mt-3 items-center">

                <View className="h-2/4 mb-1 w-4/12">
                    <TouchableOpacity onPress={() => router.back()}>
                        <CaretLeft size={30} color="#00BF63" />
                    </TouchableOpacity>
                </View>

                <View className="flex flex-row gap-8">
                <View className="w-3/6">
                    <Text className="font-ibmMedium text-xl mt-2 text-white capitalize">Atendimento</Text>
                </View>

                <View className="w-2/6 flex-row gap-3 mt-2">
                    
                </View>
                </View>



            </View>

            <View className="items-center gap-3">
                <Image source={require('../assets/atendimento.png')} className="" />
                <Text className="font-ibmMedium text-3xl text-white capitalize">Atendimento</Text>
                <Text className="font-ibmMedium text-sm text-gray-100 font-extralight">Converse diretamente com a equipe da academia</Text>
                <View className="w-full items-center gap-6">
                    <TextInput
                    className="border border-[#322E33] rounded-xl w-10/12 pl-3 pt-1 text-white"
                    placeholder="Título da sua dúvida."
                    placeholderTextColor={'#DADADA'}
                    />
                    <TextInput
                    className="border border-[#322E33] rounded-xl w-10/12 pl-3 pt-2 h-60 align-top text-white"
                    placeholder="Digite a sua mensagem."
                    placeholderTextColor={'#DADADA'}
                    />
                    
                </View>

                <View style={[styles.bottomButton]}> 
                
                    <TouchableOpacity style={[styles.Button]}>
                    <Text style={[styles.textButton]}>Enviar mensagem</Text>
                    </TouchableOpacity>
                
                </View>
                
            </View>
           
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bottomButton:{
        height: 120,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
      },
      Button:{
        height: 40,
        width: 179,
        backgroundColor: 'rgb(8,180,92)',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 60  
      },
      textButton:{
        marginTop: '4%',
        fontSize: 17,
        color: 'rgb(255,255,255)',
      },
});