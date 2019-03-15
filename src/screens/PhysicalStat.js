import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import { Pedometer } from 'expo';

export default class PhysicalStat extends React.Component {
  static navigationOptions = {
    title: 'Physical Statistics',
  };

  constructor(props) {
    super(props);
    this.state = {
      weekly_data: [1],
      weekly_data_loaded: null,
      dates: [],
      dayStepCount: 0,
      dayDistance: 0,
      weekStepcount: 0,
      weekDistance: 0
    }
  }

  componentDidMount() {
    this._setDates();
    this._setSteps();
    this._obtainDayData();
    this._obtainWeekData();
  }

  render() {
    if(! this.state.weekly_data_loaded) {
      return <View><Text>Loading...</Text></View>;
    }
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
            formatLabel={ value => `${value} %` }
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
        <View style={{ flexDirection:'row', marginLeft: 70}}>
          {this._renderDates()}
        </View>

        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Performance by Area</Text>

          <View>
            <Text style={{marginTop: 10, fontWeight:'bold'}}>Steps:</Text>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Steps Taken Yesterday:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>{this.state.dayStepCount} Steps</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Average per Day:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>{Math.round(this.state.weekStepcount/7)} Steps</Text>
            </View>
          </View>

          <View>
            <Text style={{marginTop: 10, fontWeight:'bold'}}>Distance:</Text>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Distance Traveled Yesterday:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>{this._numToTwoDigits(this.state.dayDistance)} Miles</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Average per Day:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>{this._numToTwoDigits(this.state.weekDistance/7)} Miles</Text>
            </View>
          </View>

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

  _setSteps() {
    var stepArray = new Array();
    var x = 7;
    while(x > 0) {
      var start = new Date();
      var end = new Date();
      start.setDate(start.getDate() - x);
      end.setDate(end.getDate() - x + 1);
      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      Pedometer.getStepCountAsync(start, end).then(
        result => {
          stepArray.push((result.steps / 10000) * 100);
          this.setState( {weekly_data: stepArray} );
        },
      error => {
        this.setState({
          weekStepcount: "Could not get stepCount: " + error
        });
      }
      );
      --x;
    }
    this.setState( { weekly_data_loaded: true } );
    console.log(this.state.weekly_data);
  }

  _obtainDayData() {
    let end = new Date();
    let start = new Date();
    start.setDate(end.getDate() - 1);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({
          dayStepCount: result.steps,
          dayDistance: result.steps / 2500,
        });
        console.log("dayStepCount steps:", result.steps, "distance:", this.state.dayDistance, "start date:", start);
      },
      error => {
        this.setState({
          weekStepcount: "Could not get stepCount: " + error
        });
      }
    );
  }

  _obtainWeekData() {
    let end = new Date();
    let start = new Date();
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    start.setDate(end.getDate() - 7);

    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({
          weekStepcount: result.steps,
          weekDistance: result.steps / 2500,
        });
        console.log("weekStepCount steps:", result.steps, "distance:", this.state.weekDistance, "start date:", start);

      },
      error => {
        this.setState({
          dayStepCount: "Could not get stepCount: " + error
        });
      }
    );
  }

  _numToTwoDigits(num) {
    return Number(num).toFixed(2);
  }
}
