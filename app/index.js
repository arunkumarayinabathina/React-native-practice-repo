import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png")
export default function Index() {
  const [isModalVisible,setIsModalVisible] = useState(false);
  return (
   <View style={styles.container}>
    <Button
      title="Click me"
      onPress={()=>setIsModalVisible(true)}
      color="#E64F3E"
    />
    <Modal 
      visible={isModalVisible}
      onRequestClose={()=>setIsModalVisible(false)}
      animationType="slide" // fade,none,slide
      // presentationStyle="pageSheet"  //  pageSheet,formSheet  for ios works
    >
      <View style={styles.container1}>
          <Text>Modal Content</Text>
          <Button title="Close" color="midnightblue"
          onPress={()=>setIsModalVisible(false)}
          />
      </View>
    </Modal>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#41DEF0',
    // alignItems:'center',
    // justifyContent:'center',
  },
  container1:{
    flex:1,
    backgroundColor:'green',
  }
})
