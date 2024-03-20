/* 
**************************************************************************
 FATEC - ZONA SUL - Desenvolvimento de Software Multiplataformas
 DISCIPLINA: Tecnicas de Programação 2
 AUTOR: Gabriel Azevedo e Jeferson Ribeiro      -         DATA: 14/03/24
 DESCRIÇÂO: Desenvolvimento do software de exemplo do padrão gof do grupo criacional - Prototype em JavaScript/Python/ java
 a fim de comparação e entendimento de sua utilização
**************************************************************************
*/

// Classe pessoa que sera clonada
class Pessoa{
  constructor(id, nome, idade){
      this.id = id;
      this.nome = nome;
      this.idade = idade;
  }

  // Metodo clone para realizar uma copia superficial do objeto
  clone(){
    return new Pessoa(this.id, this.nome, this.idade);
  }
}

// Classe PessoaManager para gerenciar instancias de Pessoa
class PessoaManager{
  constructor(){
    this.pessoas = {};
  }

  // Adicionar uma nova pessoa ao dicionario pessoas
  adicionarPessoa(id, nome, idade){
      const pessoa = new Pessoa(id, nome, idade);
      this.pessoas[id] = pessoa;
  }

  // Solicitar uma pessoa pelo id e retorna a copia dela:
  getPessoaById(id){
    const pessoaOriginal = this.pessoas[id];
    if (pessoaOriginal){
        return pessoaOriginal.clone();
    } else {
      return null;
    }
  }
}

// UTILIZAÇÃO DO PADRÃO DE PROJETO GOF - PROTOTYPE

// Criando uma instancia de PessoaManager
const manager = new PessoaManager();

// Adicionando duas pessoas:
manager.adicionarPessoa(1, 'Crebin do pneu', 8);
manager.adicionarPessoa(2, 'Flavin do cerol finin', 9);

// Clonando a primeira pessoa e modificando o nome da copia
const pessoaClone = manager.getPessoaById(1);
if(pessoaClone){
  pessoaClone.nome = "João Cyclonado Clona Cartão"
}

// Imprimindo as duas pessoas:
console.log('Pessoa Original:');
console.log(manager.getPessoaById(1));

console.log('Pessoa Clonada');
console.log(pessoaClone);