import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";

const HomeScreen = () => {
  const [partialText, setPartialText] = useState("");
  const [completedText, setCompletedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const query = async (data) => {
    const API_TOKEN = "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";
    console.log("Authorization Header:", `Bearer ${API_TOKEN}`);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: data }),
        }
      );

      const result = await response.json();
      console.log("API Response:", result);
      return result[0]?.generated_text || "";
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };

  const generateText = async () => {
    try {
      setIsLoading(true);
      console.log("Generating text...");
      const generatedText = await query(partialText);
      console.log("Generated Text:", generatedText);
      setCompletedText(generatedText);
    } catch (error) {
      console.error("Error generating text:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearText = () => {
    setPartialText("");
    setCompletedText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>AI Text Generator</Text>
        <View style={styles.resultContainer}>
          {completedText !== "" && (
            <View style={styles.resultBox}>
              <Text style={styles.resultLabel}>Generated Text:</Text>
              <Text style={styles.generatedText}>{completedText}</Text>
            </View>
          )}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type your partial text here..."
          value={partialText}
          onChangeText={(text) => setPartialText(text)}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.generateButton}
            onPress={generateText}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Generate Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearText}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        {isLoading && <ActivityIndicator animating={true} color="#3498db" />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
