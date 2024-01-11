import { StyleSheet, Text, View, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { AirbnbRating, Rating } from 'react-native-ratings';

const Ratings = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React native ratings</Text>
      <AirbnbRating />
      <AirbnbRating
        reviews={[
          'Poor',
          'Very Bad',
          'Bad',
          'Ok',
          'Good',
          'Very Good',
          'Excellent',
        ]}
        count={7}
        defaultRating={3}
        selectedColor="green"
        unSelectedColor="lightgray"
        reviewColor="green"
        size={25}
        reviewSize={25}
        showRating={true}
        ratingContainerStyle={{ marginVertical: 20 }}
        starImage={require('../assets/icon.png')}
        onFinishRating={(rating) => alert(rating)}
      />

      <Rating
        type="heart" // heart, star, bell, rocket
        ratingCount={7}
        showRating={true}
        ratingTextColor="red"
        fractions={1} // 0-20
        jumpValue={0.5}
        startingValue={5}
        onStartRating={(rating) => console.log(`Initial: ${rating}`)}
        onFinishRating={(rating) => console.log(`Rating finished ${rating}`)}
        onSwipeRating={(rating) => console.log(`Swiping: ${rating}`)}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={(newValue) => setIsChecked(newValue)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>React Native Community Checkbox</Text>
      </View>
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 8,
  },
});
