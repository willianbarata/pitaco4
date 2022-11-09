import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

export default function ListaDeSignos() {
  return (
    <View>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista placar="2 x 2" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="JAPAO" />
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="MEXICO"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="SENEGAL"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="PORTUGAL"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="POLONIA"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="HOLANDA"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="ARGENTINA"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="ESPANHA"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="MARROCOS"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="TUNISIA"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="URUGUAI"/>
        <ItemLista placar="-" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="BRASIL"/>
      </ScrollView>
    </View>
  )
}