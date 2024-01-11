import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated, ImageBackground } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const FloatingButton = () => {

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <ImageBackground
      source={require('../assets/bg.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}>
        <Animated.View style={[styles.circle, { bottom: icon_1 }]}>
          <TouchableOpacity>
            <FontAwesome name="cloud-upload" size={25} color="#FFFF" />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2 }]}>
          <TouchableOpacity>
            <FontAwesome name="print" size={25} color="#FFFF" />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.circle, { right: icon_3 }]}>
          <TouchableOpacity>
            <FontAwesome name="share-alt" size={25} color="#FFFF" />
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => {
            pop === false ? popIn() : popOut();
          }}
        >
          <FontAwesome name="plus" size={25} color="#FFFF" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#f52d56',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
