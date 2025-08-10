import { ImageBackground, StyleSheet, Text, View } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Image source={logoImage} style={{height:200,width:200}}/>
      <Image source={{uri:"https://picsum.photos/300"}} style={{height:200,width:200}}/> */}

      <ImageBackground source={logoImage} style={{flex:1}}>
          <Text>Image Text</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'plum',
    // alignItems:'center',
    // justifyContent:'center'
  }
})
