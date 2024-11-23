import { View, Text, TouchableOpacity } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText, Notepad, Calendar} from "phosphor-react-native";
import { Link } from "expo-router";


interface boxModelParams {
  title: string;
  desc?: string;
  type: "dieta" | "atendimento" | "pendencias" | "agenda";
  bgColor?: boolean;
  urlRedirect?: string;
}


export function BoxModel({ title, desc, type = "atendimento", bgColor = false, urlRedirect }: boxModelParams) {
  return( 
      <View className={"flex-wrap " + (!bgColor ? 'bg-neutral-900' : 'bg-transparent') + " mt-4 py-6 px-6 rounded-3xl gap-2"}>
          <View className="flex-row justify-between items-center">
            <View className="bg-gray-100 p-2 rounded-2xl mr-2">
              {
                {
                  'agenda': <Calendar color="black" size={32} />,
                  'atendimento': <ChatCenteredDots color="black" size={32}/>,
                  'pendencias': <ChatCircleText color="black" size={32}/>,
                  'dieta': <Notepad weight="bold" color="black" size={32}/>,
                }[type]
              }
            </View>

            <View className="gap-1 flex-1">
              <Text className="font-ibmRegular text-white text-xl">{title}</Text>
              <Text className="font-regular font-thin text-base text-gray-300">{desc}</Text>
            </View>

            <View className="flex-row p-2 bg-gray-600 rounded-2xl">
              <TouchableOpacity>
                <Link href={urlRedirect || "../atendimento"}>
                  <CaretRight color="white" size={22}/>
                </Link>
              </TouchableOpacity> 
            </View>
          </View>
      </View>
  )
}
