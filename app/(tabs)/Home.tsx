import { Button, Image, Text, View } from "react-native";
export default function Home() {
  return (
    <View>

        <Text>DosiOnTime</Text>
        <Image
            source={require('../../assets/images/logo-medicareapp.png')}
            style={{ width: 200, height: 200 }}
        />
        <Text>egwthwrh rrthwtrhw</Text>
        <Text>rtwrthrthwegeg  sthhwrthwrtb   wrthgwthwth
        </Text>
        <Button
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
         />
    </View>

  );
}