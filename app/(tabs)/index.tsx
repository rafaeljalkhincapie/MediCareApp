import PressEffect from "@/components/ui/PressEffect/pressEffect";
import { AuthContext } from "@/hooks/authContext";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import styles from "../../assets/css/loginStyle";
const dashboard=()=>{
    const authContext= useContext(AuthContext);
  return(
    <PressEffect onPress={authContext.logOut}>
          <View style={styles.btnlogin}>
            <Image source={require("../../assets/images/microsoft-logo.png")}
            style={styles.btnlogin_icon}
            />
            <Text style={{fontSize:20}}>Sign in with Microsoft</Text>
          </View>
        </PressEffect>
  );
}
export default dashboard;