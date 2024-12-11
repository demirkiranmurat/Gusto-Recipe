import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'

export default function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData){
      function pressHandler(){
          navigation.navigate('FoodOverView',{
            categoryId:itemData.item.id,
          })
      }
        return (
            <CategoryGrid title={itemData.item.title} color={itemData.item.color} pressFood={pressHandler}/>
        )
    }

  return (
    <FlatList
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem}
    />
  )
}

const styles = StyleSheet.create({})