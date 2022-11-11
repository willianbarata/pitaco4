import React, {useState} from 'react';
import { View, ScrollView, Modal, TouchableOpacity, Text, Button, StyleSheet, TextInput , Image } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import Aposta from '../Aposta';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import estilo from './estilo';

import USA from './../../assets/bandeiras/USA_128x128.png';
import GALES from './../../assets/bandeiras/Pais_de_Gales_128x128.png';

export default function Pitaco() {

const [ visivel, setVisivel ] = useState(false);

const [textCasa, onChangeTextCasa] = React.useState("1");
const [textFora, onChangeTextFora] = React.useState("1");

const [paisCasa, setPaisCasa] =  React.useState("USA");
const [paisFora, setPaisFora] =  React.useState("GALES");

const apostando = (props) =>{
  console.log("Apostando")
  setVisivel(false)
}


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
                <View>
        <View style={estilo.Titulo}>                  
        <Text style={estilo.PaisesTopo}> {paisCasa} vs {paisFora} </Text>
        
        <TouchableOpacity  onPress={apostando}>
            <Text style={estilo.corBotaoFechar}>FECHAR</Text>
         </TouchableOpacity>
       
        </View>
        <View style={estilo.doisPaisesAposta}>
        <Image source={USA} style={estilo.imagemCasa} />
       <View>
        <Text style={estilo.seuPitaco} > Seu Pitaco</Text>
          
            <View style={estilo.grupoInputs}>
                <TextInput
                style={estilo.inputCasa}
                onChangeText={onChangeTextCasa}
                value={textCasa}
                keyboardType="numeric"
              />
              <TextInput 
                style={estilo.inputFora}
                onChangeText={onChangeTextFora}
                value={textFora}
                keyboardType="numeric"
              />
            </View>
          <Text style={estilo.vs} > VS</Text>
        </View>
        <Image source={GALES} style={estilo.imagemFora} />
        </View>
        

          <TouchableOpacity style={estilo.botao} onPress={() => {}}>
            <Text style={estilo.corBotao} > ✓    PALPITAR</Text>
         </TouchableOpacity>
        
         <Collapse>
         <CollapseHeader >
              <View style={estilo.bordaCollapse}>
                <Text style={estilo.colapse}>ESTATÍSTICAS GRUPO</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Ta daa!</Text>
            </CollapseBody>
          </Collapse>
       
        <Collapse >
            <CollapseHeader >
              <View style={estilo.bordaCollapseGeral}>
                <Text  style={estilo.colapse}>ESTATÍSTICAS GERAL</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Ta daa!</Text>
            </CollapseBody>
        </Collapse>

       
    </View>
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

