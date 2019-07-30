import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class TicTacToe extends Component {
  constructor() {
    super()
    this.state = {
      board: ['', '', '', '', '', '', '', '', ''],
      player: true,
      winner:false
    }
  }

  fillSquare = (square, player) => {
    let piece
    let boardCopy = [...this.state.board]
    if (boardCopy[square] === '') {
      if (player) {
        piece = 'X'
      } else {
        piece = 'O'
      }

      boardCopy.splice(square, 1, piece)
      this.setState({
        board: boardCopy,
        player: !this.state.player
      })
    }
    setTimeout(() => {
      this.checkWinner()
    }, 100);

  }

  checkWinner() {
    const [zeroth, first, second, third, fourth, fifth, sixth, seventh, eighth] = this.state.board
    if (zeroth !== '' && zeroth === first && first === second) {
      alert(`Congrats ${zeroth} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (third !== '' && third === fourth && fourth === fifth) {
      alert(`Congrats ${third} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (sixth !== '' && sixth === seventh && seventh === eighth) {
      alert(`Congrats ${sixth} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (zeroth !== '' && zeroth === third && third === sixth) {
      alert(`Congrats ${zeroth} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (first !== '' && first === fourth && fourth === seventh) {
      alert(`Congrats ${first} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (second !== '' && second === fifth && fifth === eighth) {
      alert(`Congrats ${second} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (zeroth !== '' && zeroth === fourth && fourth === eighth) {
      alert(`Congrats ${zeroth} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (second !== '' && second === fourth && fourth === sixth) {
      alert(`Congrats ${second} wins!`)
      this.setState({winner:true})
      this.clear()
    }
    else if (!this.state.winner && zeroth !== '' && first !== '' && second !== '' && third !== '' && fourth !== '' && fifth !== '' && sixth !== '' && seventh !== '' && eighth !== '') {
      alert('Cats game')
      this.setState({winner:true})
      this.clear()
    }
  }

  clear = () => {
    this.setState({
      board: ['', '', '', '', '', '', '', '', ''],
      winner:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe</Text>
        <View style={styles.board}>
          <TouchableOpacity onPress={() => this.fillSquare(0, this.state.player)}><View style={styles.allSquares}><Text style={styles.text}>{this.state.board[0]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(1, this.state.player)}><View style={styles.allSquares}><Text style={styles.text}>{this.state.board[1]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(2, this.state.player)}><View style={styles.bottomSquares}><Text style={styles.text}>{this.state.board[2]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(3, this.state.player)}><View style={styles.allSquares}><Text style={styles.text}>{this.state.board[3]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(4, this.state.player)}><View style={styles.allSquares}><Text style={styles.text}>{this.state.board[4]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(5, this.state.player)}><View style={styles.bottomSquares}><Text style={styles.text}>{this.state.board[5]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(6, this.state.player)}><View style={styles.rightSquares}><Text style={styles.text}>{this.state.board[6]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(7, this.state.player)}><View style={styles.rightSquares}><Text style={styles.text}>{this.state.board[7]}</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.fillSquare(8, this.state.player)}><View style={styles.noSquares}><Text style={styles.text}>{this.state.board[8]}</Text></View></TouchableOpacity>
        </View>
        <Text style={{marginTop:20}}>{this.state.player ? 'Player X' : 'Player O'}</Text>
        <Button style={{margin:0}} title='Reset' onPress={this.clear} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  board: {
    height: 300,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  allSquares: {
    height: 100,
    width: 100,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSquares: {
    height: 100,
    width: 100,
    borderBottomWidth: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightSquares: {
    height: 100,
    width: 100,
    borderRightWidth: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noSquares: {
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    color: 'black'
  }
})
