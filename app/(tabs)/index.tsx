import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Home() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={{uri:"https://i.pravatar.cc/100"}}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>

      {/* Cards */}
      <View style={styles.grid}>

        <TouchableOpacity
          style={styles.card}
          onPress={()=>router.push("/scan")}
        >
          <Ionicons name="scan" size={30} color="#6C63FF" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <MaterialIcons name="warning" size={30} color="#FF8C42" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="checkmark-circle" size={30} color="#2EC4B6" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calendar" size={30} color="#4CC9F0" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F5F5F5",
    padding:20
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:40
  },

  hello:{
    fontSize:26,
    fontWeight:"bold"
  },

  name:{
    color:"gray",
    marginTop:4
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:25
  },

  title:{
    marginTop:30,
    fontSize:18,
    fontWeight:"bold"
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginTop:20
  },

  card:{
    width:"47%",
    height:150,
    backgroundColor:"#EAEAF2",
    borderRadius:20,
    padding:20,
    marginBottom:15,
    justifyContent:"center"
  },

  cardTitle:{
    fontSize:16,
    fontWeight:"bold",
    marginTop:10
  },

  cardSub:{
    color:"gray",
    marginTop:4
  }

});