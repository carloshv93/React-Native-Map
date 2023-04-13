import { StyleSheet, View, Text, Modal as RNModal } from "react-native";

const Modal = ({ animationType, transparent, visible }) => {
  return (
    <RNModal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>Modal</Text>
        </View>
      </View>
    </RNModal>
  );
};
export default Modal;

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
});
