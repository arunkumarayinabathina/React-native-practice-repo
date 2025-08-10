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
    <Modal style={{height:400,width:300}}
      visible={isModalVisible}
      onRequestClose={()=>setIsModalVisible(false)}
      animationType="slide" // fade,none,slide
      // presentationStyle="pageSheet"  //  pageSheet,formSheet  for ios works
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalBox}>
          <Text>Modal Content</Text>
          <Button title="Close" color="midnightblue"
          onPress={()=>setIsModalVisible(false)}
          />
        </View>
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
  },
  modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)', // dimmed background
  justifyContent: 'center',
  alignItems: 'center',
},
modalBox: {
  width: 300,
  height: 400,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20,
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
})
