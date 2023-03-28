import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === {counter: number}
    // action === { type: 'increment' || "decrement"}

  switch (action.type) {
   case 'increment':
    return {...state, count: state.counter + action.payload };
   case 'decrement':
      return {...state, count: state.counter - action.payload };
    default:
        return state;
  }

};

const CounterScreen = () => {
 // const [counter, setCounter] = useState(0);


const [state, dispatch] = useReducer( reducer, { counter: 0 });

const {  } = state; 

 return (
  <View>
   <Button title="Increase" onPress={() => {
   dispatch({ type: 'increment', payload: 1 })

}} />
   <Button title="Decrease" onPress={() => {
    dispatch({ type: 'decrement', payload: 1 })

}} />
   <Text>Current Count: {state.counter}</Text>


  </View>


 );

};

const styles = StyleSheet.create({});

export default CounterScreen;