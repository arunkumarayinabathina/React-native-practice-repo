import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={logoImage} style={{height:200,width:200}}/>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac elementum nisi, in pulvinar purus. Vestibulum varius at dui id tristique. Integer pellentesque est ac convallis ornare. Mauris placerat metus nec nunc scelerisque aliquet. In vitae porttitor libero. Ut fringilla faucibus sem, sit amet scelerisque tellus venenatis a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel ornare justo, sit amet fermentum ipsum. Mauris posuere lacus sed facilisis eleifend. Nulla vitae tellus eu felis venenatis vestibulum at ut velit. Vivamus vel velit placerat, egestas odio a, euismod arcu. Aliquam sollicitudin laoreet ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac elementum nisi, in pulvinar purus. Vestibulum varius at dui id tristique. Integer pellentesque est ac convallis ornare. Mauris placerat metus nec nunc scelerisque aliquet. In vitae porttitor libero. Ut fringilla faucibus sem, sit amet scelerisque tellus venenatis a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel ornare justo, sit amet fermentum ipsum. Mauris posuere lacus sed facilisis eleifend. Nulla vitae tellus eu felis venenatis vestibulum at ut velit. Vivamus vel velit placerat, egestas odio a, euismod arcu. Aliquam sollicitudin laoreet ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac elementum nisi, in pulvinar purus. Vestibulum varius at dui id tristique. Integer pellentesque est ac convallis ornare. Mauris placerat metus nec nunc scelerisque aliquet. In vitae porttitor libero. Ut fringilla faucibus sem, sit amet scelerisque tellus venenatis a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel ornare justo, sit amet fermentum ipsum. Mauris posuere lacus sed facilisis eleifend. Nulla vitae tellus eu felis venenatis vestibulum at ut velit. Vivamus vel velit placerat, egestas odio a, euismod arcu. Aliquam sollicitudin laoreet ultricies.
      </Text>
      <Image source={logoImage} style={{height:200,width:200}}/>
      </ScrollView>
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
