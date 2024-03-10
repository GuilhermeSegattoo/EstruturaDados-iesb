
class stack {
    constructor(){
        this.items = [];
        // array para armazenar os elementos da pilha.
    }


// metodo para adiconar um elemento ao topo da pilha

push(element) {
   this.items.push(element);
};

// metodo para remover e retornar o elemento do topo da pilha 

pop() {
    if (this.isEmpty()){
        return "Underflow";
        // verifica se a pilha está vazia antes de remover
    }
    return this.items.pop(); 
};


// remove e retorna o elemento do topo da pilha

peek() {
    return 
    this.items[this.items.length - 1];
}

// metodo para obter o elemento do topo da pilha sem remove-lo 

isEmpty() {
    return this.items.length === 0;
}

// metodo para verificar se a pilha está vazia 

clear() {
    this.items = [];
}

printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++){
        str += this.items[i] + " ";
      }
      return str;
}
}

const stack = new Stack();
stack.push(10);

class Stack {
constructor(){
    this.items = [];
}
push(element){
    this.items.push(element);
}
pop(){
  if(this.isEmpty()){
    return "Underflow";
  }    
    return this.items.pop();
}
peek(){
    return this.item[this.items.length - 1];
}
isEmpty(){
    return this.items.length === 0;
}
clear(){
    this.items = [];
}
printStack() {
    let str = ""
stack.push(20);
stack.push(30);

console.log("Pilha atual: " + stack.printStack());
console.log("Elemento removido: " + stack.pop());
console.log("Pilha atual: " + stack.printStack());

stack.clear();
console.log("Pilha esvaziada: " + stack.printStack());
}}

