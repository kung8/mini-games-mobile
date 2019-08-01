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
    await this.setState({ card1, card2, player1, player2 })
    setTimeout(() => {
      this.challenge()
    }, 5000);
  }

  challenge = () => {
    let [card1] = [...this.state.card1]
    let [card2] = [...this.state.card2]
    let player1 = [...this.state.player1]
    let player2 = [...this.state.player2]

    if (card1.value < card2.value) {
      player2.push(card2, card1)
      this.refs.topToast.show(`${card2.name} beat ${card1.name}`)
      this.setState({ player1, player2, card1: [], card2: [] })
    } else if (card2.value < card1.value) {
      player1.push(card1, card2)
      this.refs.bottomToast.show(`${card1.name} beat ${card2.name}`)
      this.setState({ player1, player2, card1: [], card2: [] })
    } else if (card1.value === card2.value) {
      this.declareWar()
      this.setState({card1:[],card2:[],player1,player2})
    }
  }

  declareWar=async()=>{
    let player1 = [...this.state.player1]
    let player2 = [...this.state.player2]
    let war1 = player1.splice(0,4)
    let war2 = player2.splice(0,4)
    
    war1 = war1.map(card=>{
      card.show = true;
      return card
    })
    
    war2 = war2.map(card=>{
      card.show = true;
      return card
    })

    this.setState({card1:[war1[0]],card2:[war2[0]]})
    this.refs.declareWar.show('I')
    
    setTimeout(() => {
      this.setState({card1:[war1[3]],card2:[war2[3]]})
      this.refs.declareWar.show('WAR!')
    }, 3000);

    setTimeout(() => {
      this.setState({card1:[war1[2]],card2:[war2[2]]})
      this.refs.declareWar.show('CLARE')
    }, 2000);
    
    setTimeout(() => {
      this.setState({card1:[war1[1]],card2:[war2[1]]})
      this.refs.declareWar.show('DE-')
    }, 1000);
  }

  render() {
    //what I want to render is the two decks facedown
    //I want the number of cards right next to each other
    //I want a 'war' button

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>

          <View style={{ position: 'absolute', left: 100, top: -190, backgroundColor: 'red', borderRadius: 16, display: 'flex', border: 'solid black 1px', margin: 5, height: 250, width: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 100, color: 'white' }}>KU</Text>
            <Text style={{ position: 'absolute', bottom: 5, fontSize: 50, color: 'white' }}>{this.state.player1.length}</Text>
          </View>

          <View style={{ position: 'absolute', top: 90, left: 100 }}>
            {this.state.card1.length ? <Cards card={this.state.card1[0]} style={{ position: 'absolute', top: 150, left: 210 }} /> : null}
          </View>

          <View style={{ position: 'absolute', top: 370, left: 100, marginLeft: 75 }} >
            <Button onPress={this.showCards} title='WAR!' />
          </View>

          <View style={{ position: 'absolute', top: 425, left: 100 }}>
            {this.state.card2.length ? <Cards card={this.state.card2[0]} style={{ position: 'absolute', top: 40, left: 210 }} /> : null}
          </View>

          <View style={{ position: 'absolute', top: 705, left: 100, backgroundColor: 'red', borderRadius: 16, display: 'flex', border: 'solid black 1px', margin: 5, height: 250, width: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 100, color: 'white' }}>KU</Text>
            <Text style={{ position: 'absolute', top: 5, fontSize: 50, color: 'white' }}>{this.state.player2.length}</Text>
          </View>
          <Toast
            ref="bottomToast"
            style={{ backgroundColor: 'white' }}
            position='top'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.7}
            textStyle={{ color: 'black' }}
          />
          <Toast
            ref="topToast"
            style={{ backgroundColor: 'white' }}
            position='bottom'
            positionValue={400}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.7}
            textStyle={{ color: 'black' }}
          />
          <Toast
            ref="declareWar"
            style={{ backgroundColor: 'white',right:50 }}
            position='top'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.7}
            textStyle={{ color: 'black' }}
          />
          <Toast
            ref="declareWar"
            style={{ backgroundColor: 'white', right:50 }}
            position='bottom'
            positionValue={400}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.7}
            textStyle={{ color: 'black' }}
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
