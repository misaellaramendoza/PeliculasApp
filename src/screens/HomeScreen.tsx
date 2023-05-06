import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interfaces/movieInterface'
import { useMovies } from '../hooks/useMovies'

 const HomeScreen = () => {


  const { movieNow, isLoading} = useMovies();


  //si no ha cargado, mostra un indicador
  if(isLoading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator 
        color={ 'red' }
        size={ 100 }
        />
      </View>
    )
  }

  console.log(movieNow[0]?.title)

  return (
    <View>
        <Text>Home</Text>
    </View>
  )
}
export default HomeScreen
