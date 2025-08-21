import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";

const larguraTela = Dimensions.get("window").width;

export default function TelaDetalhesProduto({ route, navigation }) {
  const { produtoSelecionado } = route.params;
  const [quantidade, setQuantidade] = useState(1);

  const alterarQuantidade = (inc) => {
    const novaQtd = quantidade + inc;
    if (novaQtd > 0 && novaQtd <= produtoSelecionado.estoque) {
      setQuantidade(novaQtd);
    }
  };

  const adicionarCarrinho = () => {
    Alert.alert(
      "Sucesso! 🎉",
      `${quantidade}x ${produtoSelecionado.nome} adicionado(s) ao carrinho!`,
      [
        { text: "Continuar Comprando", onPress: () => navigation.goBack() },
        { text: "Ver Carrinho", onPress: () => console.log("Ir para carrinho") },
      ]
    );
  };

  return (
    <View style={estilos.container}>
      <Image source={{ uri: produtoSelecionado.imagem }} style={estilos.imagem} />
      <Text style={estilos.nome}>{produtoSelecionado.nome}</Text>
      <Text style={estilos.descricao}>{produtoSelecionado.descricao}</Text>
      <Text style={estilos.preco}>💲 R$ {produtoSelecionado.preco.toFixed(2)}</Text>
      <Text style={estilos.estoque}>📦 Estoque: {produtoSelecionado.estoque}</Text>
      <Text style={estilos.avaliacoes}>⭐ {produtoSelecionado.avaliacoes} avaliações</Text>

      <View style={estilos.qtdContainer}>
        <TouchableOpacity style={estilos.botaoQtd} onPress={() => alterarQuantidade(-1)}>
          <Text style={estilos.textoBotao}>-</Text>
        </TouchableOpacity>

        <Text style={estilos.qtdTexto}>{quantidade}</Text>

        <TouchableOpacity style={estilos.botaoQtd} onPress={() => alterarQuantidade(1)}>
          <Text style={estilos.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={estilos.botaoCarrinho} onPress={adicionarCarrinho}>
        <Text style={estilos.textoCarrinho}>🛒 Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", alignItems: "center" },
  imagem: { width: larguraTela * 0.7, height: larguraTela * 0.7, borderRadius: 12, marginBottom: 20 },
  nome: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  descricao: { fontSize: 16, textAlign: "center", marginBottom: 10, color: "#555" },
  preco: { fontSize: 20, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 },
  estoque: { fontSize: 14, color: "#333", marginBottom: 5 },
  avaliacoes: { fontSize: 14, color: "#FFA000", marginBottom: 20 },
  qtdContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  botaoQtd: { backgroundColor: "#ddd", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 5 },
  textoBotao: { fontSize: 20, fontWeight: "bold" },
  qtdTexto: { fontSize: 18, marginHorizontal: 15 },
  botaoCarrinho: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  textoCarrinho: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
