import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DateT = ({style}) => {
  let date = new Date();

  const dayName = (day) => {
    switch(day){
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      case 7: return 'Sunday';
    }
  }
  const monthName = (month) => {
    switch(month){
      case 1: return 'Jan';
      case 2: return 'Feb';
      case 3: return 'Mar';
      case 4: return 'Apr';
      case 5: return 'May';
      case 6: return 'Jun';
      case 7: return 'Jul';
      case 8: return 'Aug';
      case 9: return 'Sep';
      case 10: return 'Oct';
      case 11: return 'Nov';
      case 12: return 'Dec';
    }
  }

  const name = dayName(date.getDay());
  const day = date.getDate();
  const month = monthName(date.getMonth());
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{name} {day} {month}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});

export default DateT;