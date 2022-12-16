import React from 'react';
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

const DATA = [
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/1/",
        "created": "2022-12-15T16:20:02.220410Z",
        "id": 1,
        "name": "Aglio e olio",
        "ingredients": "Tomato sauce, Garlic, Olive oil",
        "price": 12.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/pizza-marinara-aglio.jpg",
        "image_text": "Aglio e olio"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/2/",
        "created": "2022-12-15T16:21:08.556429Z",
        "id": 2,
        "name": "Ai Broccoli",
        "ingredients": "Tomato sauce, Mozzarella, Broccoli, Garlic, Chili peppers, Oregano",
        "price": 15.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/Mushroom-Broccoli-Pizza_EXPS_MIOPBZ17_14710_D10_13_4b.jpg",
        "image_text": "Ai Broccoli"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/3/",
        "created": "2022-12-15T16:21:57.754055Z",
        "id": 3,
        "name": "Al Salmone",
        "ingredients": "Tomato sauce, Mozzarella, Salmon, Garlic",
        "price": 17.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/salmone.jpg",
        "image_text": "Al Salmone"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/4/",
        "created": "2022-12-15T16:22:41.147167Z",
        "id": 4,
        "name": "Alla Vongole",
        "ingredients": "Tomato sauce, Mozzarella, Garlic, Small clams, Chili powder",
        "price": 12.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/hero-300.jpg",
        "image_text": "Alla Vongole"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/5/",
        "created": "2022-12-15T16:23:23.117812Z",
        "id": 5,
        "name": "Alle Verdure Grigliate",
        "ingredients": "Tomato sauce, Mozzarella, Grilled vegetables",
        "price": 11.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/31521-pizza-alle-verdure.jpg",
        "image_text": "Alle Verdure Grigliate"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/6/",
        "created": "2022-12-15T16:25:11.493124Z",
        "id": 6,
        "name": "Pizza ortolana",
        "ingredients": "The name of this classic Italian pizza translates to greengrocer’s pizza. It consists of a basic pizza dough which is smeared with tomato sauce, topped with mozzarella and grilled slices of eggplant and zucchini, then baked. Lastly, pizza ortolana is typically drizzled with olive oil and topped with fresh basil.",
        "price": 15.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/7a8d8d9d934843f0ad09ef15fd7d5bea.jpg",
        "image_text": "Pizza ortolana"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/7/",
        "created": "2022-12-15T16:25:38.672185Z",
        "id": 7,
        "name": "Pizza rustica",
        "ingredients": "Pizza rustica or pizzagaina is a large Italian pizza pie consisting of a pastry-like crust that goes both on top and on the bottom, and in between the crust it holds ingredients such as salami, ham, prosciutto, eggs, and Italian cheeses such as mozzarella, ricotta, Pecorino Romano, and Parmigiano Reggiano.\r\n\r\nIt is hard to classify pizza rustica as it is part pastry, part quiche, part pie, and part pizza at the same time. The dish is traditionally prepared for Easter and it is usually served at room temperature as an appetizer. Even though pizza rustica is Italian in origin, it is also popular in the Italian-American community in the United States of America.",
        "price": 21.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/1b95e40f25f445aeb1d42db22d98d240.jpg",
        "image_text": "Pizza rustica"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/8/",
        "created": "2022-12-15T16:26:06.334409Z",
        "id": 8,
        "name": "Apizza",
        "ingredients": "Apizza (pronounced \"ah-beets\") is a popular type of pizza in New Haven, Connecticut characterized by its prolonged baking time in extremely hot coal ovens and the high moisture content of the dough. Due to these two defining characteristics, the result is a pizza with a thin, black, crispy, and charred crust that might appear to be burnt, but instead has a deliciously chewy texture and flavor.\r\n\r\nUsual toppings are sparse, including grated cheese and tomatoes or anchovies so that the pizza won't be over-sauced or over-topped, and as they are formed by hand, there is no uniform shape of these pizzas. It was invented by Frank Pepe, an Italian baker who sold two versions of Neapolitan style pizza, topped with grated cheese, garlic, oregano, olive oil, and anchovies or tomatoes.",
        "price": 27.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/feaf29ba346349c29a1419e88b21bd56.jpg",
        "image_text": "Apizza"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/9/",
        "created": "2022-12-15T16:26:37.193854Z",
        "id": 9,
        "name": "Prosciutto e funghi pizza",
        "ingredients": "Prosciutto e funghi is a pizza variety that is topped with tomato sauce, mozzarella, thin slices of prosciutto cotto, and mushrooms. Some varieties can be topped with olives or served drizzled with olive oil.",
        "price": 17.0,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/2eb7aad01de840628a7f703e4ecb0bac.jpg",
        "image_text": "Prosciutto e funghi pizza"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/10/",
        "created": "2022-12-15T16:28:29.561809Z",
        "id": 10,
        "name": "MARINARA",
        "ingredients": "Tomato sauce, oregano, garlic, seed soy oil",
        "price": 10.5,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/dish_thumbnail.jpg",
        "image_text": "MARINARA"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/11/",
        "created": "2022-12-15T16:29:55.581597Z",
        "id": 11,
        "name": "MARGHERITA",
        "ingredients": "Tomato sauce, basil, Agerola fior di latte cheese, pecorino Romano D.O.P.\r\ncheese, seed soy oil",
        "price": 14.5,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/authentic-margherita-pizza-la-cooquette.jpg",
        "image_text": "MARGHERITA"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/12/",
        "created": "2022-12-15T16:30:28.666776Z",
        "id": 12,
        "name": "MARITA",
        "ingredients": "Half margherita, half marinara",
        "price": 14.5,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/images.jpeg",
        "image_text": "MARITA"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/13/",
        "created": "2022-12-15T16:32:43.712392Z",
        "id": 13,
        "name": "NAPOLETANA",
        "ingredients": "Tomato sauce, basil, Agerola fior di latte cheese, Cetara anchovies, black\r\nolives, capers, oregano, seed soy oi",
        "price": 17.95,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/Una_Pizza_Napoletana___Margherita_Pizza.0.jpg",
        "image_text": "NAPOLETANA"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/14/",
        "created": "2022-12-15T16:33:25.223068Z",
        "id": 14,
        "name": "CALZONE",
        "ingredients": "Tomato sauce, ciccioli (pressed pork), salami Napoli, Agerola fior di latte\r\ncheese, ricotta cheese, pecorino Romano D.O.P. cheese, basil, black pepper,\r\nseed soy oil (folded pizza)",
        "price": 17.95,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/calzone-mer-123rf.jpg",
        "image_text": "CALZONE"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/15/",
        "created": "2022-12-15T16:34:11.897618Z",
        "id": 15,
        "name": "PIZZA FRITTA",
        "ingredients": "Ciccioli (pressed pork), salami Napoli, Agerola fior di latte cheese, ricotta\r\ncheese, black pepper, deep fried in sunflower oil (folded pizza)",
        "price": 17.95,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/Pizza-fritta-quadrata-anteprima.jpg",
        "image_text": "PIZZA FRITTA"
    },
    {
        "url": "http://pizza.playground.codeplumbers.eu/api/v1/pizzas/16/",
        "created": "2022-12-15T16:35:06.587023Z",
        "id": 16,
        "name": "SALSICCIA E FRIARIELLI",
        "ingredients": "Pork minced sausages, broccoli rabe (Friarielli), Agerola fior di latte cheese,\r\npecorino Romano D.O.P. cheese, seed soy oil",
        "price": 17.95,
        "image_file": "http://pizza.playground.codeplumbers.eu/media/uploads/2022/12/15/Pizza-Salsiccia-e-Friarielli.jpg",
        "image_text": "SALSICCIA E FRIARIELLI"
    }
];

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

  const [searchText, onChangeText] = React.useState("...");
  const [number, onChangeNumber] = React.useState(null);
  
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
              <View style={{flex:3}}>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={searchText}
                />  
              </View>
              <View style={{flex:2}}>
                <Button
                  style={styles.searchButton}
                  title="Search"/>    
              </View>
          </View>
          <FlatList
            data={DATA}
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
    margin: 5
  },
  searchButton: {
    color: '#841584',
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0.2,
    padding: 10,
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
