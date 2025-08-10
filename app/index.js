import { Button, StyleSheet, View } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Button 
      title="Press" 
      onPress={()=>console.log("Button pressed")} color="midnightblue"
      disabled
      />
      <View style={{marginTop:20,marginBottom:20}}> 
      <Button style={{margin:30}}
      title="Press" 
      onPress={()=>console.log("Button pressed")} color="midnightblue"
      disabled
      />
      </View>
      <Button
      title="Submit"
      onPress={()=>{console.log('U Clicked submit button')}}
      color="violet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'plum',
    // alignItems:'center',
    // justifyContent:'center',
    padding:20
  }
})
