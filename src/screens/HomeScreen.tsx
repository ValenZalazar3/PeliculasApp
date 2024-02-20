import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../component/MoviePoster';
import {HorizontalSlider} from '../component/HorizontalSlider';
import {GradientBackgound} from '../component/GradientBackgound';
import {getColors} from 'react-native-image-colors';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const colors = await getColors(uri, {});
  };
  return (
    <GradientBackgound>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carrusel principal */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              sliderWidth={windowWidth}
              itemWidth={300}
              renderItem={({item}) => <MoviePoster movie={item} />}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>

          {/*  Peliculas Populares */}

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackgound>
  );
};
