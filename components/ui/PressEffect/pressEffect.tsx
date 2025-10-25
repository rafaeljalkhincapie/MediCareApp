import React, { ReactNode } from 'react';
import { Animated, Pressable } from "react-native";

interface PressEffectProps {
  children: ReactNode;
  onPress?: () => void;
  scale?: number;
  bgColor?: string;
  pressedBg?: string;
  // style?: StyleProp<ViewStyle>;
};

export default function PressEffect({children, onPress,bgColor="transparent",pressedBg="transparent", scale=0.80}: PressEffectProps){
  // const scaleAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = new Animated.Value(1);
  const handlePressIn=()=>{
    Animated.spring(scaleAnim, {
      toValue: scale,
      useNativeDriver: true,
      speed: 30,
      bounciness: 5,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 5,
    }).start();
  };
  return(
        <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={({pressed}) => [{backgroundColor: pressed ? pressedBg : bgColor,}]}
        >
          <Animated.View style={[{transform: [{ scale: scaleAnim }]}]}>
            {children}
          </Animated.View>
        </Pressable>
    )
};
