import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

const CatalogoScreen = ({ navigation }) => {
  const [camisetas, setCamisetas] = useState([
    { id: 1, nome: 'Camiseta do Santos', imagem: '../assets/camisaSan.png' },
    { id: 2, nome: 'Camiseta do Grêmio', imagem: '../assets/camisaGre.png' },
    { id: 3, nome: 'Camiseta do Cruzeiro', imagem: '../assets/camisaCru.png' },
    { id: 4, nome: 'Camiseta do Palmeiras', imagem: '../assets/camisaPal.png' },
    { id: 5, nome: 'Camiseta do Amazonas', imagem: '../assets/camisaAmaz.png' },
    { id: 6, nome: 'Camiseta do Atlético Mineiro', imagem: '../assets/camisaGalo.png' },
    { id: 7, nome: 'Camiseta do Corinthians', imagem: '../assets/camisaCor.png' },
    { id: 8, nome: 'Camiseta do Vasco', imagem: '../assets/camisaVas.png' },
    { id: 9, nome: 'Camiseta do Fluminense', imagem: '../assets/camisaFlu.png' },
    { id: 10, nome: 'Camiseta do  Internacional', imagem: '../assets/camisaInter.png' },
  ]);

  const handleCamisetaPress = (camiseta) => {
    navigation.navigate('Detalhes', { camiseta });
  };

  return (
    <View>
      <FlatList
        data={camisetas}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCamisetaPress(item)}>
            <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100 }} />
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CatalogoScreen;