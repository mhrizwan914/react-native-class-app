import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    Inputs: {
        borderWidth: 2,
        borderColor: "#ffffff",
        width: "90%",
        paddingHorizontal: 15
    }
})

const Inputs = (props) => {
    return (
        <TextInput
            placeholder="Full Name"
            value={props.value}
            onChangeText={props.handle}
            style={styles.Inputs}
            placeholderTextColor="#ffffff"
            // textContentType="password"
            // keyboardType="visible-password"
            secureTextEntry={props.secure}
        />
    );
}

export default Inputs;