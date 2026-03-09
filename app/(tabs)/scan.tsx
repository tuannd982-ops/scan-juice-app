import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function Scan() {

  const router = useRouter();
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim,{
          toValue:260,
          duration:2000,
          useNativeDriver:true
        }),
        Animated.timing(scanAnim,{
          toValue:0,
          duration:2000,
          useNativeDriver:true
        })
      ])
    ).start();
  },[]);

  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity
        style={styles.back}
        onPress={()=>router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#5B6EF5"/>
      </TouchableOpacity>

      {/* Juice Image */}
      <Image
        source={require("../../assets/juice.png")}
        style={styles.image}
      />

      {/* Scan Frame */}
      <View style={styles.scanFrame}>

        <Animated.View
          style={[
            styles.scanLine,
            { transform:[{translateY:scanAnim}] }
          ]}
        />

        <View style={styles.cornerTL}/>
        <View style={styles.cornerTR}/>
        <View style={styles.cornerBL}/>
        <View style={styles.cornerBR}/>

      </View>

      {/* Product Card */}
      <View style={styles.card}>

        <Image
          source={require("../../assets/juice.png")}
          style={styles.thumb}
        />

        <View style={{flex:1}}>
          <Text style={{color:"#999"}}>Lauren's</Text>
          <Text style={styles.product}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.plus}>
          <Ionicons name="add" size={24} color="white"/>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#D8C9B5",
    alignItems:"center",
    justifyContent:"center"
  },

  back:{
    position:"absolute",
    top:60,
    left:20,
    backgroundColor:"#F2F2F2",
    padding:10,
    borderRadius:12
  },

  /* PHÓNG TO ẢNH ĐỂ CHAI KHÔNG BỊ NHỎ */
  image:{
    width: width * 1.3,
    height: height * 0.75,
    resizeMode:"contain"
  },

  /* KHUNG SCAN */
  scanFrame:{
    position:"absolute",
    width: width * 0.85,
    height: height * 0.45
  },

  scanLine:{
    position:"absolute",
    width:"100%",
    height:2,
    backgroundColor:"#5B6EF5",
    opacity:0.7
  },

  cornerTL:{
    position:"absolute",
    top:0,
    left:0,
    width:50,
    height:50,
    borderTopWidth:4,
    borderLeftWidth:4,
    borderColor:"white",
    borderTopLeftRadius:20
  },

  cornerTR:{
    position:"absolute",
    top:0,
    right:0,
    width:50,
    height:50,
    borderTopWidth:4,
    borderRightWidth:4,
    borderColor:"white",
    borderTopRightRadius:20
  },

  cornerBL:{
    position:"absolute",
    bottom:0,
    left:0,
    width:50,
    height:50,
    borderBottomWidth:4,
    borderLeftWidth:4,
    borderColor:"white",
    borderBottomLeftRadius:20
  },

  cornerBR:{
    position:"absolute",
    bottom:0,
    right:0,
    width:50,
    height:50,
    borderBottomWidth:4,
    borderRightWidth:4,
    borderColor:"white",
    borderBottomRightRadius:20
  },

  card:{
    position:"absolute",
    bottom:40,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    width:"85%",
    padding:16,
    borderRadius:22,

    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:12,
    shadowOffset:{width:0,height:6},
    elevation:6
  },

  thumb:{
    width:40,
    height:65,
    marginRight:12,
    resizeMode:"contain"
  },

  product:{
    fontSize:18,
    fontWeight:"bold"
  },

  plus:{
    backgroundColor:"#5B6EF5",
    padding:12,
    borderRadius:14
  }

});