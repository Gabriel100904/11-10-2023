import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TelaCadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [dadosTecnico, setDadosTecnico] = useState(null);

  const cadastrarTecnico = () => {
  
    const tecnico = {
      nome,
      idade,
      nacionalidade,
      experiencia,
    };
    setDadosTecnico(tecnico);
  };

  return (
    <View>
      <Text>Nome do Técnico:</Text>
      <TextInput value={nome} onChangeText={setNome} />
      {}

      <Button title="Cadastrar" onPress={cadastrarTecnico} />

      {dadosTecnico && (
        <View>
          <Text>Dados do Técnico:</Text>
          <Text>Nome: {dadosTecnico.nome}</Text>
          <Text>Idade: {dadosTecnico.idade}</Text>
          <Text>Nacionalidade: {dadosTecnico.nacionalidade}</Text>
          <Text>Experiência: {dadosTecnico.experiencia}</Text>
        </View>
      )}

      <Button title="Ver Jogadores" onPress={() => navigation.navigate('TelaJogadores')} />
    </View>
  );
};

export default TelaCadastro;
