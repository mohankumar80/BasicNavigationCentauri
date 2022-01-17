import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Text, View, Button, StyleSheet} from 'react-native';
import { StackPropsList } from "../types";

type Props = NativeStackScreenProps<StackPropsList, 'Details'>;

export default function DetailsScreen({navigation}: Props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textSize}>This is the Details Screen</Text>
      <Button title="go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSize: {
    fontSize: 25,
  },
});
