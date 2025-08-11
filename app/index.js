import { useState } from "react";
import { ActivityIndicator, Button, Image, View } from "react-native";

const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  const [isLoading,setIsLoading] = useState(true); 

  return (
      <View style={{flex:1,backgroundColor:'lightblue'}}>
        <ActivityIndicator
          size={"large"}
          color={"red"}
          animating={isLoading}
        />
        <Image
          source={logoImage}
          style={{width:200,height:200}}
        />
        <Button
        title="Button control"
        onPress={()=>setIsLoading(!isLoading)}
        />
      </View>
  );
}
