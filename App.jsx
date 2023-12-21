import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Geolocation from '@react-native-community/geolocation'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'blue'} barStyle={"auto"} />
            <Text>App</Text>
        </SafeAreaView>

    )
}

export default App

const styles = StyleSheet.create({})