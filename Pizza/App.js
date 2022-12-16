import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Button,
  Text,
  Image
} from 'react-native';
import { Card } from 'react-native-elements'



const Item = ({ pizza }) => (
  <Card>
    <View style={styles.searchContainer}>
      <View>
        <Image
          style={styles.pizzaImage}
          source={{ uri: pizza.image_file }}
        />
      </View>
      <View style={{flex:4}}>
        <Card.Title>{pizza.name}</Card.Title> 
        <Card.Divider/>
        <Text>{pizza.ingredients}</Text>
      </View>
  </View>
    
  </Card>
);


const App: () => Node = () => {

  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = useState([]);

  getPizzas = (filter) => {
    const url = 'https://pizza.playground.codeplumbers.eu/api/v1/pizzas/';

    fetch(filter ? url+'?search='+filter : url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getPizzas('')
  }, []);

  onChange = (event) => {
    setSearchText(event);
    console.log(event);
    getPizzas(event)
  };
  
  const renderItem = ({ item }) => (
    <Item pizza={item} />
  );

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
      />
      <View
        contentInsetAdjustmentBehavior="automatic">
          <View style={styles.searchContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={searchText}
                  placeholder='filter'
                />
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection:"row",
    marginTop: 10,
    justifyContent: 'space-between',
  },
  searchButton: {
    color: '#841584',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.2,
  },
  pizzaItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  pizzaName: {
    color: '#000000'
  },
  pizzaImage: {
    marginRight: 5,
    height: 120,
    aspectRatio: 16 / 9,
    maxWidth: 120
  }
});

export default App;
