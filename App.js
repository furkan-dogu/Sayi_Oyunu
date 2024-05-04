import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)

  const handleSendNumber = (sendedNumber) => {
    setUserNumber(sendedNumber);
    setGameIsOver(false)
  }

  const handleGameOver = () => {
    setGameIsOver(true);
  }

  let screen = <GameStartScreen onSendNumber={handleSendNumber} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
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
