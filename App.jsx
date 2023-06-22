import { StyleSheet, Text, View } from "react-native";
import ThemeButton from "./componets/Button";
import Inputs from "./componets/Inputs";
import { useState } from "react";

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
  }
});

const App = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.bodyView}>
      <View style={styles.bodyInner}>
        <Text style={styles.mainTitle}>Welcome to {username}</Text>
        <ThemeButton text="Funny You" color="#FFD95A" handle={() => {setUsername(null), setPassword(null)}} />
        <ThemeButton text="Funny You" color="#FFD95A" handle={() => {setUsername(null), setPassword(null)}} />
        <ThemeButton text="Funny You" color="#FFD95A" handle={() => {setUsername(null), setPassword(null)}} />
        <Inputs value={username} secure={false} handle={(e) => setUsername(e)} />
        <Inputs value={password} secure={true} handle={(e) => setPassword(e)} />
      </View>
    </View>
  );
}

export default App;