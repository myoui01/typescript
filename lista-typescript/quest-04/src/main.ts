import { Atendimento } from "./barbearia/atendimento";
import { Cliente } from "./barbearia/cliente";
import { GerenciarAtendimentos } from "./barbearia/gerenciar-atendimentos";
import { GerenciarClientes } from "./barbearia/gerenciar-clientes";
import promptSync from "prompt-sync";

const prompt = promptSync();

const gerenciadorClientes = new GerenciarClientes();
const gerenciadorAtendimentos = new GerenciarAtendimentos();

let opcao: number;

do {
  console.log("Escolha uma das seguintes opções:");
  console.log('1. Cadastrar novo cliente');
  console.log('2. Cadastrar novo atendimento');
  console.log('3. Pesquisar atendimento por data');
  console.log('4. Listar atendimentos');
  console.log('5. Deletar atendimento');
  console.log('0. Sair');

  opcao = parseInt(prompt("Digite a opção desejada: "));

  switch (opcao) {
    case 1: {
      const nome:string  = prompt("Nome do cliente: ");
      const cpf:string = prompt("CPF do cliente: ");
      const telefone:string = prompt("Telefone do cliente: ");
      const email:string = prompt("Email do cliente: ");

      const cliente:Cliente = new Cliente(0, nome, cpf, telefone, email);
      gerenciadorClientes.cadastrarCliente(cliente);
      console.log("Cliente cadastrado com sucesso!");
      break;
    }
    case 2: {
        const data:string = prompt("Data do atendimento (dd/mm/yyyy): ");
        const servico:string = prompt("Serviço prestado: ");
        const valor:number = parseFloat(prompt("Valor do atendimento: "));
        const cpf:string = prompt("CPF do cliente: ");
        
        const clienteIndex = gerenciadorClientes.pesquisarCliente(cpf);
      
        if (clienteIndex !== -1) {
          const cliente = gerenciadorClientes.getCliente(clienteIndex); // Obtém o cliente com base no índice
      
          if (cliente !== null) { // Verifica se o cliente não é nulo
            gerenciadorAtendimentos.getAll().forEach((atendimento) => {
              if (atendimento.getCliente() === cliente) {
                console.log(`Atendimento ID: ${atendimento.getId()}, Cliente: ${cliente.getNome()}`);
              }
            });
            const atendimento = new Atendimento(0, cliente, data, servico, valor);
            gerenciadorAtendimentos.cadastrarAtendimento(atendimento);
            console.log("Atendimento cadastrado com sucesso!");
          } else {
            console.log("Cliente não encontrado.");
          }
        } else {
          console.log("Cliente não encontrado.");
        }
        break;
    }
      
    case 3: {
      const dataPesquisa:string = prompt("Data do atendimento (dd/mm/yyyy): ");
      const atendimentos = gerenciadorAtendimentos.pesquisarAtendimento(dataPesquisa);

      if (atendimentos.length > 0) {
        console.log(`Atendimentos em ${dataPesquisa}:`);
        atendimentos.forEach((atendimento) => {
          console.log(`ID: ${atendimento.getId()}, Cliente: ${atendimento.getCliente().getNome()}`);
        });
      } else {
        console.log("Nenhum atendimento encontrado para esta data.");
      }
      break;
    }
    case 4: {
      const atendimentos = gerenciadorAtendimentos.listarAtendimento();
      console.log("=== Lista de Atendimentos ===");
      atendimentos.forEach((atendimento) => {
        console.log(`ID: ${atendimento.getId()}, Data: ${atendimento.getData()}, Cliente: ${atendimento.getCliente().getNome()}`);
      });
      break;
    }
    case 5: {
      const id:number = parseInt(prompt("ID do atendimento a ser deletado: "));
      gerenciadorAtendimentos.deletarAtendimento(id);
      console.log("Atendimento deletado com sucesso!");
      break;
    }
    case 0: {
      console.log("Tchau brigadu!!!");
      break;
    }
    default: {
      console.log("Opção inválida. Tente novamente.");
      break;
    }
  }
} while (opcao !== 0);
