import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    buttonView: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#B04759",
        flex: 1,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center"
    }
});

const ThemeButton = (props) => {
    const [data, setData] = useState("Login");
    const handle = () => {
        setData("Signup");
    }
    return (
        <>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly"
            }}>
                {/* <Button style={{flex: 3}} title={data} color="#2d2d2d" onPress={handle} /> */}
                <Pressable style={styles.buttonView} onPress={handle}>
                    <Text style={styles.buttonText}>{data}</Text>
                </Pressable>
                {/* <Button style={{flex: 3}} title={props.text} color={props.color} onPress={props.handle} /> */}
            </View>
        </>
    );
}

export default ThemeButton;