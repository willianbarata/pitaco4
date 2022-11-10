import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  box:{
    padding: 10,
    marginBottom: 10,
    borderBottomColor: 1,
    alignItems: 'center'
  },
  placar: {
    fontSize: 18,
    marginBottom: 5,
    alignItems: 'center'
  },
  dataInicio:{
    color: 'gray'
  },
  paises:{
    color: 'gray'
  },
  imgPaisCasa:{
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 90
  },
  imgPaisFora:{
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 90
  },
  blocoPlacar:{
    flexDirection: 'row',
  },
  corEnvioPitaco:{
    color: '#f12128',
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 12
  }

});

export default estilo;