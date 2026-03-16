import { View, Text, StyleSheet } from "react-native";

export default function Success() {

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.title}>Payment Success</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center"},
  icon:{fontSize:80},
  title:{fontSize:24,fontWeight:"bold",marginTop:20}
});