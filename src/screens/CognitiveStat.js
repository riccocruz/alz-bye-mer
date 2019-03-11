import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class CognitiveStat extends React.Component {
  static navigationOptions = {
    title: 'Cognitive Statistics',
  };

  constructor(props) {
    super(props);
    this.state = {
      weekly_data: [15, 12, 8, 11, 20, 15, 13],
      dates: [],
      scores: [
        {type: 'Alphanumeric Memory', easy_correct: 14, easy_total: 20, medium_correct: 4, medium_total: 10, hard_correct: 1, hard_total:4},
        {type: 'Word Recall', easy_correct: 28, easy_total: 32, medium_correct: 20, medium_total: 25, hard_correct: 10, hard_total:18},
      ],
    }
  }

  componentDidMount() {
    this._setDates();
  }

  render() {
    console.log(this.state.dates);
    const contentInset = { top: 20, bottom: 20 }
    return (
      <ScrollView>
        <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Weekly Performance</Text>
        <View style={{height:400, paddingLeft: 20, paddingRight: 20, paddingTop: 20, flexDirection:'row'}}>
          <YAxis
            data={ this.state.weekly_data }
            contentInset={ contentInset }
            svg={{
                fill: 'grey',
                fontSize: 10,
                }}
            numberOfTicks={ 10 }
            formatLabel={ value => `${value}` }
          />
          <BarChart
            style={{ flex:1, marginLeft: 16 }}
            data={ this.state.weekly_data }
            contentInset={ contentInset }
            curve={ shape.curveNatural }
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
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
  while (currentDate <= stopDate) {
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
    console.log(this.state.dates);
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