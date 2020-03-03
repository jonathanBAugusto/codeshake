<?php
///
//* Inicie uma variavel recebendo um array
//* A estrutura de um array associativo é: <mixed,mixed>; primeiro Key, logo apos recebe associação a um Value;
///
$arrayAssoc = [
    'A' => 1,
    'a' => 1,
    'B' => 2,
    'b' => 1,
    'D' => 1,
    'd' => 1,
    'e' => 1,
    'g' => 1,
    'O' => 1,
    'o' => 1,
    'P' => 1,
    'p' => 1,
    'R' => 1,
    '0' => 1,
    '6' => 1,
    '8' => 2,
    '9' => 1,
];

//agora temos nosso array formado, vamos utiliza-lo
$texto = "Vamos contar quantos 'buracos fechados' temos nesse texto 8";
$buracos = 0;
//a função str_split() quebra a String em uma array(), podendo tambem ter mais de um parâmetro
//para definir qual caracter usar como demilitador para função
foreach (str_split($texto) as $letra) {
    //função 'array_key_exists(key, array)' verifica se dentro da 'array' existe a 'key' informada
    //perceba que essa função nesse 'if' ira ajudar a reduzir uma execução de bloco a mais no código
    if (array_key_exists($letra, $arrayAssoc)) {
        //se verdadeira ele acessa aquela 'key' utilizando a letra e somando a nossa var '$buracos'
        //o modo de se utilizar essa array é bem simples:
        //pegue a array e passe a key entre 'chaves' [] Ex: 
        //> echo $arrayAssoc[8];
        //resultado: 2
        $buracos += $arrayAssoc[$letra];
    }
}
echo "Na frase: \"$texto\" existem $buracos \"buracos\".".PHP_EOL;

//se preferir pode user JSON tambem!!

$json = '{
    "Marcos" : 32,
    "Antonio" : 19,
    "Jose" : 21
}';
//Quando utilizado JSON é necessario decodifica-lo para acessar suas values, pode se utilizar o json_decode($string, [,$boolean])
//Veja que o método utiliza 2 parametro, o primeiro obrigatório é uma 'string' contendo um JSON com as informações
//E o segundo é um boolean ja não obrigatório informa-lo. Este segundo fica encarregador de informar
//se a array será associativa ou não, caso TRUE ela é associativa, caso não ...
$arrayAssocJson = json_decode($json, TRUE);
//vamos ver o resultado:
//repare que quando vou escrevela é necessário antes de informar a variavel eu abrir colchetes '{}'
//?info? aspas simples não processam a variavel e sim somente escrevem
//?info? aspas dupla processam e imprimem o valor da variavel
echo "Marcos: {$arrayAssocJson['Marcos']}".PHP_EOL;
echo "Antonio: {$arrayAssocJson['Antonio']}".PHP_EOL;
echo "Jose: {$arrayAssocJson['Jose']}".PHP_EOL;

//E quando eu não usar o TRUE no json_decode?
//É simples, utilize essa flecha '->', veja:

$arrayNAssocJson = json_decode($json);
echo "Marcos: {$arrayNAssocJson->Marcos}".PHP_EOL;
echo "Antonio: {$arrayNAssocJson->Antonio}".PHP_EOL;
echo "Jose: {$arrayNAssocJson->Jose}".PHP_EOL;

//e caso queira converter sua array em JSON também é simples:
//Utilize o método json_encode($string)
$jsonConvertido = json_encode($arrayAssoc);

echo "Json: ".PHP_EOL."$jsonConvertido".PHP_EOL;
