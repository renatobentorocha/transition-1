import React, {useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text as NativeText } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';
import { Transitioning, Transition, TransitioningView } from "react-native-reanimated";

const styles = StyleSheet.create({
  flexRow: {
    backgroundColor: "#ddd",
    flexDirection: "row", 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  flexColumn: {
    backgroundColor: "#ddd",
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  button: {
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    backgroundColor: "#f00", 
    height: 52, 
    alignItems: "center", 
    justifyContent: "center"
  },
  text: {
    color: "#ddd"
  }
});

const transition = <Transition.Change durationMs={400} interpolation={"easeInOut"}  />

export default () => {
  const [style, setStyle] = useState<{}>(styles["flexRow"]);
  const ref = useRef<TransitioningView>(null)

  return (
    <Transitioning.View  {...{transition, ref}}  style={[StyleSheet.absoluteFill, style ]}>
      <Svg height="33%" width="33%" >
        <Circle cx="50%" cy="50%" r="30%" fill="green" />
        <Text x="27%" y="52%" fill={styles.text.color}>Transition</Text>
      </Svg>
      <Svg height="33%" width="33%" >
        <Circle cx="50%" cy="50%" r="30%" fill="green" />
        <Text x="27%" y="52%" fill={styles.text.color}>Transition</Text>
      </Svg>
      <Svg height="33%" width="33%" >
        <Circle cx="50%" cy="50%" r="30%" fill="green" />
        <Text x="27%" y="52%" fill={styles.text.color}>Transition</Text>
      </Svg>
      <TouchableOpacity 
      activeOpacity={.8}
        style={styles.button} 
        onPress={() => {
          if (ref.current) {
            ref.current.animateNextTransition(); 
          }
          setStyle(style === styles.flexRow 
            ? styles.flexColumn 
            : styles.flexRow);
          } 
        }
      >
        <NativeText style={styles.text}>Change</NativeText>
      </TouchableOpacity>
    </Transitioning.View>
  );
  
}