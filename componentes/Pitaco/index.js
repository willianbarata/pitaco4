import React, {useState} from 'react';
import { View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import Aposta from '../Aposta';

import estilo from './estilo';

export default function Pitaco() {

const [ visivel, setVisivel ] = useState(false);

  const abreAposta = () =>{
    console.log("Abre Aposta")
    setVisivel(true)
  }
  return (
    <View>
      <Titulo />

      <ScrollView style={estilo.lista}>
      <TouchableOpacity onPress={abreAposta}>
        <ItemLista placar="2 x 2" dataInicio="19/10, qua às 13:00" paises="Estados Unidos x País de Gales" paisCasa="JAPAO" />
        </TouchableOpacity>
       
        <Modal animationType='slide' transparent={true} visible={visivel} onRequestClose={()=>{}}>
              <View style={estilo.modalWindow}>
                <View style={estilo.modalBody}>

                  <Aposta />
                  </View>
              </View>
        </Modal>

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