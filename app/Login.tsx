// import PressEffect from "@/componentes/PressEffect/pressEffect";
import PressEffect from "@/components/ui/PressEffect/pressEffect";
import { AuthContext } from "@/hooks/authContext";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/css/loginStyle";
export default function Login() {
  const authContext= useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image 
          source={require("../assets/images/logo-medicareapp.png")} alt="Logo DosiOnTime"
        /> 
      </View>
      <View style={{marginBottom:40}}>
        <Text style={styles.txtpresentation}>Login</Text>
        <Text style={[styles.txtpresentation, styles.text20]}>Sign in to your account</Text>
      </View>
      <View style={styles.bodycontainer}>
        <PressEffect onPress={authContext.logIn} >
          <View style={styles.btnlogin}>
            <Image source={require("../assets/images/google-icono.png")}
            style={styles.btnlogin_icon}
            />
            <Text style={{fontSize:20}}>Sign in with Google</Text>
          </View>
          
        </PressEffect>
        <PressEffect onPress={authContext.logIn}>
          <View style={styles.btnlogin}>
            <Image source={require("../assets/images/microsoft-logo.png")}
            style={styles.btnlogin_icon}
            />
            <Text style={{fontSize:20}}>Sign in with Microsoft</Text>
          </View>
        </PressEffect>
        <View style={{display:"flex",flexDirection: "row", padding:30, gap: 15}}>
          <Text style={styles.text15}>Don't have an account?</Text>
          <PressEffect><Text style={[styles.text15,{paddingHorizontal:5, color:"#24B4A2"}]}>Sign up</Text></PressEffect>
        </View>
      </View>
    </SafeAreaView>
  );
}
