import { FlatList, StyleSheet, Text, View } from "react-native";
import ThemeButton from "./componets/Button";
import Inputs from "./componets/Inputs";
import { useState } from "react";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C07F00"
  },
  bodyInner: {
    width: "90%",
    display: "flex",
    columnGap: 5,
    alignItems: "center",
    backgroundColor: "#4C3D3D",
    borderRadius: 10,
    paddingVertical: 10,

  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff"
  },
  list: { 
    fontSize: 16, 
    color: "#ffffff", 
    backgroundColor: "red",
    height: 50,
    textAlign: "center",
    marginVertical: 5,
    lineHeight: 50, 
  },
  container: {
    flex: 1,
    backgroundColor: "#9BABB8"
  },
  row: {
    flex: 1,
    margin: 20,
    backgroundColor: "#EEE3CB",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  column: {
    height: 100,
    width: "45%",
    marginVertical: 5,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#D7C0AE"
  },
});

const App = () => {
  // const [username, setUsername] = useState(null);
  // const [password, setPassword] = useState(null);
  // let __array = [
  //   { id: 1, name: "Bilal" },
  //   { id: 2, name: "Ahmed" },
  //   { id: 3, name: "Basit" },
  //   { id: 4, name: "Aman" },
  //   { id: 1, name: "Bilal" },
  //   { id: 2, name: "Ahmed" },
  //   { id: 3, name: "Basit" },
  //   { id: 4, name: "Aman" },
  //   { id: 1, name: "Bilal" },
  //   { id: 2, name: "Ahmed" },
  //   { id: 3, name: "Basit" },
  //   { id: 4, name: "Aman" },
  //   { id: 1, name: "Bilal" },
  //   { id: 2, name: "Ahmed" },
  //   { id: 3, name: "Basit" },
  //   { id: 4, name: "Aman" },
  // ];
  return (
    // <View style={styles.bodyView}>
    //   <View style={styles.bodyInner}>
    //     <Text style={styles.mainTitle}>Welcome to {username}</Text>
    //     <ThemeButton text="Funny You" color="#FFD95A" handle={() => { setUsername(null), setPassword(null) }} />
    //     <Inputs value={username} secure={false} handle={(e) => setUsername(e)} />
    //     <Inputs value={password} secure={true} handle={(e) => setPassword(e)} />
    //     <View style={{ flexDirection: "row" }}>
    //       <FlatList
    //         data={__array}
    //         renderItem={({ item }) => <Text style={{ fontSize: 16, color: "orange" }}>{item.name}</Text>}
    //         keyExtractor={item => item.id}
    //       />
    //     </View>
    //   </View>
    // </View>
    // <>
    //   {
    //     <ScrollView>
    //       {
    //         __array.map((e, i) => <Text key={i} style={styles.list}>{e.name}</Text>)
    //       }
    //     </ScrollView>
    //   }
    // </>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
            <Text>One</Text>
        </View>
        <View style={styles.column}>
            <Text>Two</Text>
        </View>
        <View style={styles.column}>
            <Text>Three</Text>
        </View>
        <View style={styles.column}>
            <Text>Four</Text>
        </View>
        <View style={styles.column}>
            <Text>Five</Text>
        </View>
        <View style={styles.column}>
            <Text>Six</Text>
        </View>
      </View>
    </View>
  );
}

export default App;