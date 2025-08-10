import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Hello World!</Text>
      {/* <StatusBar/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  }
})
