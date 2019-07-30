import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cards from './Cards'

export default class Blackjack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView contentContainerStyle={styles.scroll}> */}
        <Text>Black Jack</Text>
        {/* </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 40,
    // marginBottom: 0
  },
  scroll: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
