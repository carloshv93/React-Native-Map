import { StyleSheet, View, Modal, Text } from "react-native";
import { Map } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text>Modal</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
