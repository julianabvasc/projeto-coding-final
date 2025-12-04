📄 README – Backend PI: Agrosustenta (Sistema de Gerenciamento)

Este repositório contém o backend do projeto Agrosustenta, focado no gerenciamento de Armazéns, Distribuição, Lotes, Sementes e Relacionamentos entre entidades.
Aqui você encontra um CRUD completo, arquitetura modular e APIs REST organizadas no padrão corporativo.

💡 Visão Geral

O projeto é uma API REST desenvolvida em Node.js + Express + MySQL, responsável por gerenciar os dados centrais da plataforma Agrosustenta.
A aplicação implementa CRUD em todas as entidades, incluindo tabelas com chave primária composta, chaves estrangeiras e relacionamento M:N.

Entidades Principais

Armazém

Cooperativa

Distribuição

cadastroDeLote

Estoque

Sementes

Rastreio

Distribuicao_Armazem (tabela de junção M:N)

⚙️ Tecnologias Utilizadas
Categoria	Tecnologia	Versão
Linguagem	JavaScript	ES6+
Runtime	Node.js	16+
Framework	Express.js	Última estável
Banco de Dados	MySQL	8.0
Driver	mysql2	Última estável
Utilidades	nodemon, cors	Estáveis
Gerenciador	npm ou yarn	—
Ferramentas	VS Code, Insomnia, MySQL Workbench/DBeaver	—


🌐 Endpoints Principais (Padrão REST CRUD)

Endpoint base:

http://localhost:3000/api

1. Autenticação (Sugerida)
Método	Endpoint	Função
POST	/auth/login	Autentica e retorna token

Exemplo (POST):

{
  "usuario": "admin",
  "senha": "123"
}

2. Armazém – Exemplo de CRUD
Método	Endpoint	Função
GET	/armazens	Lista todos
GET	/armazens/{id}	Busca por ID
POST	/armazens	Cria novo
PUT	/armazens/{id}	Atualiza
DELETE	/armazens/{id}	Remove

Corpo (POST/PUT):

{
  "nome": "Armazém Exemplo"
}

3. Endpoints de Outras Entidades
Entidade	Base Endpoint
Cooperativa	/cooperativas
Distribuição	/distribuicao
cadastroDeLote	/lotes
Estoque	/estoque
Sementes	/sementes
Rastreio	/rastreio
Distribuicao_Armazem	/distribuicao-armazem (DELETE via query string)
🚀 Como Iniciar
1. Clone o Repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git

2. Configure o Banco de Dados

Crie o banco: agrosustenta

Execute o DER + inserts iniciais

3. Instale as Dependências
cd backend
npm install

4. Inicie o Servidor
npm start
# ou
nodemon server.js

5. Teste com Insomnia

Envie requisições para:

http://localhost:3000/api

6. Frontend

Abra frontend/index.html e confira se o JS está apontando para:

http://localhost:3000/api
