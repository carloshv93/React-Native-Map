import { StyleSheet, Button, View } from "react-native";

const Panel = ({ textRight, onPressRight, textLeft, onPressLeft }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title={textRight} onPress={onPressRight} />
    </View>
  );
};

export default Panel;

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#eee",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
