import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listUsers, listCognitives } from '../graphql/queries';

export default class CognitiveStat extends React.Component {
  static navigationOptions = {
    title: 'Cognitive Statistics',
  };

  constructor(props) {
    super(props);
    this.state = {
      weekly_data: [77, 81, 72, 80, 82, 85, 80],
      dates: [],
      scores: [
        {type: 'Alphanumeric Memory', easy_correct: 29, easy_total: 37, medium_correct: 25, medium_total: 39, hard_correct: 11, hard_total:23},
        {type: 'Image Memory', easy_correct: 37, easy_total: 48, medium_correct: 30, medium_total: 38, hard_correct: 15, hard_total:21},
        {type: 'Color Match', easy_correct: 31, easy_total: 35, medium_correct: 25, medium_total: 28, hard_correct: 16, hard_total:20},
      ],
    }
  }

  componentDidMount() {
    this._setDates();
    this.fetchGameResultFromDB();
  }

  fetchGameResultFromDB() {
    (async () => {
      Auth.currentAuthenticatedUser()
      .then(user => {
        const username = user.username;
        API.graphql(graphqlOperation(listUsers, {
          filter: {username: { eq: username}},
          limit: 1
		}))
        .then(userData => {
          const profile = userData.data.listUsers.items[0];
          delete profile.cognitives;
          delete profile.physicals;
          delete profile.todos;
          // API.graphql(graphqlOperation(listCognitives, {
          //   filter: { user: { eq: profile }}
          // }))
          // .then(data => {
          //   console.log(data);
          // })
          // .catch(err => console.warn(err));
        })
        .catch(err => console.warn(err));
      })
      .catch(err => console.warn(err));
    })();
  }

  render() {
    const contentInset = { top: 20, bottom: 20 }
    return (
      <ScrollView>
        <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Weekly Performance</Text>
        <View style={{height:400, paddingLeft: 20, paddingRight: 20, paddingTop: 20, flexDirection:'row'}}>
          <YAxis
            data={ [0,100] }
            contentInset={ contentInset }
            svg={{
                fill: 'grey',
                fontSize: 10,
                }}
            numberOfTicks={ 50 }
            formatLabel={ value => `${value} %` }
          />
          <BarChart
            style={{ flex:1, marginLeft: 16 }}
            data={ this.state.weekly_data }
            contentInset={ contentInset }
            curve={ shape.curveNatural }
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            yMin={0}
            yMax={100}
          >
            <Grid/>
          </BarChart>
        </View>
        <View style={{ flexDirection:'row', marginLeft: 55}}>
          {this._renderDates()}
        </View>

        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Performance by Area</Text>

          {this._renderAreaScores()}

        </View>
      </ScrollView>
    );
  }

  _renderDates = () => {
    return this.state.dates.map((date)=>{
      return (
        <Text key={date} style={{flex:1}}>{date}</Text>
      )
    });
  }


_obtainDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate < stopDate) {
    var month = String(currentDate.getMonth() + 1);
    var day = String(currentDate.getDate());
    var slash = "/";
    dateArray.push(month.concat(slash, day));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
  }

  _setDates() {
    let end = new Date();
    let start = new Date();
    start.setDate(end.getDate() - 7);
    this.setState( {dates: this._obtainDates(start, end)} );
  }

  _renderAreaScores = () => {
    return this.state.scores.map(game=>{
      return(
        <View key={game.type}>
          <Text style={{marginTop: 10, fontWeight:'bold'}}>{game.type}</Text>
          <View style={{flexDirection:'row', paddingTop: 5}}>
            <Text style={{flex: 1}}>Easy: </Text>
            <Text style={{flex: 1, textAlign:'right'}}>{game.easy_correct}/{game.easy_total} ({((game.easy_correct/game.easy_total)*100).toFixed(1)} %)</Text>
          </View>
          <View style={{flexDirection:'row', paddingTop: 5}}>
            <Text style={{flex: 1}}>Medium: </Text>
            <Text style={{flex: 1, textAlign:'right'}}>{game.medium_correct}/{game.medium_total} ({((game.medium_correct/game.medium_total)*100).toFixed(1)} %)</Text>
          </View>
          <View style={{flexDirection:'row', paddingTop: 5}}>
            <Text style={{flex: 1}}>Hard: </Text>
            <Text style={{flex: 1, textAlign:'right'}}>{game.hard_correct}/{game.hard_total} ({((game.hard_correct/game.hard_total)*100).toFixed(1)} %)</Text>
          </View>
        </View>
      )
    });
  }

}
