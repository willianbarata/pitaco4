import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import xml2json from '@hendt/xml2json';
const parseString = require('react-native-xml2js').parseString;
const baseUrl = 'https://api.pitacosdacopa.com.br/bolao/ws-api';

//const soap = require('soap');
//const axios = require('axios');
//const parser = require('xml2json');

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method){
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type' : 'application/json'};
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, { method, headers, body });
    let json = await req.json();
    return json;
}

const post = async (param) => {
    const x = axios.post('https://api.pitacosdacopa.com.br/bolao/ws-api?wsdl', param, {
                    headers: {'Content-Type': 'text/xml'}
                })
                .then(function (res) {
                    return res;
                })
                .catch(function (error) {
                   // console.log(error);
                });
    const y = await x;
    return y.data;
}


export default {
    getToken: async () => {
        return await AsyncStorage.getItem('token');
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/validade', {}, token);
        return json;
    },
    login: (email, password) => {//listar infousu
        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ObterInfoUsuarioRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>';
        
        post(xmls).then(function (resp) {
            let json = xml2json(resp);
            let jsongp = json["S:Envelope"]["S:Body"]["ns2:ObterInfoUsuarioRS"]["Grupo"];
            let jsonusu = json["S:Envelope"]["S:Body"]["ns2:ObterInfoUsuarioRS"]["Usuario"];

            let InfoGrupo = {
                Codigo: jsongp['Codigo'],
                Nome: jsongp['Nome'],
                Imagem: jsongp['UrlImagem'],
            }

            let InfoUsuario = {
                Codigo: jsonusu['Codigo'],
                Nome: jsonusu['Nome'],
                Email: jsonusu['Email'],
                Equipe: jsonusu['Equipe'],
            }

            //console.log(InfoUsuario, InfoGrupo);
            
        });
        
    },

    listapalpite: (email, password) => {
        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarPalpitesRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>';
        console.log("Chamou Lista Palpite")
        return post(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {
                var json = xml2json(resp);    
                jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"]
                jsongp = JSON.stringify(jsongp)
              //  lista = resolve["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"];
                resolve(jsongp)
                
                return jsongp;
            });
        });
        
    },

    listarestatistica: (email, password) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ObterEstatisticasJogoRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678" >' +
        '<CodigoJogo xmlns="">382</CodigoJogo>' +
        '</ObterEstatisticasJogoRQ>' +
        '</Body>' +
        '</Envelope>';
        
        //console.log(xmls)
        post(xmls).then(function (resp) {
            var json = xml2json(resp);

            var jsongp = json["S:Envelope"]["S:Body"]["ns2:ObterEstatisticasJogoRS"]["Estatisticas"]["Estatistica"];
            JSON.stringify(jsongp)
          //  console.log(jsongp); //TODO: listados todas estatisticas falta ordenar na tela

            
        });
        
    },


    listarjogos: (lista) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarJogosRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678" />' +
        '</Body>' +
        '</Envelope>';
       return post(xmls).then( (resp) =>{
            return new Promise((resolve, reject) => {
                var json = xml2json(resp);    
                jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"]
                jsongp = JSON.stringify(jsongp)
              //  lista = resolve["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"];
                resolve(jsongp)
                
                return jsongp;
            });
        });
    },

    listarclassificacao: (email, password) => {
        let xmls=
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<ListarClassificacaoRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678"/>' +
        '</Body>' +
        '</Envelope>'

        post(xmls).then(function (resp) {
            var json = xml2json(resp);

            var jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarClassificacaoRS"]["Posicoes"]["Posicao"];

            JSON.stringify(jsongp)
            console.log(jsongp); 
            return jsongp;
        });
        
    },

    palpitarjogo: (email, password) => { //erro 500
        let xmls=
            '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<Body>' +
            '<PalpitarJogoRQ xmlns="http://soap.webservices/" Usuario="william.santos@riosoft.com.br" Senha="12345678">' +
            '<CodigoJogo xmlns="">382</CodigoJogo>' +
            '<GolsTime1 xmlns="">2</GolsTime1>' +
            '<GolsTime2 xmlns="">2</GolsTime2>' +
            '</PalpitarJogoRQ>' +
            '</Body>' +
            '</Envelope>' +

        post(xmls).then(function (resp) {
            var json = xml2json(resp);

            //var jsongp = json["S:Envelope"]["S:Body"]["ns2:ListarJogosRS"]["Jogos"]["Jogo"];

            //JSON.stringify(jsongp)
            //console.log(jsongp); 

        });
        
    },

}
