import { Text, TextInput as Input, StyleSheet } from "react-native";

const TextInput = ({ label, placeholder, onEndEditing }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
  },
});
