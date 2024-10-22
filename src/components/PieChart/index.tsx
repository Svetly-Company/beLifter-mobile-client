import { View } from "react-native"
import PieChart from "react-native-pie-chart"

import { userStorage } from "../../storage/zustand/store"


interface CircularChartProps{
  apiValues: any[] 
}

export default function CircularChart({apiValues} : CircularChartProps){


 
  return(
    <View>
      <PieChart
        widthAndHeight={250}
        series={apiValues}
        coverRadius={.6}
        sliceColor={["#FFC107", "#FF3D00", "#00BF63"]}
      >

      </PieChart> 
    </View>
  )
}