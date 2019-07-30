import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Blackjack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      player1: [],
      player2: [],
      player3: [],
      player4: []
    }
  }

  componentDidMount() {
    this.handleStart()
  }

  handleStart = async () => {
    await this.shuffle()
    this.initialDeal()
  }

  shuffle = async () => {
    const cards = [...this.props.cards]
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
    // console.log('shuffled cards',cards)
    this.setState({ cards })
  }

  initialDeal = async () => {
    const cards = [...this.state.cards]
    // console.log('cards',cards)
    let num = 1
    for (let i = 0; num <= 4; num++) {
      if (num <= 4) {
        let topCard = cards.splice(0, 2)
        // console.log(11111,topCard)
        let hand = [...topCard]
        // console.log(22222,hand)
        this.setState({
          ['player' + num]: [...hand]
        })
      }
    }
    // console.log({1:this.state.player1,2:this.state.player2,3:this.state.player3,4:this.state.player4})
  }



  render() {
    console.log({ 1: this.state.player1, 2: this.state.player2, 3: this.state.player3, 4: this.state.player4 })
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
