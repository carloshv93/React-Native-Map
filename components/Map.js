import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const Map = ({ onLongPress, markers, showMarkers }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {showMarkers &&
        markers &&
        markers.length > 0 &&
        markers.map((marker) => (
          <Marker
            key={marker.name}
            coordinate={marker.coordinate}
            title={marker.name}
          />
        ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
  },
});
