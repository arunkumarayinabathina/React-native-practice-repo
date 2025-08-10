import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  return (
    // Pressable props 
    // - onPressIn
    // - onPressOut
    // - onPress
    // - onLongPress
    // - onPressOut
    <View style={styles.container}>
      <Button
        title="Press"
        onPress={()=>{console.log("Hello welcome.")}}
        color="#E64F3E"
      />
      <Pressable onPress={()=>console.log("Image Pressed")}>
       <Image source={logoImage} style={{height:200,width:200}}/>
      </Pressable>
      <Pressable onPress={()=>console.log("Text Pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac elementum nisi, in pulvinar purus. Vestibulum varius at dui id tristique. Integer pellentesque est ac convallis ornare. Mauris placerat metus nec nunc scelerisque aliquet. In vitae porttitor libero. Ut fringilla faucibus sem, sit amet scelerisque tellus venenatis a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel ornare justo, sit amet fermentum ipsum. Mauris posuere lacus sed facilisis eleifend. Nulla vitae tellus eu felis venenatis vestibulum at ut velit. Vivamus vel velit placerat, egestas odio a, euismod arcu. Aliquam sollicitudin laoreet ultricies.
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#41DEF0',
    // alignItems:'center',
    // justifyContent:'center',
    padding:20
  }
})
