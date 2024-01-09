import { StyleSheet, Text, View, SafeAreaView, StatusBar, useColorScheme, Switch } from 'react-native'
import React, { useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'

const App = () => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'blue'} barStyle={"auto"} />
            <Text style={{ color: isDarkMode ? styles.whiteText : styles.darKText }}>App</Text>
        </SafeAreaView>

    )
}

export default App

const styles = StyleSheet.create({
    whiteText: { color: "white", fontWeight: "bold" },
    darKText: { color: "black", fontWeight: "bold" }
})