# Backend PI – Agrosustenta

Este repositório contém o backend do projeto **Agrosustenta**, desenvolvido em Node.js + Express com MySQL.  
O objetivo é gerenciar Armazéns, Cooperativas, Distribuição, Lotes, Estoque, Sementes e Relacionamentos entre entidades, utilizando CRUD completo e arquitetura modular.

---

## 1. Visão Geral

O sistema implementa:

- API REST completa
- CRUD em todas as entidades
- Modelagem com chaves compostas e estrangeiras
- Relacionamento M:N (Distribuicao_Armazem)
- Estrutura organizada por módulos de rotas

---

## 2. Tecnologias Utilizadas

| Categoria       | Tecnologia | Versão |
|-----------------|------------|--------|
| Linguagem       | JavaScript | ES6+   |
| Runtime         | Node.js    | 16+    |
| Framework       | Express.js | Estável |
| Banco de Dados  | MySQL      | 8.0    |
| Driver          | mysql2     | Estável |
| Utilitários     | nodemon, cors | — |
| Gerenciador     | npm ou yarn | — |
| Ferramentas     | VS Code, Insomnia, DBeaver/MySQL Workbench | — |

---


## 3. Endpoints da API (Padrão REST)

O endpoint base para todas as rotas é:

http://localhost:3000/api/

## 3.1 Autenticação
Método	Endpoint	Função
POST	/auth/login	Autentica e retorna token

Exemplo de corpo:

{
  "usuario": "admin",
  "senha": "123"
}

## 3.2 Armazém (CRUD Completo)

| Método | Endpoint       | Função                  |
| ------ | -------------- | ----------------------- |
| GET    | /armazens      | Lista todos os armazéns |
| GET    | /armazens/{id} | Busca por ID            |
| POST   | /armazens      | Cria novo armazém       |
| PUT    | /armazens/{id} | Atualiza armazém        |
| DELETE | /armazens/{id} | Remove armazém          |

Exemplo de corpo (POST/PUT):

{
  "nome": "Armazém Central"
}

## 3.3 Outros Recursos

| Entidade             | Endpoint Base         |
| -------------------- | --------------------- |
| Cooperativa          | /cooperativas         |
| Distribuição         | /distribuicao         |
| Lotes                | /lotes                |
| Estoque              | /estoque              |
| Sementes             | /sementes             |
| Rastreio             | /rastreio             |
| Distribuicao_Armazem | /distribuicao-armazem |


## 4. Como Iniciar o Projeto

4.1 Clonar o Repositório

*git clone https://github.com/SEU-USUARIO/SEU-REPO.git*

4.2 Configurar o Banco de Dados

4.3 Criar o banco chamado agrosustenta

4.4 Executar o script de criação das tabelas

4.5 Executar os inserts iniciais (se aplicável)

*cd backend*

*npm install*


4.6 Iniciar o Servidor


*npm start*


ou

*nodemon server.js*

4.7 Testar os Endpoints

Utilize o Insomnia ou Postman enviando requisições para:

*http://localhost:3000/api*

4.8 Frontend

Abra o arquivo:

*frontend/index.html*


E certifique-se de que a URL da API está configurada como:

*http://localhost:3000/api*
