import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import ComputerGuess from "../components/ComputerGuess";

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCounts, setGuessCounts] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      7;
      onGameOver(guessCounts.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "upper" && currentGuess > userNumber)
    ) {
      Alert.alert("Hatalı İşlem!", "Lütfen hatalı işlem yapmaya çalışmayın.", [
        { text: "Tamam", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }

    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCounts((prevGuess) => [newRandomNumber, ...prevGuess]);
  };

  return (
    <View style={styles.container}>
      <Title title="Bilgisayar Tahmini" />
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı üstünde mi?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton
            title={<AntDesign name="minus" size={24} color="white" />}
            onPress={handleNextGuess.bind(this, "lower")}
          />
          <CustomButton
            title={<AntDesign name="plus" size={24} color="white" />}
            onPress={handleNextGuess.bind(this, "upper")}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessCounts}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <ComputerGuess
              roundNumber={guessCounts.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 25,
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 15,
  },
  listContainer: {
    flex: 1,
    marginTop: 10
  }
});
