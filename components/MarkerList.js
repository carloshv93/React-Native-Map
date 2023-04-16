import { View, StyleSheet } from "react-native";
import Marker from "../components/Marker";
import List from "../components/List";

const MarkerList = ({ markers, onMarkerClick }) => {
  return (
    <List
      style={styles.container}
      items={markers}
      renderItem={({ item }) => {
        return (
          <View style={styles.item} onPress={onMarkerClick}>
            <Marker marker={item} onPress={() => onMarkerClick(item)} />
          </View>
        );
      }}
    />
  );
};

export default MarkerList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
