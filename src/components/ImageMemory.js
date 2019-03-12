import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ScoreBoard from '../commons/ScoreBoard';

export default class ImageMemory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      randomImage: null,
      score: 0,
      stage: 0,
      isRun: false,
      showPrompt: false,
      submit: false,
      startGame:false,
      pressed:false,
      arr:[]
    };
    let timer;
    let timeout;

    this.easyItems = [require('../../assets/game_img/easy1.jpg'), require('../../assets/game_img/easy2.jpg'), require('../../assets/game_img/easy9.jpg'), require('../../assets/game_img/easy11.jpg'),
        require('../../assets/game_img/easy3.jpg'), require('../../assets/game_img/easy4.jpg'), require('../../assets/game_img/easy5.jpg'), require('../../assets/game_img/easy12.jpg'),
        require('../../assets/game_img/easy6.jpg'), require('../../assets/game_img/easy7.jpg'), require('../../assets/game_img/easy8.jpg') ,require('../../assets/game_img/easy10.jpg'),]
    this.mediumItems = [require('../../assets/game_img/medium1.jpg'), require('../../assets/game_img/medium2.jpg'), require('../../assets/game_img/medium12.jpg'),
        require('../../assets/game_img/medium3.jpg'), require('../../assets/game_img/medium4.jpg'), require('../../assets/game_img/medium5.jpg'),
        require('../../assets/game_img/medium6.jpg'), require('../../assets/game_img/medium7.jpg'), require('../../assets/game_img/medium8.jpg'),
        require('../../assets/game_img/medium9.jpg'), require('../../assets/game_img/medium10.jpg'), require('../../assets/game_img/medium11.jpg'), require('../../assets/game_img/medium13.jpg')]
    this.hardItems = [require('../../assets/game_img/hard1.jpg'), require('../../assets/game_img/hard2.jpg'), require('../../assets/game_img/hard12.jpg'),
        require('../../assets/game_img/hard3.jpg'), require('../../assets/game_img/hard4.jpg'), require('../../assets/game_img/hard5.jpg'), require('../../assets/game_img/hard19.jpg'),
        require('../../assets/game_img/hard6.jpg'), require('../../assets/game_img/hard7.jpg'), require('../../assets/game_img/hard8.jpg'),require('../../assets/game_img/hard18.jpg'),
        require('../../assets/game_img/hard9.jpg'), require('../../assets/game_img/hard10.jpg'), require('../../assets/game_img/hard11.jpg'),require('../../assets/game_img/hard17.jpg'),
        require('../../assets/game_img/hard13.jpg'), require('../../assets/game_img/hard14.jpg'), require('../../assets/game_img/hard15.jpg'), require('../../assets/game_img/hard16.jpg'), require('../../assets/game_img/hard20.jpg')]
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
    timeout = setTimeout(()=>{
      this.gameStart()
    },3000);
  }

  onQuitPress = () => {
    this.setState({
      randomImage: null,
      score: 0,
      stage: 0,
      isRun: false,
      showImage: false,
      startGame:false,
      pressed:false,
      arr:[]
    });
    clearTimeout(timeout);
  }

  onStartPress = () => {
    this.setState({
      isRun:true,
      showImage: true,
      startGame: true});
    this.gameStart();
  }

  checkAnswer = () => {
    // stop the timer
    // and make an interval (for 3s)
    if(this.state.arr.indexOf(this.state.randomImage)!==-1 )
    {
      this.setState(prevState=>({
        score: prevState.score+5,
      }));
    }
    else
    {
      this.setState(prevState=>({
        score: prevState.score-5,
      }));
    }
    this.setState(prevState=>({
      showPrompt: false,
      randomImage: null,
      time: null,
      showResult: true,
      pressed:false
    }));
    clearTimeout(timeout);
    this.gameStart();
  }

  generateRandomImage = () => {
    if(this.props.difficulty === 'Easy')
      var itemArr = this.easyItems;
    else if(this.props.difficulty === 'Medium')
      var itemArr = this.mediumItems;
    else
      var itemArr = this.hardItems;

    var randomInt = Math.floor(Math.random() * itemArr.length)
    var randomItem = itemArr[randomInt]

    this.setState({randomImage: randomItem})
  }


  gameStart = () => {
    if(this.state.stage < 30) {
      this.setState(prevState=>({
        stage: prevState.stage+1,
        pressed:false
      }))

      this.generateRandomImage();
      this.timerStart();
      if(this.state.randomImage !== null)
        if(this.state.arr.indexOf(this.state.randomImage)===-1)
          this.state.arr.push(this.state.randomImage)
    } else {
      this.setState({
        randomImage: null,
        arr: [],
        time: null,
        showPrompt: true,
        showImage: false,
      });
    }
  }


  renderGame = () => {
    if(this.state.showImage && this.state.startGame) {
      return (
        // ** disable it when it's pressed
        <TouchableOpacity  onPress={()=>{this.checkAnswer(); this.setState({pressed: true})}}>
          <Image style={styles.imageContainer} source={this.state.randomImage} resizeMode={'contain'} />
        </TouchableOpacity>
      );
    }
    else if(this.state.startGame && !this.state.showImage)
    {
      return(
        <Text style = {{fontSize: 20}}> Your final score is: {this.state.score} </Text>
      )
    }
    else {
        return(
          <View style={styles.alignStyle}>
            <Text style = {{fontSize: 20}}> You will be shown a series of images.</Text>
            <Text style = {{fontSize: 20}}> If you see an exact repeat image, click it! </Text>
            <Text style = {{fontSize: 20}}> If you are ready, PRESS START TO PLAY! </Text>
            <Text style = {{fontSize: 20}}> Good luck! </Text>
          </View>
        );
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={styles.gameboard}>
            {this.renderGame()}
        </View>
        <ScoreBoard
          difficulty={this.props.difficulty}
          score={this.state.score}
          stage={this.state.stage}
          totalStage={30}
        />
        {this.renderButton()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
  },
  imageContainer:{
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alignStyle:
  {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
