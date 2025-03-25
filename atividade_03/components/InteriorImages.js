// InteriorImages.js
import React from 'react';
import { View, Image } from 'react-native';

const InteriorImages = ({ carro }) => {
  const interiorImages = [
    'https://via.placeholder.com/200x200?text=Image1',
    'https://via.placeholder.com/200x200?text=Image2',
    'https://via.placeholder.com/200x200?text=Image3',
    'https://via.placeholder.com/200x200?text=Image4',
    'https://via.placeholder.com/200x200?text=Image5',
    'https://via.placeholder.com/200x200?text=Image6',
  ];

  return (
    <View>
      {interiorImages.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />
      ))}
    </View>
  );
};

export default InteriorImages;