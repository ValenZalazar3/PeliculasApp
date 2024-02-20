import ImageColor from 'react-native-image-colors';

export const getPosterColor = async (uri: string) => {
  const colors = await ImageColor.getColors(uri, {});
};
