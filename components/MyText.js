import React from 'react';
import { Text, StyleSheet } from 'react-native';


export const MyText = (props) => {
    return(
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
    text: {
        color: '#888',
        fontSize: 24,
        margin: 5,
    }
  });