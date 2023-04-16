import { StyleSheet, FlatList, View, Text, Dimensions } from "react-native";

const List = ({ items, renderItem }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>No markers yet</Text>
            </View>
          );
        }}
        renderItem={renderItem}
      />
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("window").width - 125,
    height: Dimensions.get("window").height / 2,
  },
});
