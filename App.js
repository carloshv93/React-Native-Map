import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Dialog, Map, Modal, Panel, List, MarkerList } from "./components";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMarkersListModalOpen, setIsMarkersListOpen] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [tempMarker, setTempMarker] = useState({});
  const [displayMarkers, setDisplayMarkers] = useState(true);

  const addMarker = (markerName) => {
    tempMarker
      ? setMarkers([...markers, { name: markerName, coordinate: tempMarker }])
      : alert("No location selected");
    setTempMarker(null);
  };

  const handleLongPress = ({ nativeEvent: coordinate }) => {
    setIsDialogOpen(true);
    setTempMarker(coordinate.coordinate);
  };

  const handleEndEditing = ({ nativeEvent: { text } }) => {
    if (typeof text === "string") {
      const markerName = text.trim();
      markerName !== ""
        ? addMarker(markerName)
        : alert("Marker name cannot be empty");
      setIsDialogOpen(false);
    }
  };

  const handleShowHidePress = () => {
    setDisplayMarkers(!displayMarkers);
  };

  const handleListPress = () => {
    setIsMarkersListOpen(true);
  };

  const handleListClose = () => {
    setIsMarkersListOpen(false);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        markers={markers}
        showMarkers={displayMarkers}
      />
      <Panel
        textLeft={"All markers"}
        textRight={displayMarkers ? "Hide markers" : "Show markers"}
        onPressRight={handleShowHidePress}
        onPressLeft={handleListPress}
      />
      <Dialog
        title="Name"
        placeholder="Marker name"
        onEndEditing={handleEndEditing}
        open={isDialogOpen}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMarkersListModalOpen}
      >
        <MarkerList markers={markers} />
        <Button title="Close" onPress={handleListClose} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
