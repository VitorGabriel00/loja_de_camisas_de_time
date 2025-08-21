import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const larguraTela = Dimensions.get("window").width;

export default function TelaListaProdutos({ navigation }) {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone S21",
      preco: 2499.99,
      categoria: "Eletrônicos",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Samsung_Galaxy_S21.png",
      descricao: "Smartphone top de linha com câmera incrível.",
      estoque: 15,
      avaliacoes: 4.8,
    },
    {
      id: 2,
      nome: "Fone Bluetooth 3 Premium",
      preco: 299.99,
      categoria: "Acessórios",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Headphones_icon.png",
      descricao: "Som cristalino e bateria que dura o dia todo.",
      estoque: 8,
      avaliacoes: 4.5,
    },
    {
      id: 3,
      nome: "Capa Protetora Ultra",
      preco: 49.99,
      categoria: "Acessórios",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Phone_case_icon.png",
      descricao: "Proteção militar para seu smartphone.",
      estoque: 30,
      avaliacoes: 4.2,
    },
    // ...adicione mais produtos para chegar em 10
  ];

  const abrirDetalhes = (produto) => {
    navigation.navigate("TelaDetalhesProduto", { produtoSelecionado: produto });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>📦 Nossos Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.itemProduto}
            onPress={() => abrirDetalhes(item)}
          >
            <Image source={{ uri: item.imagem }} style={estilos.imagemProduto} />
            <View style={estilos.infoProduto}>
              <Text style={estilos.nomeProduto}>{item.nome}</Text>
              <Text style={estilos.categoriaProduto}>{item.categoria}</Text>
              <Text style={estilos.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={estilos.avaliacaoProduto}>⭐ {item.avaliacoes}</Text>
            </View>
            <Text style={estilos.seta}>➡️</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  itemProduto: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  imagemProduto: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  infoProduto: { flex: 1 },
  nomeProduto: { fontSize: 16, fontWeight: "bold" },
  categoriaProduto: { color: "#777" },
  precoProduto: { fontSize: 14, fontWeight: "bold", color: "#4CAF50" },
  avaliacaoProduto: { color: "#FFA000" },
  seta: { fontSize: 18, marginLeft: 10 },
});
