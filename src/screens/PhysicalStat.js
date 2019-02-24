import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class PhysicalStat extends React.Component {
  static navigationOptions = {
    title: 'Cognitive Statistics',
  };

  constructor(props) {
    super(props);
    this.state = {
      weekly_data: [80, 75, 85, 82, 78, 45, 83],
      dates: ["2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "2/21"],
    }
  }

  renderDates = () => {
    return this.state.dates.map((date)=>{
      return (
        <Text key={date} style={{flex:1}}>{date}</Text>
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
        <View style={{ flexDirection:'row', marginLeft: 55}}>
          {this.renderDates()}
        </View>

        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Performance by Area</Text>

          <View>
            <Text style={{marginTop: 10, fontWeight:'bold'}}>Steps:</Text>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Steps Taken Today:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>1234 Steps</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Average per Day:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>4245 Steps</Text>
            </View>
          </View>

          <View>
            <Text style={{marginTop: 10, fontWeight:'bold'}}>Distance:</Text>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Distance Traveled today:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>1.2 miles</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop: 5}}>
              <Text style={{flex: 1}}>Average per Day:</Text>
              <Text style={{flex: 1, textAlign:'right'}}>2.4 miles</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }

}
