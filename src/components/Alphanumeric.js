import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import ScoreBoard from '../commons/ScoreBoard';
import { listUsers } from '../graphql/queries';
import { createCognitive } from '../graphql/mutations';

export default class Alphanumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 1,
      isRun: false,
      time: null,
      showPrompt: false,
      prompt: '',
      showInput: false,
      userInput: '',
      correct: false,
      showResult: false,
    };
    let timer;
    let timeout;
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  generateString = () => {
    const { difficulty } = this.props;
    let text = "";
    let length;
    if(difficulty == "Hard") {
      const range = "abcdefghijklmnopqrstuvwxyz0123456789";
      length = Math.floor(Math.random() * 5) + 6;    // length is 6-10
      for (var i = 0; i < length; i++)
        text += range.charAt(Math.floor(Math.random() * range.length));
    } else {
      const range = "0123456789";
      if(difficulty == "Easy")
        length = Math.floor(Math.random() * 3) + 4; // length is 4-6
      if(difficulty == "Medium")
        length = Math.floor(Math.random() * 4) + 7; // length is 7-10
      for (var i = 0; i < length; i++)
        text += range.charAt(Math.floor(Math.random() * range.length));
    }
    this.setState({prompt: text});
  }

  timerStart = () => {
    this.setState({time:5});
    timer = setInterval(()=>{
      this.setState(prevState=>({
        time: prevState.time-1
      }))
    }, 1000);

    timeout = setTimeout(()=>{
      clearInterval(timer);
      this.setState({
        time:null,
        showPrompt:false,
        showInput: true,
      })
    }, 5500);
  }

  gameStart = () => {
    if(this.state.stage <= 10) {
      this.generateString();
      this.timerStart();
      this.setState({showPrompt:true});
    } else {
      this.pushGameResultToDB('Alphanumeric', this.props.difficulty, this.state.score);
      this.setState({
        time: null,
        showPrompt: true,
        prompt: 'Finish',
        showInput: false,
        userInput: '',
        correct: false,
        showResult: false,
      });
    }
  };

  // Get current user then push the completed game result to db
  pushGameResultToDB(type, difficulty, solved) {
    (async () => {
      Auth.currentAuthenticatedUser()
      .then(user => {
        const username = user.username;
        API.graphql(graphqlOperation(listUsers, {
			filter: { username: { eq: user.username } },
			limit: 1
		}))
        .then(data => {
          const userId = data.data.listUsers.items[0].id;
          API.graphql(graphqlOperation(createCognitive, {
            input: {
              type,
              difficulty,
              solved,
              total: 10,
              cognitiveUserId: userId
            }
          }));
        })
        .catch(err => console.warn(err));
      })
      .catch(err => console.warn(err));
    })();
  }

  checkAnswer = () => {
    if(this.state.userInput == this.state.prompt) {
      this.setState(prevState=>({
        score: prevState.score+1,
        correct: true,
      }));
    }
    this.setState(prevState=>({
      stage: prevState.stage+1,
      userInput: '',
      showInput: false,
      showPrompt: false,
      showResult: true,
    }));
    setTimeout(()=>{
      this.setState({
        correct: false,
        showResult: false,
      });
      this.gameStart();
    }, 1200);
  }

  onStartPress = () => {
    this.setState({isRun:true});
    this.gameStart();
  }

  onQuitPress = () => {
    this.setState({
      score: 0,
      stage: 1,
      isRun: false,
      time: null,
      showPrompt: false,
      prompt: '',
      showInput: false,
      userInput: '',
      correct: false,
      showResult: false,
    });
    clearInterval(timer);
    clearTimeout(timeout);
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

  renderUserInput = () => {
    if(this.state.showInput) {
      return(
        <View>
          <TextInput
            placeholder="Enter alphanumeric here"
            value={this.state.userInput}
            onChangeText={userInput=>this.setState({userInput})}
            selectionColor={'#428AF8'}
            underlineColorAndroid={'#428AF8'}
            style={{padding: 10}}
            onSubmitEditing={()=>this.checkAnswer()}
          />
          <TouchableOpacity onPress={()=>this.checkAnswer()}>
            <Text style={styles.start_btn}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <Text style={{fontSize: 20, fontWeight:'bold'}}>{this.state.showPrompt? this.state.prompt:''}</Text>
    );
  }

  renderResult = () => {
    if(this.state.showResult) {
      if(this.state.correct) {
        return (
          <View style={{backgroundColor:'#44ee44', flex: 1, width: '100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontSize: 30}}>Correct!</Text>
          </View>
        );
      }
      return (
        <View style={{backgroundColor:'#ee4444', flex: 1, width: '100%', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white', fontSize: 30}}>Incorrect!</Text>
        </View>
      );
    }
    else
      return(<View></View>);
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={styles.timer}>
          <MaterialIcons name="timer" size={32}/>
          <Text style={styles.timer_time}>{this.state.time}</Text>
        </View>
        <View style={styles.gameboard}>
          {this.renderUserInput()}
          {this.renderResult()}
        </View>
        <ScoreBoard
          difficulty={this.props.difficulty}
          score={this.state.score}
          stage={this.state.stage}
          totalStage={10}
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
    height: 400,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  start_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#33ff33',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  quit_btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#ff3333',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
