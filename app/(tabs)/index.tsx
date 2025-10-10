import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{margin:20}}>
      <View style={{margin:20, flexDirection:"row"}}>
        <Image 
          source={require("../../assets/images/logo-medicareapp.png")} alt="" 
          style={{}}
        /> 
      </View>
      <View style={{textAlign:"center"}}>
        <Text style={{color:"#3E3E3E", fontSize:20, textAlign:"center",fontWeight:"bold"}}>Login</Text>
        <Text style={{color:"#3E3E3E", fontSize:20, textAlign:"center"}}>Sign in to your account</Text>
      </View>
      <View style={{marginTop:50}}>
        <View>Sign in with Google</View>
        <View>Sign in with Microsoft</View>
      </View>
    </SafeAreaView>
  );
}
