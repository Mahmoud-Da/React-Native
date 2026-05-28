import React from "react";
import {
  Modal,
  View,
  StyleSheet,
} from "react-native";
import colors from "../config/colors";
import * as Progress from "react-native-progress";


function UploadScreen({
  progress = 0,
  visible = false,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          color={colors.primary}
          width={200}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadScreen;