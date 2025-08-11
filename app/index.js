import { useState } from "react";
import { Alert, Button, View } from "react-native";

const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  const [isLoading,setIsLoading] = useState(true); 

  return (
      <View style={{flex:1,backgroundColor:'lightblue'}}>
        <Button
          title="alert"
          onPress={()=>Alert.alert("Invalid data")}
        />
        <Button
          title="alert2"
          onPress={()=>Alert.alert("Invalid data","DOB incorrect")}
        />
        <Button
          title="alert3"
          onPress={()=>Alert.alert("Invalid data","DOB incorrect",[
            {
              text:"cancel",
              onPress:()=>console.log("Cancel Pressed")
            },
            {
              text:"submit",
              onPress:()=>console.log("Submit Pressed")
            },
            {
              text:"open",
              onPress:()=>console.log("Open Pressed")
            },
          ])}
        />
      </View>
  );
}
