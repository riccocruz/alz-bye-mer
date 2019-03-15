import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ScoreBoard from '../commons/ScoreBoard';

export default class ColorMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0,
      time: null,
      isRun: false,
      startGame:false,
      answerColor: null, // the color that the first word says
      randomText: "",
      answerText: "", // the color that the second word has
      randomColor: null,
      showScore: false,
    };
    let timer;
    let timeout;

    this.easyColor = ['red', 'black', 'blue']
    this.mediumColor = ['red', 'black', 'blue', 'orange']
    this.hardColor = ['red', 'black', 'blue', 'orange', 'green', 'yellow']

  };

  componentDidUpdate() {
    console.log(this.state);
  }

  renderButton = () => {
    if(this.state.isRun) {
      return(
        <TouchableOpacity onPress={()=>this.onQuitPress()}>
          <Text style={styles.quit_btn}>Quit</Text>
        </TouchableOpacity>
      );
    }
    return(
      <TouchableOpacity onPress={()=>this.onStartPress()}>
        <Text style={styles.start_btn}>Start</Text>
      </TouchableOpacity>
    );
  }

  timerStart = () => {
      if(this.props.difficulty === 'Easy')
      this.setState({time: 5});
      else if(this.props.difficulty === 'Medium')
        this.setState({time: 3});
      else
        this.setState({time: 2});

      timer = setInterval(()=>{
        this.setState(prevState=>({
          time: prevState.time-1
        }))
      }, 1000);
    

    if(this.props.difficulty === 'Easy')
    {
      timeout = setTimeout(()=>{
        clearInterval(timer);
        this.setState({
          time: null,
          answerColor: null,
          randomText: "",
          answerText: "",
          randomColor: null,
        })
        this.gameStart()
      },5000);
    }
    else if(this.props.difficulty === 'Medium'){
      timeout = setTimeout(()=>{
        clearInterval(timer);
        this.setState({
          time: null,
          answerColor: null,
          randomText: "",
          answerText: "",
          randomColor: null,
        })
        this.gameStart()
      },3000);
    }
    else{
      timeout = setTimeout(()=>{
        clearInterval(timer);
        this.setState({
          time: null,
          answerColor: null,
          randomText: "",
          answerText: "",
          randomColor: null,
        })
        this.gameStart()
      },2000);
    }
  }

  onQuitPress = () => {
    this.setState({
      time: null,
      answerColor: null,
      randomText: "",
      answerText: "",
      randomColor: null,
      score: 0,
      stage: 0,
      isRun: false,
      startGame:false,
      showScore: false,
    });
    clearInterval(timer);
    clearTimeout(timeout);
  }

  onStartPress = () => {
    this.setState({
      isRun:true,
      startGame: true});
    this.gameStart();
  }

  checkAnswer = (answer) => {
    if(this.state.answerColor === this.state.answerText)
    {
      if(answer === "yes")
      {
        this.setState(prevState=>({
          score: prevState.score+4,
        }));
      }
    }
    else{
      if(answer === "no")
      {
        this.setState(prevState=>({
          score: prevState.score+4,
        }));
      }
    }
    this.setState({
      time: null,
    });
    clearTimeout(timeout);
    clearInterval(timer);
    this.gameStart();
  }

  buttons = () => {
    return (<View style = {{flexDirection: 'row'}}>
      <TouchableOpacity onPress={()=>this.checkAnswer("yes")}>
        <Text style={styles.yes_btn}>YES</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.checkAnswer("no")}>
        <Text style={styles.no_btn}>NO</Text>
      </TouchableOpacity>
    </View>);
  }


  generateRandomColor = () => {
    if(this.props.difficulty === 'Easy')
      var colorArr = this.easyColor;
    else if(this.props.difficulty === 'Medium')
      var colorArr = this.mediumColor;
    else
      var colorArr = this.hardColor;

    var randomInt = Math.floor(Math.random() * colorArr.length)
    var randomColor = colorArr[randomInt]

    return randomColor;
  }

  gameStart = () => {
    if(this.state.stage < 25) {
      this.setState(prevState=>({
        stage: prevState.stage+1,
        answerColor: this.generateRandomColor(),
        randomText: this.generateRandomColor(),
        answerText: this.generateRandomColor(),
        randomColor: this.generateRandomColor()
      }))

      this.timerStart();

    } else {
      this.setState({
        time: null,
        answerColor: null,
        randomText: "",
        answerText: "",
        randomColor: null,
        showScore:true
      });
    }
  }
  

  renderGame = () => {
    if(this.state.startGame && !this.state.showScore) {
      return (
        <View>
          <Text style = {{fontSize:15, textAlign: 'center', paddingBottom: 15,}}> Meaning </Text>
          <Text style={[styles.textStyle, {color: this.state.randomColor}]}> {this.state.answerText.toUpperCase()} </Text>
          <Text style={[styles.textStyle, {color: this.state.answerColor}]}> {this.state.randomText.toUpperCase()} </Text>
          <Text style = {{fontSize:15, textAlign: 'center', paddingTop: 15}}> Text Color </Text>
          {this.buttons()}
        </View>
      );
    }
    else if(this.state.startGame && this.state.showScore)
    {
      return(
        <Text style = {{fontSize: 20}}> Your final score is: {this.state.score} </Text>
      )
    }
    else {
        return(
          <View>
            <Text style = {{fontSize: 17, textAlign: 'center'}}> In this game, your task is to identify the color of a written word. 
            You must suppress the impulse to respond to the word's meaning, and focus only on the ink color. </Text>
            <Text style = {{fontSize: 17, textAlign: 'center'}}> You need to press "YES" if the meaning of the first text matchs to the color of the second text.
            Press "NO" fo any other cases.</Text>
            <Text style = {{fontSize: 20, textAlign: 'center'}}> PRESS START TO PLAY! Good luck! </Text>
          </View>
        );
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={styles.timer}>
          <MaterialIcons name="timer" size={32}/>
          <Text style={styles.timer_time}>{this.state.time}</Text>
        </View>
        <View style={styles.gameboard}>
            {this.renderGame()}
        </View>
        <ScoreBoard
          difficulty={this.props.difficulty}
          score={this.state.score}
          stage={this.state.stage}
          totalStage={25}
        />
        {this.renderButton()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  timer: {
    position: 'absolute',
    right: 20,
    top: 20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    zIndex: 2,
  },
  timer_time: {
    fontSize: 24,
    fontWeight:'bold',
  },
  gameboard: {
    height: 450,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  start_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#33ff33',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  quit_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#ff3333',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  yes_btn:{
    fontSize: 25,
    color: 'white',
    backgroundColor: '#27AE60',
    paddingTop: 15,
    paddingBottom: 15,
    width: 100,
    marginTop: 20,
    marginRight: 30,
    textAlign:'center',
  },
  no_btn:{
    fontSize: 25,
    color: 'white',
    backgroundColor: '#F39C12',
    paddingTop: 15,
    paddingBottom: 15,
    width: 100,
    marginTop: 20,
    marginLeft: 30,
    textAlign:'center',
  },
  textStyle:
  {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign:'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
});