import { View, StyleSheet } from "react-native";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";

const Dialog = ({ title, placeholder, onEndEditing, open }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View style={styles.container}>
        <TextInput
          label={title}
          placeholder={placeholder}
          onEndEditing={onEndEditing}
        />
      </View>
    </Modal>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
