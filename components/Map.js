import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const Map = () => {
  return <MapView style={styles.map} />;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
