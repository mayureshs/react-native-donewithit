import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppImageInput from "./AppImageInput";

const AppImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollview = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollview}
        horizontal={true}
        onContentSizeChange={() => {
          scrollview.current.scrollToEnd();
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default AppImageInputList;
