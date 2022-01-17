import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, Button, StyleSheet } from "react-native";
import { StackPropsList } from "../types";

type Props = NativeStackScreenProps<StackPropsList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>This is Home Screen</Text>
        <Button
          title="Go To Details"
          onPress={() =>
            navigation.navigate('Details')
          }
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
  }
})