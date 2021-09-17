import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import Favorites from '../components/Favorites';
import 'react-native-gesture-handler';
import Test from '../components/Test'
import { SafeAreaView } from 'react-navigation';


const SearchStackNavigator = createStackNavigator();

function MyStack() {
  return (
    <SearchStackNavigator.Navigator >
      <SearchStackNavigator.Screen name="Search" component={Search} />
      <SearchStackNavigator.Screen name="FilmDetail" component={FilmDetail} />
    </SearchStackNavigator.Navigator>
  );
}

const FavoritesStackNavigator = createStackNavigator();
function Stacky(){
  return (
    <FavoritesStackNavigator.Navigator >
      <FavoritesStackNavigator.Screen name="Favorites" component={Favorites} />
      <FavoritesStackNavigator.Screen name="FilmDetail" component={FilmDetail} />
    </FavoritesStackNavigator.Navigator>
  );
}

const MoviesTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MoviesTabNavigator.Navigator 
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarShowLabel:false,
              tabBarActiveBackgroundColor: '#DDDDDD',
              tabBarInactiveBackgroundColor: '#FFFFFF',
              
              tabBarIcon: () => {
                if (route.name === 'Recherche') {
                  return <Image
                  source={require('../Images/ic_search.png')}
                  style={styles.icon}/>
                  
                } else if (route.name === 'Favoris') {
                  return <Image
                  source={require('../Images/ic_favorite.png')}
                  style={styles.icon}/>
                }

              },
              
              
            })}
      >
        <MoviesTabNavigator.Screen name="Recherche"   component={MyStack} />
        <MoviesTabNavigator.Screen name="Favoris" component={Stacky} />
      </MoviesTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

