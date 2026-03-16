import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Payment() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/success")}
      >
        <Text style={styles.text}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center"},
  title:{fontSize:28,fontWeight:"bold"},
  button:{marginTop:30,backgroundColor:"#2ecc71",padding:15,borderRadius:10},
  text:{color:"#fff"}
});