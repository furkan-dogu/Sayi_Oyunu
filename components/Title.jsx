import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Title({ title }) {
    return (
        <Text style={styles.title}>{title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: "red",
        textAlign: "center",
        padding: 15,
        marginBottom: 20,
        borderRadius: 20,
        color: "white",
        fontSize: 25
    },
});
