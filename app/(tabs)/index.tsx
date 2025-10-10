import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={{margin:20, flexDirection:"row"}}>
        <Image 
          source={require("../../assets/images/logo-medicareapp.png")} alt="" 
          style={{width:50, height:50}}
        />
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:50}}>Dosi</Text>
          <Text style={{fontSize:50}}>OnTime</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
