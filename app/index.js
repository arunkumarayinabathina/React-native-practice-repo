import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{color:'white'}}>
            Hello
        </Text>
         World
      </Text>
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
