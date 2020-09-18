import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CraateRecord = () => {
    return (
        <>
        <Header />
        <Text style={styles.text}>Hello crate-record</Text>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
      color: '#FFF',
      fontSize: 50,
    }
  });

export default CraateRecord;