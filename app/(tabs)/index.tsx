import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={{margin:20}}>
        <Image 
          source={require("../../assets/images/Logo.png")} alt="" 
          style={{width:100, height:100}}
        />
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:20}}>Dosi</Text>
          <Text>OnTime</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
