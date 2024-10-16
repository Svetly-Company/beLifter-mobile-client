import { View } from "react-native"
import PieChart from "react-native-pie-chart"



export default function CircularChart(){

 const values = [ 110, 70, 65]

  return(
    <View>
      <PieChart
        widthAndHeight={250}
        series={values}
        coverRadius={.6}
        
        sliceColor={["#00BF63", "#FFC107", "#FF3D00"]}
      >

      </PieChart>
    </View>
  )
}