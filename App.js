import { StyleSheet, View } from "react-native";
import { Map, Modal } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <Modal animationType="slide" transparent={true} visible={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
