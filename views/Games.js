import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Blackjack from './Blackjack'
import War from './War'
import GoFish from './GoFish'
import OldMaid from './OldMaid'
import Solitaire from './Solitaire'
import TicTacToe from './TicTacToe'
import ViewCards from './ViewCards'
import { url } from '../url'
import axios from 'axios'

export default class Game extends Component {
    constructor() {
        super()
        this.state = {
            selectedGame: '',
            cards: [], isLoaded: false
        }
    }

    componentDidMount() {
        this.getCards()
    }

    getCards = async () => {
        const { data: cards } = await axios.get(`${url}/api/cards`)
        this.setState({ cards, isLoaded: true })
    }

    render() {
        const selectedGame = this.props.navigation.getParam('selectedGame', '')
        if (this.state.isLoaded) {
            if (selectedGame === 'Blackjack') {
                return (
                    <Blackjack cards={this.state.cards} />
                )
            } else if (selectedGame === 'War') {
                return (
                    <War cards={this.state.cards} />
                )
            } else if (selectedGame === 'GoFish') {
                return (
                    <GoFish cards={this.state.cards} />
                )
            } else if (selectedGame === 'OldMaid') {
                return (
                    <OldMaid cards={this.state.cards} />
                )
            } else if (selectedGame === 'Solitaire') {
                return (
                    <Solitaire cards={this.state.cards} />
                )
            } else if (selectedGame === 'TicTacToe') {
                return (
                    <TicTacToe />
                )
            } else if (selectedGame === 'View') {
                return (
                    <ViewCards cards={this.state.cards} />
                )
            }

            else {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DASH')}><Text>Pick A Game</Text></TouchableOpacity>
                    </View>
                )
            }
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
