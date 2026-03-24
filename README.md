<h1 align="center"> ⚔️ Nioh Fan API Express ⚔️ </h1>

<h2> 📖 Índice 📖 </h2>

- Descrição do Projeto  
- Objetivo do Projeto  
- Contexto  
- Tecnologias Utilizadas  
- Andamento do Projeto  
- Funcionalidades  
- Regra de Negócio  
- Conceitos Aplicados  
- Como Executar a Aplicação  
- Desafios Encontrados  
- Desenvolvedores  

---

<h2> 🖋️ Descrição do Projeto 🖋️ </h2>

> A **Nioh Fan API Express** é uma aplicação back-end do tipo **CRUD**, desenvolvida com **Node.js e Express**, que permite a manipulação dinâmica de dados em arquivos JSON através dos métodos HTTP.

A API foi inspirada na lore do jogo *Nioh 1*, oferecendo uma estrutura para armazenar, consultar, atualizar e remover dados relacionados ao universo do jogo.

---

<h2> 🎯 Objetivo do Projeto 🎯 </h2>

O objetivo principal deste projeto é construir uma **API REST completa utilizando o framework Express**, aplicando boas práticas de desenvolvimento back-end e organização de código.

Além disso, o projeto busca:

- Consolidar conhecimentos em CRUD  
- Trabalhar com manipulação de dados em JSON  
- Aplicar conceitos de arquitetura em camadas  
- Criar uma base de API temática voltada ao universo gamer  

---

<h2> 🌎 Contexto 🌎 </h2>

Atualmente, não existem APIs públicas amplamente conhecidas baseadas no jogo *Nioh*.  

Diante disso, este projeto surge como uma proposta de:

> Criar uma API temática que permita explorar e manipular dados inspirados na lore do jogo.

A aplicação pode servir como base para projetos futuros como aplicações web, dashboards ou integrações com front-end.

---

<h2> 🚀 Tecnologias Utilizadas 🚀</h2>

<div>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/CORS-blue?style=for-the-badge&logo=web&logoColor=white">

</div>

---

<h2> 🚧 Andamento do Projeto 🚧 </h2>

<div>

![Badge Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=ORANGE&style=for-the-badge)

</div>

---

<h2> ✨ Funcionalidades ✨ </h2>

:heavy_check_mark: Listagem de dados via método **GET**  

:heavy_check_mark: Criação de novos registros via **POST**  

:heavy_check_mark: Atualização parcial de dados via **PATCH**  

:heavy_check_mark: Remoção de registros via **DELETE**  

:heavy_check_mark: Manipulação dinâmica de arquivos JSON  

:heavy_check_mark: Estruturação em arquitetura modular  

---

<h2> 🧠 Regra de Negócio 🧠 </h2>

A aplicação foi desenvolvida seguindo uma arquitetura em camadas, garantindo separação de responsabilidades e escalabilidade.

### 🧱 Estrutura da Aplicação

- **Controllers:** Responsáveis por receber e responder às requisições HTTP  
- **Routes:** Definem os endpoints da API  
- **Services:** Contêm a lógica de negócio  
- **Repositories:** Realizam a manipulação dos dados (JSON)  
- **Models:** Definem a estrutura dos dados  
- **Database:** Gerencia o acesso aos arquivos JSON  
- **Utils:** Funções auxiliares reutilizáveis  

---

### 🔄 Operações CRUD

✔️ **GET**  
- Retorna dados armazenados  

✔️ **POST**  
- Cria novos registros  

✔️ **PATCH**  
- Atualiza parcialmente os dados  

✔️ **DELETE**  
- Remove registros existentes  

---

### 📦 Persistência de Dados

- Os dados são armazenados em arquivos JSON  
- A API realiza leitura e escrita dinâmica nesses arquivos  
- As operações garantem consistência dos dados  

---

<h2> 📚 Conceitos Aplicados 📚 </h2>

Durante o desenvolvimento foram utilizados os seguintes conceitos:

- Criação de API com o framework Express  
- Manipulação dinâmica de JSON  
- Implementação de operações CRUD  
- Criação de interfaces e tipagem  
- Padronização de requisições e respostas  
- Arquitetura em camadas  
- Separação de responsabilidades  
- Organização modular de código  

---

<h2> 💨 Como Executar a Aplicação 💨 </h2>

1️⃣ Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>

```
2️⃣ Acesse a pasta do projeto:

```bash
cd nioh-fan-api

```

3️⃣ Instale as dependências:

```bash
npm install

```

4️⃣ Execute a aplicação:

```bash
npm run start:dev

```

ou

```bash
node server.js

```

5️⃣ Utilize ferramentas como Postman ou Insomnia para testar os endpoints da API.

<h2> 🧗‍♂️ Desafios Encontrados 🧗‍♂️ </h2>

O desenvolvimento do projeto trouxe desafios importantes:

- Estruturar corretamente uma API CRUD com Express
- Implementar uma arquitetura em camadas bem definida
- Garantir consistência na manipulação de arquivos JSON
- Padronizar requisições e respostas da API
- Trabalhar com múltiplas responsabilidades sem acoplamento excessivo
- Planejar uma base escalável para futuras evoluções (ex: banco de dados real)

Esses desafios contribuíram diretamente para o amadurecimento na construção de aplicações back-end robustas.

<h2> 💻 Desenvolvedores 💻</h2>

<img src="https://avatars.githubusercontent.com/u/140852220?v=4" width=100><br><sub>Fábio Lirio</sub>

<h3>🪙 Credits 🪙</h3>

- Node Boilerplate by Felipe Aguiar (https://github.com/felipeAguiarCode)