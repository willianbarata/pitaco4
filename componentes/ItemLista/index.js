import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';


import USA from './../../assets/bandeiras/USA_128x128.png';
import GALES from './../../assets/bandeiras/Pais_de_Gales_128x128.png';

import ALEMANHA   from './../../assets/bandeiras/Alemanha_128x128.png';
import ARABIA     from './../../assets/bandeiras/Arabia_Saudita_128x128.png';
import ARGENTINA  from './../../assets/bandeiras/Argentina_128x128.png';
import AUSTRALIA  from './../../assets/bandeiras/Australia_128x128.png';
import BELGICA    from './../../assets/bandeiras/Belgica_128x128.png';
import BRASIL     from './../../assets/bandeiras/Brasil_128x128.png';
import CAMAROES   from './../../assets/bandeiras/Camaroes_128x128.png';
import CANADA     from './../../assets/bandeiras/Canada_128x128.png';
import CATAR      from './../../assets/bandeiras/Catar_128x128.png';
import COREIA     from './../../assets/bandeiras/Coreia_do_Sul_128x128.png';
import COSTARICA  from './../../assets/bandeiras/Costa_Rica_128x128.png';
import CROACIA    from './../../assets/bandeiras/Croacia_128x128.png';
import DINAMARCA  from './../../assets/bandeiras/Dinamarca_128x128.png';
import EQUADOR    from './../../assets/bandeiras/Equador_128x128.png';
import ESPANHA    from './../../assets/bandeiras/Espanha_128x128.png';
import FRANCA     from './../../assets/bandeiras/Franca_128x128.png';
import GANA       from './../../assets/bandeiras/Gana_128x128.png';
import HOLANDA    from './../../assets/bandeiras/Holanda_128x128.png';
import INGLATERRA from './../../assets/bandeiras/Inglaterra_128x128.png';
import IRA        from './../../assets/bandeiras/Ira_128x128.png';
import JAPAO      from './../../assets/bandeiras/Japao_128x128.png';
import MARROCOS   from './../../assets/bandeiras/Marrocos_128x128.png';
import MEXICO     from './../../assets/bandeiras/Mexico_128x128.png';
import POLONIA    from './../../assets/bandeiras/Polonia_128x128.png';
import PORTUGAL   from './../../assets/bandeiras/Portugal_128x128.png';
import SENEGAL    from './../../assets/bandeiras/Senegal_128x128.png';
import SERVIA     from './../../assets/bandeiras/Servia_128x128.png';
import SUICA      from './../../assets/bandeiras/Suica_128x128.png';
import TUNISIA    from './../../assets/bandeiras/Tunisia_128x128.png';
import URUGUAI    from './../../assets/bandeiras/Uruguai_128x128.png';
 
export default function ItemLista(props) {
  
  return (
    <View style={estilo.box}>
        <Text style={estilo.dataInicio}> {props.dataInicio}  </Text>
      <View style={estilo.blocoPlacar}>
              <Image source={SENEGAL} style={estilo.imgPaisCasa} />
            <Text style={estilo.placar}>
            {props.placar}
           </Text>
           <Image source={URUGUAI} style={estilo.imgPaisFora} />
      </View> 
      <Text style={estilo.paises}>
          {props.paises}
      </Text>
      <Text style={estilo.corEnvioPitaco}> Você ainda não enviou seu pitaco! </Text>
    </View>
  )
}