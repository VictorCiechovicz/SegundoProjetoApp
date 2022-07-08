import React from 'react'
import { Text, View, Image } from 'react-native'
import estilos from './estilos'
import Filme from '../../assets/Filme.png'

export default function Aboutator() {
  return (
    <View style={estilos.about}>
      <Text style={estilos.aboutTitulo}>Sobre o Ator</Text>

      <Text style={estilos.subtitulo}>Sua vida</Text>
      <Text style={estilos.paragrafo}>
        Nascido em Washington, DC, 21 de dezembro de 1948.
      </Text>
      <Text style={estilos.paragrafo}>
        Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do
        Morehouse College.
      </Text>

      <Text style={estilos.subtitulo}>Início da carreira</Text>
      <Text style={estilos.paragrafo}>
        Seu primeiro filme se chama Together for Days que estreou em 1972.
      </Text>
      <Image source={Filme} style={estilos.imagemFilme} />
    </View>
  )
}
