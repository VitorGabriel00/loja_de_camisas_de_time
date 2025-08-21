import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Image,
  Dimensions,
  Alert,
} from "react-native";

const larguraTela = Dimensions.get("window").width;

export default function App() {
  const [mostrarModal, setMostrarModal] = useState(true);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [produtos] = useState([
    {
      id: 1,
      nome: "Smartphone S21",
      preco: 2499.99,
      categoria: "Eletrônicos",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Samsung_Galaxy_S21.png",
    },
    {
      id: 2,
      nome: "Fone Bluetooth 3 Premium",
      preco: 299.99,
      categoria: "Acessórios",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Headphones_icon.png",
    },
    {
      id: 3,
      nome: "Capa Protetora Ultra",
      preco: 49.99,
      categoria: "Acessórios",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Phone_case_icon.png",
    },
    // adicione mais produtos até 10
  ]);

  const validarLogin = () => {
    if (!usuario.trim()) {
      Alert.alert("Erro", "Por favor, preencha o usuário!");
      return;
    }
    if (usuario === "aluno" && senha === "123") {
      setMostrarModal(false);
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos!");
    }
  };

  const renderizarProduto = ({ item }) => (
    <View style={estilos.itemProduto}>
      <Image source={{ uri: item.imagem }} style={estilos.imagemProduto} />
      <View style={estilos.infoProduto}>
        <Text style={estilos.nomeProduto}>{item.nome}</Text>
        <Text style={estilos.categoriaProduto}>{item.categoria}</Text>
        <Text style={estilos.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={estilos.container}>
      {/* Modal de Login */}
      <Modal visible={mostrarModal} transparent animationType="fade">
        <View style={estilos.modalContainer}>
          <View style={estilos.modalContent}>
            <Text style={estilos.modalTitulo}>Login</Text>
            <TextInput
              placeholder="Usuário"
              value={usuario}
              onChangeText={setUsuario}
              style={estilos.input}
            />
            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              style={estilos.input}
            />
            <TouchableOpacity style={estilos.botao} onPress={validarLogin}>
              <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Lista de Produtos */}
      <Text style={estilos.tituloLista}>📦 Nossos Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderizarProduto}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  tituloLista: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },

  /* Modal */
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  /* Lista Produtos */
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
});
