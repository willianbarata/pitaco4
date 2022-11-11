import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

import Moment from 'moment';

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


  
const [pais1, setPais1] = useState('')
const [pais2, setPais2] = useState('')
const [dataJogo, setDataJogo] = useState('')

function pais(imgPais){

  
 // console.log(imgPais)

 switch (imgPais) {
  case "camaroes.png":
      setPais1(CAMAROES)
      break;
  case "brasil.png":
      setPais1(BRASIL)
      break;
  case "gana.png":
      setPais1(GANA)
      break;
  case "catar.png":
      setPais1(CATAR)
      break;
  case "senegal.png":
      setPais1(SENEGAL)
      break;
  case "estadosunidos.png":
      setPais1(ESTADOSUNIDOS)
      break;
  case "argentina.png":
      setPais1(ARGENTINA)
      break;
  case "dinamarca.png":
      setPais1(DINAMARCA)
      break;
  case "mexico.png":
      setPais1(MEXICO)
      break;
  case "franca.png":
      setPais1(FRANCA)
      break;
  case "marrocos.png":
      setPais1(MARROCOS)
      break;
  case "alemanha.png":
      setPais1(ALEMANHA)
      break;
  case "espanha.png":
      setPais1(ESPANHA)
      break;
  case "belgica.png":
      setPais1(BELGICA)
      break;
  case "suica.png":
      setPais1(SUICA)
      break;
  case "uruguai.png":
      setPais1(URUGUAI)
      break;
  case "portugal.png":
      setPais1(PORTUGAL)
      break;
  case "paisdegales.png":
      setPais1(PAISDEGALES)
      break;
  case "holanda.png":
      setPais1(HOLANDA)
      break;
  case "inglaterra.png":
      setPais1(INGLATERRA)
      break;
  case "tunisia.png":
      setPais1(TUNISIA)
      break;
  case "polonia.png":
      setPais1(POLONIA)
      break;
  case "japao.png":
      setPais1(JAPAO)
      break;
  case "croacia.png":
      setPais1(CROACIA)
      break;
  case "coreiadosul.png":
      setPais1(COREIADOSUL)
      break;
  case "equador.png":
      setPais1(EQUADOR)
      break;
  case "ira.png":
      setPais1(IRA)
      break;
  case "australia.png":
      setPais1(AUSTRALIA)
      break;
  case "arabia_saudita.png":
      setPais1(ARABIA)
      break;
  case "canada.png":
      setPais1(CANADA)
      break;
  case "costarica.png":
      setPais1(COSTARICA)
      break;
  case "servia.png":
      setPais1(COSTARICA)
      break;
}  


switch (imgPais) {
  case "camaroes.png":
      setPais2(CAMAROES)
      break;
  case "brasil.png":
      setPais2(BRASIL)
      break;
  case "gana.png":
      setPais2(GANA)
      break;
  case "catar.png":
      setPais2(CATAR)
      break;
  case "senegal.png":
      setPais2(SENEGAL)
      break;
  case "estadosunidos.png":
      setPais2(ESTADOSUNIDOS)
      break;
  case "argentina.png":
      setPais2(ARGENTINA)
      break;
  case "dinamarca.png":
      setPais2(DINAMARCA)
      break;
  case "mexico.png":
      setPais2(MEXICO)
      break;
  case "franca.png":
      setPais2(FRANCA)
      break;
  case "marrocos.png":
      setPais2(MARROCOS)
      break;
  case "alemanha.png":
      setPais2(ALEMANHA)
      break;
  case "espanha.png":
      setPais2(ESPANHA)
      break;
  case "belgica.png":
      setPais2(BELGICA)
      break;
  case "suica.png":
      setPais2(SUICA)
      break;
  case "uruguai.png":
      setPais2(URUGUAI)
      break;
  case "portugal.png":
      setPais2(PORTUGAL)
      break;
  case "paisdegales.png":
      setPais2(PAISDEGALES)
      break;
  case "holanda.png":
      setPais2(HOLANDA)
      break;
  case "inglaterra.png":
      setPais2(INGLATERRA)
      break;
  case "tunisia.png":
      setPais2(TUNISIA)
      break;
  case "polonia.png":
      setPais2(POLONIA)
      break;
  case "japao.png":
      setPais2(JAPAO)
      break;
  case "croacia.png":
      setPais2(CROACIA)
      break;
  case "coreiadosul.png":
      setPais2(COREIADOSUL)
      break;
  case "equador.png":
      setPais2(EQUADOR)
      break;
  case "ira.png":
      setPais2(IRA)
      break;
  case "australia.png":
      setPais2(AUSTRALIA)
      break;
  case "arabia_saudita.png":
      setPais2(ARABIA)
      break;
  case "canada.png":
      setPais2(CANADA)
      break;
  case "costarica.png":
      setPais2(COSTARICA)
      break;
  case "servia.png":
      setPais2(COSTARICA)
      break;
}  

}



    useEffect(() => {
      
     // console.log(props.imagemTime1)
      pais(props.imagemTime1)
      console.log('*****************************************')
     //console.log( props.dataInicio.format('MMMM Do YYYY, h:mm:ss a'))
      Moment.locale();         // pt-br
     Moment().format('LT');   // 17:42
     
     console.log(Moment(props.dataInicio).format('LT'))
      moment().format('LTS');  // 17:42:28
     moment().format('L');    // 11/11/2022
     moment().format('l');    // 11/11/2022
     moment().format('LL');   // 11 de novembro de 2022
     moment().format('ll');   // 11 de nov de 2022
     moment().format('LLL');  // 11 de novembro de 2022 às 17:42
     moment().format('lll');  // 11 de nov de 2022 às 17:42
     moment().format('LLLL'); // sexta-feira, 11 de novembro de 2022 às 17:42
     moment().format('llll');  



    }, []);

  return (
    <View style={estilo.box}>
        <Text style={estilo.dataInicio}> { dataJogo  }  </Text>
      <View style={estilo.blocoPlacar}>
              <Image source={pais1} style={estilo.imgPaisCasa} />
            <Text style={estilo.placar}>
            {props.placar}
           </Text>
           <Image source={pais2} style={estilo.imgPaisFora} />
      </View> 
      <Text style={estilo.paises}>
          {props.pais1} x {props.pais2}
      </Text>
      <Text style={estilo.corEnvioPitaco}> Você ainda não enviou seu pitaco! </Text>
    </View>
  )
}