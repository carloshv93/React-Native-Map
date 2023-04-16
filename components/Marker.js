import { View, Text, StyleSheet } from "react-native";

const Marker = ({ marker }) => {
  return (
    <View style={styles.container}>
      <Text>{marker.name}</Text>
    </View>
  );
};

export default Marker;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
