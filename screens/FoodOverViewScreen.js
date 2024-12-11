import { FOODS, CATEGORIES } from '../data/dummy-data';
import FoodItem from '../components/FoodItem';
import { useLayoutEffect } from 'react';
import FoodList from '../components/FoodList';
import { StyleSheet } from 'react-native'; 

export default function FoodOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categorTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categorTitle,
    });
  }, [navigation, categoryId]);

  return <FoodList items={displayedFoods} />;
}

const styles = StyleSheet.create({
});


	
