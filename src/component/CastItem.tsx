import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Text, View, Image, StyleSheet} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={style.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={style.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
    marginHorizontal: 15,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
