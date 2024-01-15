import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../component/MoviePoster';
import {Movie} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading || undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  console.log('Valentin', peliculasEnCine);
  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={peliculasEnCine[0]} />
      <Carousel
        data={peliculasEnCine}
        sliderWidth={350}
        itemWidth={300}
        renderItem={item => <MoviePoster movie={item.item} />}
      />
    </View>
  );
};
