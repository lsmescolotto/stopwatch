/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

function App(): React.JSX.Element {
  const [stopwatchValue, setStopwatchValue] = useState(0);
  const [stopwatch, setStopwatch] = useState<any>(null);

  const handleStartAndStopCount = () => {
    if (stopwatch === null) {
      setStopwatch(
        setInterval(() => {
          setStopwatchValue((state) => state + 0.1);
        }, 100),
      );
    } else {
      clearInterval(stopwatch);
      setStopwatch(null);
    }
  };

  const handleResetCount = () => {
    setStopwatchValue(0);
    setStopwatch(null);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./src/timer.png")} />
      <View style={styles.stopwatchBackground}>
        <Text style={styles.stopwatchCount}>{stopwatchValue.toFixed(1)}</Text>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleStartAndStopCount}>
          <Text style={styles.buttonText}>
            {stopwatch === null ? "Start" : "Stop"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleResetCount}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  img: {
    width: 340,
    height: 340,
  },
  stopwatchBackground: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -220,
  },
  stopwatchCount: {
    fontSize: 56,

    color: "#000",
  },
  buttonArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 120,
  },
  button: {
    borderRadius: 5,
    height: 50,
    width: 80,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 25,
  },
});

export default App;
