import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'lightblue', height:200,width:200}}>
      </View>
      <View style={{backgroundColor:'lightgreen', height:200,width:200}}>
      </View>
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
