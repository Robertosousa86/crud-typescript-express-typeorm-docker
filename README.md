# Criando um CRUD com Typescript, Express, TypeOrm e Mysql(Docker)

Um passo-a-passo para criação de uma API com as operações de crud(criar, ler, atualizar e deletar) utilizando:

- Node e Typescript:
- Express, para a criação e gerenciamento das rotas;
- TypeOrm, como Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional;
- MySQl como Banco de dados, mas rodando em um container do Docker.

**_Obs: Todos os comandos são executados no sistema POP_OS(Linux)_**

## Primeiros passos:

- Primeiramente vamos criar um diretório que irá guardar o nosso código, vamos chama-lo de `crud-typeorm`, podemos cria-lo via terminal com o comando `mkdir crud-typeorm` e `cd crud-typeorm` para "entrarmos" nesse diretório. Dentro do diretório usamos o comando `code .` para abrirmos o projeto com o Visual Studio Code.

- Agora podemos utilizar o `git` para controlar o versionamento do nosso código e aproveitamos para criar o arquivo `.gitignore`, que contém os arquivos e pastas que devem ser ignorados no projeto, para isso vamos usar o `npx` que executa as bibliotecas do `npm`, para isso rodamos o comando a seguir no terminal, que deve ser aberto na raiz do projeto:

```bash
npx gitignore node
```

Esse comando cria automaticamente um arquivo `.gitignore` com todos os arquivos básicos que devem ser ignorados em um projeto node.

Para mais informações sobre `git` e GitHub: https://github.com

## Iniciando o projeto e adicionando as primeiras dependências

- Para iniciarmos um novo projeto Node executamos o comando `npm init --yes`, isso ira gerar na raiz do nosso projeto um arquivo `package-json` com informações básicas:

```json
{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

- Agora adicionamos o Typescript.
Existem duas maneiras básicas de iniciar um projeto com typescript, a primeira é instalando o Typescript localmente em nosso projeto, para isso utilizamos o comando ``


