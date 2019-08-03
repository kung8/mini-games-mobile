import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Cards from './Cards'
import Toast, { DURATION } from 'react-native-easy-toast'

export default class War extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards,
      player1: [],
      player2: [],
      card1: [],
      card2: []
    }
  }

  componentDidMount() {
    this.handleStart()
  }

  handleStart = async () => {
    await this.shuffle()
    this.splitCards()
  }

  shuffle = async () => {
    const cards = [...this.state.cards]
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
    await this.setState({ cards })
  }

  splitCards = async () => {
    let cards = [...this.state.cards]
    let player1 = cards.slice(0, 26)
    let player2 = cards.slice(26)
    await this.setState({ player1, player2 })
  }

  showCards = async () => {
    let player1 = [...this.state.player1]
    let player2 = [...this.state.player2]
    let card1 = player1.splice(0, 1)
    card1[0].show = true
    let card2 = player2.splice(0, 1)
    card2[0].show = true
    await this.setState({ card1, card2, player1, player2, inWar: true })

    let time
    if (card1[0].value < card2[0].value || card2[0].value < card1[0].value) {
      time = 1000
    } else if (card2[0].value === card1[0].value) {
      time = 1000
    }

    setTimeout(() => this.challenge(), time);
  }

  challenge = async () => {
    let [card1] = [...this.state.card1]
    let [card2] = [...this.state.card2]
    let player1 = [...this.state.player1]
    let player2 = [...this.state.player2]

    if (card1.value < card2.value) {
      player2.push(card2, card1)
      this.refs.bottom.show(`${card2.name} beat ${card1.name}`)
      this.setState({ player1, player2, card1: [], card2: [], inWar: false })
    } else if (card2.value < card1.value) {
      player1.push(card1, card2)
      this.refs.top.show(`${card1.name} beat ${card2.name}`)
      this.setState({ player1, player2, card1: [], card2: [], inWar: false })
    } else if (card1.value === card2.value) {
      let cards = [card1, card2]
      this.declareWar(cards)
    }

    if (this.state.player1.length === 0 || this.state.player2.length === 0) {
      this.reset()
    }

  }

  declareWar = async (cards) => {
    let player1 = [...this.state.player1]
    let player2 = [...this.state.player2]
    let war1 = player1.splice(0, 4)
    let war2 = player2.splice(0, 4)

    if (player1.length >= 4 && player2.length >= 4) {
      war1 = war1.map(card => {
        card.show = true;
        return card
      })

      war2 = war2.map(card => {
        card.show = true;
        return card
      })

      this.refs.declareWar.show('I')
      this.setState({ card1: [war1[0]], card2: [war2[0]], inWar: true })

      setTimeout(async () => {
        if (war1[3].value < war2[3].value) {
          await player2.push(...war1, ...war2, ...cards)
          this.refs.bottom.show('Player 2 won the battle')
        } else if (war2[3].value < war1[3].value) {
          await player1.push(...war2, ...war1, ...cards)
          this.refs.top.show('Player 1 won the battle')
        } else if (war2[3].value === war1[3].value) {
          await this.setState({player1,player2})
          let addCards = [...war1, ...war2, ...cards]
          await this.declareWar(addCards)
        }
        await this.setState({ card1: [], card2: [], player1, player2, inWar: false })
      }, 8000);

      setTimeout(async() => {
        await this.refs.declareWar.show('WAR!')
        this.setState({ card1: [war1[3]], card2: [war2[3]] })
      }, 6000);

      setTimeout(async() => {
        await this.refs.declareWar.show('CLARE')
        this.setState({ card1: [war1[2]], card2: [war2[2]] })
      }, 4000);

      setTimeout(async() => {
        await this.refs.declareWar.show('DE-')
        this.setState({ card1: [war1[1]], card2: [war2[1]] })
      }, 2000);
    } else {
      this.reset()
    }
  }

  reset = async() => {
    setTimeout(async () => {
      await this.setState({ player1: [], player2: [] ,flagWaving1:false,flagWaving2:false})
      this.handleStart()
    }, 3000)

    if (this.state.player2.length === 0) {
      // this.refs.bottom.show('Player 2 loss the war')
      await this.setState({ card1:[],card2:[],flagWaving2: true })
      //figure out how to do a white flag 
      this.refs.top.show('Player 1 won the war')
    } else if (this.state.player1.length === 0) {
      this.refs.bottom.show('Player 2 won the war')
      // this.refs.top.show('Player 1 loss the war')
      await this.setState({  card1:[],card2:[],flagWaving1: true })
      //figure out how to do a white flag 
    }


  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>

          <View style={{ position: 'absolute', left: 100, top: -190, backgroundColor: 'blue', borderRadius: 16, display: 'flex', border: 'solid black 1px', margin: 5, height: 250, width: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 100, color: 'white' }}>KU</Text>
            <Text style={{ position: 'absolute', bottom: 5, fontSize: 50, color: 'white' }}>{this.state.player1.length}</Text>
          </View>

          <View style={{ position: 'absolute', top: 90, left: 100 }}>
            {this.state.card1.length ? <Cards card={this.state.card1[0]} style={{ position: 'absolute', top: 150, left: 210 }} /> : null}
          </View>

          {this.state.flagWaving1 &&
            <>
              <View style={{ backgroundColor: 'white', borderLeftWidth: 4, height: 100, width: 150, position: 'absolute', top: 180, left: 130 }}></View>
              <View style={{ backgroundColor: 'transparent', height: 50, width: 150, position: 'absolute', top: 280, left: 130, borderLeftColor: 'black', borderLeftWidth: 4 }}></View>
            </>
          }

          <View style={{ position: 'absolute', top: 370, left: 100, marginLeft: 75 }} >
            <Button onPress={this.showCards} disabled={this.state.inWar} title='WAR!' />
          </View>

          <View style={{ position: 'absolute', top: 425, left: 100 }}>
            {this.state.card2.length ? <Cards card={this.state.card2[0]} style={{ position: 'absolute', top: 40, left: 210 }} /> : null}
          </View>

          {this.state.flagWaving2 &&
            <>
              <View style={{ backgroundColor: 'white', borderLeftWidth: 4, height: 100, width: 150, position: 'absolute', top: 505, left: 130 }}></View>
              <View style={{ backgroundColor: 'transparent', height: 50, width: 150, position: 'absolute', top: 605, left: 130, borderLeftColor: 'black', borderLeftWidth: 4 }}></View>
            </>
          }

          <View style={{ position: 'absolute', top: 705, left: 100, backgroundColor: 'red', borderRadius: 16, display: 'flex', border: 'solid black 1px', margin: 5, height: 250, width: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 100, color: 'white' }}>KU</Text>
            <Text style={{ position: 'absolute', top: 5, fontSize: 50, color: 'white' }}>{this.state.player2.length}</Text>
          </View>
          <Toast
            ref="top"
            style={{ backgroundColor: 'blue', minWidth: 100, height: 50, textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'center' }}
            position='top'
            positionValue={200}
            fadeInDuration={250}
            fadeOutDuration={800}
            opacity={0.7}
            textStyle={{ color: 'white', fontSize: 30 }}
          />
          <Toast
            ref="bottom"
            style={{ backgroundColor: 'red', minWidth: 100, height: 50, display: 'flex', alignItems: 'center', flexDirection: 'center' }}
            position='bottom'
            positionValue={400}
            fadeInDuration={250}
            fadeOutDuration={800}
            opacity={0.7}
            textStyle={{ color: 'white', fontSize: 30 }}
          />
          <Toast
            ref="declareWar"
            style={{ backgroundColor: 'black', width: 200, height: 50, textAlign: 'center', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'center' }}
            position='top'
            positionValue={370}
            fadeInDuration={200}
            fadeOutDuration={1000}
            opacity={0.7}
            textStyle={{ color: 'white', fontSize: 30 }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    marginVertical: 40,
    marginBottom: 0,
    height: '100%',
    position: 'relative'
  },
  scroll: {
    width: '100%',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginEnd: 200,
    // position: 'relative'
  }
});
