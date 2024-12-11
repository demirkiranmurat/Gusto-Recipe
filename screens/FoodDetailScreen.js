import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import React, { useState, useLayoutEffect, useContext } from 'react';
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { FavoritesContext } from '../store/FavoritesContext';

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodContext = useContext(FavoritesContext);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

  const [statusMessage, setStatusMessage] = useState('');
  const [messageColor, setMessageColor] = useState('green');

  function changeFavorite() {
    if (foodIsFavorite) {

      favoriteFoodContext.removeFavorite(foodId);
      setStatusMessage('Kaldırıldı');
      setMessageColor('red');
    } else {
      favoriteFoodContext.addFavorite(foodId);
      setStatusMessage('Eklendi');
      setMessageColor('green'); 
    }


    setTimeout(() => {
      setStatusMessage('');
    }, 1000); 
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={changeFavorite} style={({ pressed }) => (pressed ? styles.pressed : null)}>
            <View style={styles.favoriteContainer}>
              {statusMessage.length > 1 && (
                <Text style={[styles.statusMessage, { color: messageColor }]}>{statusMessage} </Text>
              )}
              <Text style={styles.Fav}>❤️</Text>
            </View>
          </Pressable>
        );
      },
    });
  }, [navigation, foodIsFavorite, statusMessage, messageColor]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>  {selectedFood.complexity}      -     </Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İÇİNDEKİLER</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 35, 
    fontFamily: 'roboto',
    fontWeight: '600', 
    marginTop: 15,
    color: 'white',
    borderBottomWidth: 3,
    borderBottomColor: 'pink', 
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 350,
    borderEndEndRadius:15,
    borderEndStartRadius:15
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  detailItem: {
    marginTop:7,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#ffe6ff',
    fontWeight: '700'
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  subTitleContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    marginBottom: 15,
  },
  subTitle: {
    color: '#f2f2f2',
    fontSize: 23,
    fontFamily: 'Arial', 
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
  Fav: {
    fontSize: 21,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 7,
    borderColor: 'grey'
  }, 
  pressed: {
    opacity: 0.7,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusMessage: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '600', 
  }
});
