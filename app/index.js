import { useState } from "react";
import { StatusBar, View } from "react-native";

const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  const [isStatusVisible, setIsStatusVisible] = useState(false)
  return (
    <View style={{flex:1,backgroundColor:'orange'}}>
      {/* <StatusBar
          backgroundColor='blue'
          barStyle='light-content'
          hidden={isStatusVisible}
      />
      <Button
        title={isStatusVisible ? "show status bar" : "close status bar"}
        onPress={() => setIsStatusVisible(!isStatusVisible)}
      /> */}
      <StatusBar
        backgroundColor='red'
      />
    </View>
  );
}
