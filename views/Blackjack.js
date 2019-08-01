import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Cards from './Cards'

export default class Blackjack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards,
      player1: [],
      player2: [],
      player3: [],
      player4: [],
      whoseTurnIsIt: [1, 2, 3, 4],
      handShown: false,
      values: [],
    }
  }

  componentDidMount() {
    this.handleStart()
  }

  handleStart = async () => {
    await this.shuffle()
    this.initialDeal()
  }

  shuffle = () => {
    const cards = [...this.state.cards]
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
    this.setState({ cards })
  }

  initialDeal = async () => {
    const cards = [...this.state.cards]
    let num = 1
    for (let i = 0; num <= 4; num++) {
      if (num <= 4) {
        let topCard = cards.splice(0, 2)
        let hand = [...topCard]
        this.setState({
          ['player' + num]: [...hand],
          cards
        })
      }
    }
  }

  showHand = () => {
    let hand = [...this.state.player1]
    let mappedHand = hand.map(card => {
      card.show = true
      return card
    })
    this.setState({
      player1: mappedHand,
      handShown: true
    })
  }

  hitMe = async () => {
    if (this.state.player1.length <= 5) {
      let hand1 = [...this.state.player1]
      let cards = [...this.state.cards]
      let [topCard] = cards.splice(0, 1)
      topCard.show = true
      hand1.push(topCard)
      await this.setState({ cards, player1: hand1 })
    }
    this.sum()
  }

  hold = async () => {
    let turns = [...this.state.whoseTurnIsIt]
    turns = turns.filter(turn => turn !== 1)
    await this.setState({ whoseTurnIsIt: turns })
    await this.sum()
  }

  sum = async () => {
    let value2 = [...this.state.player2].sort((a, b) => b.value - a.value).reduce((total, card) => total + card.value, 0)
    let value3 = [...this.state.player3].sort((a, b) => b.value - a.value).reduce((total, card) => total + card.value, 0)
    let value4 = [...this.state.player4].sort((a, b) => b.value - a.value).reduce((total, card) => total + card.value, 0)
    let hand2 = [...this.state.player2]
    let hand3 = [...this.state.player3]
    let hand4 = [...this.state.player4]
    let cards = [...this.state.cards]
    let turns = [...this.state.whoseTurnIsIt]
    let value1 = [...this.state.player1].sort((a, b) => b.value - a.value).reduce((total, card) => total + card.value, 0)
    if (value2 < 12) {
      let topCard = await cards.splice(0, 1)
      hand2.push(...topCard)
    } else {
      turns = await turns.filter(turn => { return turn !== 2 })
    }

    if (value3 < 12) {
      let topCard = await cards.splice(0, 1)
      hand3.push(...topCard)
    } else {
      turns = await turns.filter(turn => { return turn !== 3 })
    }

    if (value4 < 12) {
      let topCard = await cards.splice(0, 1)
      hand4.push(...topCard)
    } else {
      turns = await turns.filter(turn => { return turn !== 4 })
    }

    if (this.state.player1.length === 5) {
      turns = await turns.filter(turn => turn !== 1)
    }

    await this.setState({
      cards, player2: hand2, player3: hand3, player4: hand4, whoseTurnIsIt: turns,
      values: [value1, value2, value3, value4]
    })
    this.declareWinner()
  }

  declareWinner = async () => {
    if (this.state.whoseTurnIsIt.length === 0) {
      let twentyOne = this.state.values.filter((score, i) => score <= 21)
      let highest = Math.max(...twentyOne)
      let index = this.state.values.findIndex(score => score === highest)
      let hand2 = [...this.state.player2]
      let hand3 = [...this.state.player3]
      let hand4 = [...this.state.player4]

      let mappedHand2 = hand2.map(card => {
        card.show = true
        return card
      })

      let mappedHand3 = hand3.map(card => {
        card.show = true
        return card
      })

      let mappedHand4 = hand4.map(card => {
        card.show = true
        return card
      })

      await this.setState({
        player2: mappedHand2,
        player3: mappedHand3,
        player4: mappedHand4,
        whoseTurnIsIt: [1, 2, 3, 4],
        winnerDeclared: true
      })

      let alertCongratsArray = [
        `Congratulations on winning with ${highest}!`,
        `Must be cool being you with ${highest}!`,
        `Amazing game! Great score of ${highest}!`,
        `Here's to all the luck with ${highest}!`,
        `Your new lucky number is ${highest}`
      ]

      let selectedMsg = Math.floor(Math.random() * 5)

      let player = index+1
      if(player === 1){
        alert(alertCongratsArray[selectedMsg])
      } else {
        alert(`Sorry, Player ${player} wins with ${highest}!`)
      }
    }
  }

  reset = async () => {
    this.setState({
      cards: [...this.props.cards],
      player1: [],
      player2: [],
      player3: [],
      player4: [],
      whoseTurnIsIt: [1, 2, 3, 4],
      handShown: false,
      values: [],
      winnerDeclared: false
    })
    this.handleStart()
  }

  render() {
    const mappedPlayer1 = this.state.player1.map((card, i) => {
      if (i !== 0) {
        card.show = true
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(card.show){
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(i===0) {
        card.show = false
        return (
          <Cards key={card.card_id} card={card} />
        )
      }
    })

    const mappedPlayer2 = this.state.player2.map((card, i) => {
      if (i !== 0) {
        card.show = true
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(card.show){
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(i===0) {
        card.show = false
        return (
          <Cards key={card.card_id} card={card} />
        )
      }
    })
    const mappedPlayer3 = this.state.player3.map((card, i) => {
      if (i !== 0) {
        card.show = true
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(card.show){
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(i===0) {
        card.show = false
        return (
          <Cards key={card.card_id} card={card} />
        )
      }
    })
    const mappedPlayer4 = this.state.player4.map((card, i) => {
      if (i !== 0) {
        card.show = true
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(card.show){
        return (
          <Cards key={card.card_id} card={card} />
        )
      } else if(i===0) {
        card.show = false
        return (
          <Cards key={card.card_id} card={card} />
        )
      }
    })

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text>Black Jack</Text>
          <Button onPress={this.reset} title='Reset' />
          <Text>Player 1</Text>
          {mappedPlayer1}
          <Button onPress={this.showHand} disabled={this.state.handShown} title='View Hand' />
          <Button onPress={this.hitMe} disabled={this.state.winnerDeclared || this.state.whoseTurnIsIt.includes(num => num !== 1) || this.state.player1.length >= 5} title='Hit me!' />
          <Button onPress={this.hold} disabled={this.state.winnerDeclared || this.state.whoseTurnIsIt.includes(num => num !== 1) || this.state.player1.length >= 5} title='Hold!' />
          <Text>Player 2</Text>
          {mappedPlayer2}
          <Text>Player 3</Text>
          {mappedPlayer3}
          <Text>Player 4</Text>
          {mappedPlayer4}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'silver',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 40,
    marginBottom: 0,
    height: '100%'
  },
  scroll: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 200
  }
});
