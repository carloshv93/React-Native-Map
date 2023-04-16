import { StyleSheet, View, Modal as RNModal } from "react-native";

const Modal = ({ animationType, transparent, visible, children }) => {
  return (
    <RNModal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
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
    minWidth: "80%",
    maxWidth: "90%",
    minHeight: "15%",
    maxHeight: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
});
