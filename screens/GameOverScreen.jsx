import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title title="Oyun Tamamlandı" />
      <View style={styles.imageView}>
        <Image source={require("../assets/success.jpg")} style={styles.image} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}>{roundsNumber}</Text> denemeyle
        <Text style={styles.countAndNumber}> {userNumber}</Text> sayısını buldun
      </Text>
      <CustomButton title="Yeni Oyuna Başla" onPress={onStartNewGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    borderRadius: 175,
    borderWidth: 3,
    borderColor: "red",
    margin: 30
  },
  image: {
    width: "100%",
    height: "100%",
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  countAndNumber: {
    color: "red"
  }
})