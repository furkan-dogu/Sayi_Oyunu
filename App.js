import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState(null) //! null yapmayı unutma

  const handleSendedNumber = (sendedNumber) => {
    setUserNumber(sendedNumber);
  }

  let screen = <GameStartScreen onSendNumber={handleSendedNumber} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        source={require("./assets/back.jpg")}
        style={styles.container}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.2,
  },
});
