import { Image, Text, View } from "react-native";
export default function Home() {
  return (
    <View>
        <Text>DosiOnTime</Text>
        <Image
            source={require('../../assets/images/logo-medicareapp.png')}
        />
    </View>
  );
}