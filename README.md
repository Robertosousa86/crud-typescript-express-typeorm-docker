# Criando um CRUD com Typescript, Express, TypeOrm e Mysql(Docker)

Um passo-a-passo para criação de uma API com as operações de crud(criar, ler, atualizar e deletar) utilizando:

- Node e Typescript:
- Express, para a criação e gerenciamento das rotas;
- TypeOrm, como Object-Relational Mapping (ORM);
- MySQl como Banco de dados, mas rodando em um container do Docker.

**_Obs: Todos os comandos são executados no sistema POP_OS(Linux)_**

## Primeiros passos:

- Primeiramente vamos criar um diretório que irá guardar o nosso código, vamos chama-lo de `crud-typeorm`, podemos cria-lo via terminal com o comando `mkdir crud-typeorm` e `cd crud-typeorm` para "entrarmos" nesse diretório. Dentro do diretório usamos o comando `code .` para abrirmos o projeto com o Visual Studio Code.

- Agora podemos utilizar o `git` para controlar o versionamento do nosso código e aproveitamos para criar o arquivo `.gitignore`, que contém os arquivos e pastas que devem ser ignorados no projeto, para isso vamos usar o `npx` que executa as bibliotecas do `npm`, rodamos o comando a seguir no terminal, que deve ser aberto na raiz do projeto:

```bash
npx gitignore node
```

Esse comando cria automaticamente um arquivo `.gitignore` com todos os arquivos básicos que devem ser ignorados em um projeto node.

Para mais informações sobre `git` e GitHub: https://github.com

## Iniciando o projeto e configurando o Typescript

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

### Adicionando o Typescript.

Existem duas maneiras básicas de iniciar um projeto com typescript, a primeira é instalando o Typescript localmente em nosso projeto. Utilizamos o comando `npm install typescript --save-dev`, assim o typescript será instalado como dependência de desenvolvimento, isso quer dizer que o `TS` será instalado apenas no projeto. Outra forma é instalar o Typescript como uma dependência global, isso significa que podemos utilizar o comando `tsc` em qualquer lugar. Para isso executamos o comando `npm install -g typescript`, nesse exemplo irei instalar o `Typescript` globalmente.

#### O que é `tsc`?

O compilador TypeScript (também conhecido como "tsc") é a espinha dorsal de muitos bundlers, plugins e ferramentas que funcionam com o TypeScript. Embora não invoquemos o tsc diretamente com frequência, configuramos como o tsc se comporta dentro dos bundlers(um padrão adotado para se escrever JavaScript modular no browser.) que usamos.

- Para termos certeza se o `tsc` foi instalado executamos o comando `tsc --v`, a saída deverá ser algo como:

```bash
Version 4.5.4
```

#### Setup com `tsconfig.json`

Mas o que é o arquivo `tsconfig.json`? Segundo a documentação oficial do Typescript: **_O arquivo tsconfig.json especifica os arquivos raiz e as configurações de compilação necessárias para o projeto._**

- Para criarmos esse arquivo digitamos o comando `tsc --init` no terminal. Ele irá criar um arquivo `tsconfig.json`, para esse exemplo não iremos utilizar todas as opções que foram geradas, vamos deixar o arquivos mais "clean" somente com o que for necessário para nós:

```json
{
  "compilerOptions": {
    "lib": ["es5", "es6"],
    "target": "ES2021",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

## Adicionando as primeiras dependências

Como primeiras dependências de desenvolvimento iremos instalar os seguintes pacotes via npm(ou yarn, se preferir):

- `ts-node`

  O `ts-node` é um pacote npm que permite ao usuário executar arquivos Typescript diretamente, sem a necessidade de pré-compilação usando o `tsc`.

- `@types/node`

  Os `@types` são extensões de pacotes do npm para que eles também tenham compatibilidade com o Typescript, com o pacote `@types/node` o node conseguirá entender a sintaxe do Typescript.

Para testar se nossas dependências foram instaladas corretamente vamos rodar um simples código que exibira um simpatico `Olá Typescript!`, para tanto vamos criar um `script` no nosso `package.json` para executa-lo:

```json
{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "scripts": {
    "start": "ts-node index.ts"
  }
```

Substituímos o script `test` por `start` passando o comando `ts-node index.ts` e criamos o arquivo `index.ts` na raiz do projeto, como esse código é apenas um teste para sabermos se o Node está reconhecendo o Typescript vamos escrever apenas um `console.log('Olá Typescript!');`

Para executarmos esse script rodamos o código `npm start` no terminal e se tudo der certo a saída deverá ser a frase `Olá Typescript!`.
