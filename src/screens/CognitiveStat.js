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
      dates: ["2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "2/21"],
      scores: [
        {type: 'Alphanumeric Memory', easy_correct: 14, easy_total: 20, medium_correct: 4, medium_total: 10, hard_correct: 1, hard_total:4},
        {type: 'Word Recall', easy_correct: 28, easy_total: 32, medium_correct: 20, medium_total: 25, hard_correct: 10, hard_total:18},
      ]
    }
  }

  renderDates = () => {
    return this.state.dates.map((date)=>{
      return (
        <Text key={date} style={{flex:1}}>{date}</Text>
      )
    });
  }

  renderAreaScores = () => {
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

  render() {
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
          {this.renderDates()}
        </View>

        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Performance by Area</Text>

          {this.renderAreaScores()}

        </View>
      </ScrollView>
    );
  }

}
