import React,{Component} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Blackjack from './Blackjack'
import War from './War'
import GoFish from './GoFish'
import OldMaid from './OldMaid'
import Solitaire from './Solitaire'
import TicTacToe from './TicTacToe'

import axios from 'axios'

export default class Game extends Component {
    constructor(){
        super()
        this.state={
            selectedGame:'',
            cards:[]
        }
        this.getCards = this.getCards.bind(this)
    }
    
    componentDidMount(){
        // this.getCards()
    }
    
    async getCards(){
        // let cards = await axios.get('/api/cards')
        // console.log(cards)
        // this.setState({
        //     cards
        // })
    }

    render(){
        console.log(this.state.cards)
        const selectedGame = this.props.navigation.getParam('selectedGame','')
        if(selectedGame === 'Blackjack'){
            return(
                <Blackjack/>
            )
        } else if(selectedGame === 'War'){
            return(
                <War/>
            )
        } else if(selectedGame === 'GoFish'){
            return(
                <GoFish/>
            )
        } else if (selectedGame === 'OldMaid'){
            return (
                <OldMaid/>
            )
        } else if(selectedGame === 'Solitaire'){
            return(
                <Solitaire/>
            )
        }else if(selectedGame === 'TicTacToe'){
            return(
                <TicTacToe/>
            )
        } else {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DASH')}><Text>Pick A Game</Text></TouchableOpacity>
                </View>
            )
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
