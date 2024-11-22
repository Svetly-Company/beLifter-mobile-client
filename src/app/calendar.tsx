import { ArrowLeft, CaretLeft, Fire, Moon } from "phosphor-react-native";
import React, {useState} from 'react';
import { Text, View, ScrollView, TouchableHighlight, Image, ImageSourcePropType } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { TouchableOpacity } from "react-native-gesture-handler";
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Agos', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
};
LocaleConfig.defaultLocale = 'fr';


export default function TrainCalendar(){

    const [selected, setSelected] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const today1 = new Date();
    const tomorrow = new Date(today1);
    tomorrow.setDate(today1.getDate() - 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0]; 
   

    const [selectedDates, setSelectedDates] = useState<{
        [date: string]: { selected: boolean; selectedColor: string };
    }>({});

  
    const toggleDate = (date: string) => {
        setSelectedDates((prev) => {
        
        var i

        if (prev[date]) {
            const updatedDates = { ...prev };
            delete updatedDates[date];
            return updatedDates;
        }

        return {
            ...prev,
            [date]: { selected: true, selectedColor: '#00592E' },
        };
        });
    };

    const selectedDaysCount = Object.keys(selectedDates).length;

    const calculateUnselectedDays = () => {
        const selectedKeys = Object.keys(selectedDates).sort(); 
        if (selectedKeys.length === 0) return 0; 
    
        const latestSelectedDate = new Date(selectedKeys[selectedKeys.length - 1]);
        const today = new Date();
    
        
        const totalDays = Math.ceil((today.getTime() - latestSelectedDate.getTime()) / (1000 * 60 * 60 * 24));
        return totalDays > 0 ? totalDays : 0;
      };

      const unselectedDaysCount = calculateUnselectedDays();
      const total = unselectedDaysCount - 1;

    return(
      <View className="bg-[#0D0D0D]">
        <View className="align-center flex flex-row mt-11 ml-2"> 
          <CaretLeft size={30}  color="#00BF63"/>
          <View className="items-center justify-center w-96">
            <Text className="text-white text-xl font-ibmMedium">Calendário</Text>
          </View>
          
        </View>
        <View className="h-[38] bg-[#0D0D0D] mt-20 flex flex-row gap-10 items-center justify-center mb-5">
          <View className="rounded-2xl w-48 h-14 items-center justify-center flex flex-row gap-2 bg-white">
            <View>
              <Fire size={30} color="orange"/>
            </View>
            <View>
              <Text className="font-ibmMedium text-lg">{selectedDaysCount} dias</Text>
              <Text className="font-ibmMedium">Treinados</Text>
            </View>
            
          </View>

          <View className="rounded-2xl w-48 h-14 items-center justify-center flex flex-row gap-2 bg-white">
            <View>
              <Moon size={30} color="blue"/>
            </View>
            <View>
              <Text className="font-ibmMedium text-lg">{total} dias</Text>
              <Text className="font-ibmMedium">descanso</Text>
            </View>
            
          </View>
        </View>
        <CalendarList
        theme={{
          backgroundColor: '#0D0D0D',
          calendarBackground: 'black',
          textSectionTitleColor: '#ffffff',
          selectedDayBackgroundColor: '#000000',
          selectedDayTextColor: '#ffffff',
          dayTextColor: '#ffffff',
          textDisabledColor: '#252626',
          monthTextColor: '#ffffff',
        }}

        maxDate={tomorrowString}

        onDayPress={day => {
        toggleDate(day.dateString);
        }}

        pastScrollRange={4}
        futureScrollRange={3}
        scrollEnabled={true}
        showScrollIndicator={true}

         markedDates={{
          ...selectedDates,
          [today]: { selected: true, selectedColor: '#ffffff', selectedTextColor: 'black' }, 
        }}
        
        /> 
      </View>
    )
}