import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../component/MoviePoster';
import {HorizontalSlider} from '../component/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carrusel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={peliculasEnCine}
            sliderWidth={windowWidth}
            itemWidth={300}
            renderItem={({item}) => <MoviePoster movie={item} />}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/*  Peliculas Populares */}

        <HorizontalSlider title="En cine" movies={peliculasEnCine} />
      </View>
    </ScrollView>
  );
};
