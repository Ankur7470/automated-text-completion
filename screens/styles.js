import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: "#FAF6F0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  generatedText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "#3498db",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    color: "#333333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  generateButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    margin: 10,
  },
  clearButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    margin: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },

  resultContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  resultBox: {
    // backgroundColor: "#3498db",
    borderWidth: 2,
    borderColor: "#3498db",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});
