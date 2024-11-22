import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, ImageSourcePropType } from "react-native";
import { CaretLeft, UploadSimple, DotsThree, CaretDown, Fire, Footprints, Gauge, CalendarBlank, TrendUp, Barbell, PersonSimple } from "phosphor-react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { userStorage } from "../../storage/zustand/store";
import { Post } from "../../components/Post";

interface PostObject { 
  id: number; 
  content: string; 
  mediaUrl: ImageSourcePropType 
}

interface StatisticType {
  label: string;
  value: string;
  Icon: React.ReactNode;
}

interface PanelItemType {
  label: string;
  Icon: React.ReactNode;
}

const statisticsData: StatisticType[] = [
  { label: "Distância", value: "20km", Icon: <Gauge size={32} color="#00BF63" /> },
  { label: "Passos", value: "20km", Icon: <Footprints size={32} color="#00BF63" /> },
  { label: "Kcal", value: "20km", Icon: <Fire size={32} color="#00BF63" /> }
];

const panelItemsData: PanelItemType[] = [
  { label: "Estatísticas", Icon: <TrendUp size={20} color="#00BF63" /> },
  { label: "Exercícios", Icon: <Barbell size={20} color="#00BF63" /> },
  { label: "Medições", Icon: <PersonSimple size={20} color="#00BF63" /> },
  { label: "Calendários", Icon: <CalendarBlank size={20} color="#00BF63" /> }
];

export default function Profile() {
  const user = userStorage((state) => state.user);
  const [posts, setPosts] = useState<PostObject[]>([]);

  const { data: userPost, refetch } = useQuery('posts/me', async () => {
    const response = await axios.get('https://belifter-server.onrender.com/profile/me', {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    return response.data.posts;
  });

  useEffect(() => {
    if (userPost) {
      setPosts(userPost);
    }
  }, [userPost]);

  const renderStatistic = (stat: StatisticType) => (
    <View className="w-2/6 items-center py-4">
      {stat.Icon}
      <Text className="text-white font-ibmRegular">{stat.label}</Text>
      <Text className="text-white font-ibmRegular">{stat.value}</Text>
    </View>
  );

  const renderPanelItem = (item: PanelItemType) => (
    <View className="bg-neutral-900 w-5/12 h-14 gap-2 flex-row items-center justify-center rounded-2xl">
      {item.Icon}
      <Text className="font-ibmRegular text-base text-white py-4">{item.label}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      <View className="h-96 rounded-b-3xl flex flex-col bg-neutral-900">
        <View className="h-12"></View>

        {/* Header with centered text and icons */}
        <View className="flex h-min flex-row mt-3 items-center justify-between px-4">
          <TouchableOpacity onPress={() => console.log("Back pressed")}>
            <CaretLeft size={32} color="#00BF63" />
          </TouchableOpacity>

          <View className="flex flex-row gap-8 items-center">
            <Text className="font-ibmMedium text-xl text-white capitalize">{user.name}</Text>
            <View className="flex-row gap-3">
              <UploadSimple size={28} color="#00BF63" />
              <DotsThree size={28} color="#00BF63" />
            </View>
          </View>
        </View>

        {/* Profile Details Section */}
        <View className="flex mt-3 gap-3 mx-8">
        <View className="flex w-full flex-row justify-between items-center">
          <Image source={require('../../assets/moca.jpg')} className="w-24 h-24 rounded-full mr-5" />
          <View className="flex flex-row gap-5 py-4">
            <View className="flex gap-2 items-center">
              <Text className="font-ibmMedium text-white font-extralight">Treinamentos</Text>
              <Text className="font-ibmMedium text-white">130</Text>
            </View>
            <View className="flex gap-2 items-center">
              <Text className="font-ibmMedium text-white font-extralight">Seguidores</Text>
              <Text className="font-ibmMedium text-white">2K</Text>
            </View>
            <View className="flex gap-2 items-center">
              <Text className="font-ibmMedium text-white font-extralight">Seguindo</Text>
              <Text className="font-ibmMedium text-white">200</Text>
            </View>
          </View>
        </View>

        {/* User's Name and Bio */}
        <View className="ml-0 flex items-start gap-2">
          <Text className="font-ibmMedium text-lg text-white">{user.name}</Text>
          <Text className="font-ibmRegular text-lg text-white">Em briga de saci, todo chute é voadora! 🤞✌💋🌹</Text>
        </View>

        {/* Edit Profile Button */}
        <View className="flex items-center mt-5">
          <TouchableOpacity
            style={{
              backgroundColor: "#00BF63",
              height: 46,
              width: 380,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40
            }}
          >
            <Text className="text-white">Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      </View>

      <ScrollView className="bg-black flex-1">
      <View className="flex flex-row justify-between mx-8">
        <Text className="text-white text-xl font-ibmMedium py-4">Estatísticas</Text>
        <View className="flex flex-row py-4 gap-3 items-center">
          <Text className="text-white text-xl font-ibmMedium">Mês</Text>
          <CaretDown size={32} color="#00BF63" />
        </View>
      </View>

        <View className="items-center h-28">
          <View className="bg-neutral-900 flex flex-1 flex-row rounded-2xl w-5/6">
            {statisticsData.map(renderStatistic)}
          </View>
        </View>

        <View className="gap-4">
          <Text className="ml-10 mt-3 text-white text-xl font-ibmMedium">Painel</Text>
          <View className="flex gap-5 items-center">
            <View className="flex flex-row gap-5">
              {panelItemsData.slice(0, 2).map(renderPanelItem)}
            </View>
            <View className="flex flex-row gap-5">
              {panelItemsData.slice(2).map(renderPanelItem)}
            </View>
          </View>
        </View>

        <View className="gap-4">
          <Text className="ml-10 mt-3 text-white text-xl font-ibmMedium">Postagens</Text>
          <FlatList
          data={posts}
          renderItem={({ item }) => <Post image={item.mediaUrl} content={item.content} id={item.id} author={user.name} refetch={refetch} />}
          keyExtractor={item => item.id.toString()}
          style={{ paddingBottom: 100 }}
          />
        </View>

        
      </ScrollView>
    </View>
  );
}
