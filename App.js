import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FoodOverViewScreen from './screens/FoodOverViewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/FavoritesContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); 


function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'purple',
      headerTitleStyle: {
        fontSize: 24, // Başlık font boyutunu büyüttüm
        fontWeight: 'bold', // Başlık metnini kalınlaştırdım
      },
      drawerStyle: {
        backgroundColor: 'purple',
      },
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'lightgray',
      drawerLabelStyle: {
        fontSize: 17, // Drawer etiketlerinin font boyutunu büyüttüm
        fontWeight: 'bold', // Drawer etiketlerini kalınlaştırdım
      },
      }}
    ><Drawer.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
      title: 'Kategoriler',
      headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 2,
      borderBottomColor: '#990099', 
      },
      headerTitleStyle: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: 'purple',
      },
    }}
  />
  
  <Drawer.Screen
  name="Favorites"
  component={FavoritesScreen}
  options={{
    title: 'Favoriler',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 2,
      borderBottomColor: '#990099', 
    },
    headerTitleStyle: {
      fontSize: 22, 
      fontWeight: 'bold', 
      color: 'purple',
    },
  }}
/></Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'purple',
            contentStyle: { backgroundColor: '#990099' },
            headerTitleStyle: {
              fontSize: 20, 
              fontWeight: 'bold', 
              color: 'purple',
            },
          }}
        >
          
          <Stack.Screen
            name="Kategoriler"
            component={MyDrawer}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="FoodOverView"
            component={FoodOverViewScreen}
            options={{ title: 'Food Overview' }}
          />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{ title: 'Tarif' }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});