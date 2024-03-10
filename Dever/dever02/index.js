// para realizar as perguntas no terminal pelo swicth case. 
const readline = require('readline-sync');

// construtor do livro com nome, registro e se está disponivel.
class Livro {
    constructor(registro, nome, disponibilidade = true) {
        this.registro = registro;
        this.nome = nome;
        this.disponibilidade = disponibilidade;
        this.filaEspera = [];
    }
}

// construtor da biblioteca. 
class Biblioteca {
    constructor() {
        this.livros = {};
    }

    // function para cdastrar um livro na biblioteca, com um registro e um nome. 
    cadastraLivro(registroLivro, nomeLivro) {
        if (!this.livros[registroLivro]) {
            this.livros[registroLivro] = new Livro(registroLivro, nomeLivro);
            console.log(`"${nomeLivro}" foi cadastrado com o registro ${registroLivro}.`);
        } else {
            console.log(`O registro ${registroLivro} já está sendo usado.`);
        }
    }

    // function para retirar o livro do sistema, mas se não tiver o livro vai pra fila de espera. 
    retiraLivro(nomeLivro) {
        if (this.livros[nomeLivro]) {
            const livro = this.livros[nomeLivro];
            if (livro.disponibilidade) {
                livro.disponibilidade = false;
                console.log(`O livro "${nomeLivro}" foi retirado.`);
            } else {
                console.log(`O livro "${nomeLivro}" não está disponível. Colocado na fila de espera.`);
                livro.filaEspera.push(nomeLivro);
            }
        } else {
            console.log(`O livro "${nomeLivro}" não está cadastrado na biblioteca.`);
        }
    }

// function para o usuario devolver o livro e o sistema informar se alguem estiver na fila de espera, que o livro está disponivel
    devolveLivro(nomeLivro) {
        if (this.livros[nomeLivro]) {
            const livro = this.livros[nomeLivro];
            if (!livro.disponibilidade) {
                livro.disponibilidade = true;
                console.log(`O livro "${nomeLivro}" foi devolvido.`);
                if (livro.filaEspera.length > 0) {
                    const proximoUsuario = livro.filaEspera.shift();
                    console.log(`O próximo da fila, ja pode retirar o livro "${proximoUsuario}".`);
                }
            } else {
                console.log(`O livro "${nomeLivro}" já está disponível.`);
            }
        } else {
            console.log(`O livro "${nomeLivro}" não está cadastrado na biblioteca.`);
        }
    }

    // function para listar os livros disponiveis em pilha
    listarLivrosDisponiveis() {
        console.log("Livros disponíveis na biblioteca:");
        for (const livro in this.livros) {
            if (this.livros[livro].disponibilidade) {
                console.log(`- ${this.livros[livro].nome}`);
            }
        }
    }
}

// menu para o usuario.
function menu() {
    console.log("0. Cadastrar um Livro")
    console.log("1. Retirar livro");
    console.log("2. Devolver livro");
    console.log("3. Ver livros disponíveis");
    console.log("4. Sair");
}

// opcoes para quando o usuario clicar de acordo com menu
function escolherOpcao(opcao, biblioteca) {
    switch(opcao) {
        case '0':
            const registroLivro = readline.question("Digite o numero de registro do livro: ");
            const nomeLivro = readline.question("Digite o nome do livro: ");
            biblioteca.cadastraLivro(registroLivro, nomeLivro);
        break;
        case '1':
            const livroRetirar = readline.question("Digite o numero de registro do livro que deseja retirar: ");
            biblioteca.retiraLivro(livroRetirar);
            break;
        case '2':
            const livroDevolver = readline.question("Digite o numero de registro do livro que deseja devolver: ");
            biblioteca.devolveLivro(livroDevolver);
            break;
        case '3':
            biblioteca.listarLivrosDisponiveis();
            break;
        case '4':
            console.log("Saindo do programa.");
            process.exit(0);
            break;
        default:
            console.log("Opção inválida.");
    }
}

function main() {

    const biblioteca = new Biblioteca();

    // Criando instâncias de Livro para usar como base de dados
    const livro1 = new Livro("0001", "O Incrivel mundo de sophia");
    const livro2 = new Livro("0002", "Albert Einsten");
    const livro3 = new Livro("0003", "O Pequeno Príncipe");
    const livro4 = new Livro("0004", "1984");
    const livro5 = new Livro("0005", "O Senhor dos Anéis");

    // Adicionando os livros à biblioteca
    biblioteca.cadastraLivro(livro1.registro, livro1.nome);
    biblioteca.cadastraLivro(livro2.registro, livro2.nome);
    biblioteca.cadastraLivro(livro3.registro, livro3.nome);
    biblioteca.cadastraLivro(livro4.registro, livro4.nome);
    biblioteca.cadastraLivro(livro5.registro, livro5.nome);

    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao, biblioteca);
    }
}

main();