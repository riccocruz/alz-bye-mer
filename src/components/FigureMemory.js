import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class FigureMemory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      contains: false,
      randomImage: null,
      score: 0,
      stage: 0,
      isRun: false,
      showPrompt: false,
      submit: false,
      startGame:false,
      pressed:false,
      arr:[],
      dupArr: [] // array for the number of times the image was duplicated
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

  scoreBoard = (difficulty) => {
    return (
      <View style={styles.scoreboard}>
        <View style={styles.row}>
          <Text style={{fontSize:18}}>Difficulty: {difficulty} </Text>
        </View>
        <View style={styles.row}>
          <Text style={{fontSize:18}}>Stage: </Text>
          <Text style={styles.stage_box}>{this.state.stage} / 30</Text>

        </View>
      </View>
    );
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
      arr:[],
      dupArr: [],
      contains: false,
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
    if(this.state.contains)
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
      contains: false,
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

    if(randomItem !== null){
      if(this.state.arr.indexOf(randomItem)===-1)
      {
        this.state.dupArr.push(0)
        this.state.arr.push(randomItem)
      }
      else
      {
        // get the value in the index which contains the random image
        // value++;
        const dupArr = [...this.state.dupArr]
        let i = this.state.arr.indexOf(randomItem)
        dupArr[i] = this.state.dupArr[i]+1;

        this.setState({
          dupArr: dupArr,
          contains: true,
        })
      }
    }

    this.setState({randomImage: randomItem})
  }


  gameStart = () => {
    if(this.state.stage < 30) {
      this.generateRandomImage();
      this.setState(prevState=>({
        stage: prevState.stage+1,
        pressed:false
      }))

      this.timerStart();

    } else {
      this.setState({
        score: this.getFinalScore(),
        randomImage: null,
        time: null,
        showImage: false,
      });
    }
  } 

  getFinalScore = () =>
  {
    const reducer = (accumulator, currentValue) => accumulator+currentValue;
    totalPossibleScore = this.state.dupArr.reduce(reducer)*5;

    return parseInt(this.state.score/totalPossibleScore*100);

    // return this.state.score;
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
        <Text style = {{fontSize: 20}}> You got {this.state.score}% correct!  </Text>
      )
    }
    else {
        return(
          <View style={styles.alignStyle}>
            <Text style = {{fontSize: 17}}> You will be shown a series of images.</Text>
            <Text style = {{fontSize: 17}}> If you see an exact repeat image, press the image! PRESS START TO PLAY! </Text>
            <Text style = {{fontSize: 20}}> Good luck! </Text>
          </View>
        );
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',}}>
          {this.scoreBoard(this.props.difficulty)}
          {this.renderButton()}
        </View>
        <View style={styles.gameboard}>
            {this.renderGame()}
        </View>
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
  },
  scoreboard: {
    width:'75%',
    flexDirection:'column',
    justifyContent:'space-around',
    paddingBottom: 15,

  },
  row: {
    flexDirection:'row',
    paddingBottom:6,
    paddingLeft:5,
    paddingRight:5,
  },
  stage_box: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft:5,
    paddingRight:5,
    textAlign: 'left',
    fontSize: 18,
  },
});


// create an array contains how many times each image is duplicated
// first time ==> push 0 into the array
// others ==> add 1 to the index which has the image
// total score ==> user score / (5*(each value in the index))