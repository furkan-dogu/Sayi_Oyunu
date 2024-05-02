import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})