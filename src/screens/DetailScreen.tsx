import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {MovieDetails} from '../component/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id);

  return (
    <ScrollView>
      <View style={style.imageContainer}>
        <View style={style.borderImage}>
          <Image
            source={{
              uri,
            }}
            style={style.posterImage}
          />
        </View>
      </View>
      <View style={style.marginConteiner}>
        <Text style={style.subtitle}>{movie.original_title}</Text>
        <Text style={style.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      {/* Boton para cerrar */}
      <TouchableOpacity
        style={style.backButton}
        onPress={() => navigation.pop()}>
        <Icon color="white" name="arrow-back-outline" size={55} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  borderImage: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginConteiner: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
