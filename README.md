# 🌱 AgroSustenta

O **Agro Sustenta** é uma **plataforma web** para produtores rurais e cooperativas com foco na **rastreabilidade, controle e sustentabilidade** no uso e distribuição de sementes. Nosso objetivo é **centralizar informações agrícolas** como processos de fecundação, clima, características de sementes e rastreamento completo da distribuição para **melhorar o planejamento de plantio** e **reduzir perdas**.

---

## 👩‍💻 Equipe desenvolvedora

* **Dayane Oliveira**
* **Ingrid Isabelle**
* **Juliana Vasconcelos**
* **Julliane Valentin**
* **Ludmilla Arlane**

---

## ⚙️ Tecnologias utilizadas

O projeto foi construído como uma aplicação Full-Stack, utilizando o seguinte stack de tecnologias:

### 🌐 Frontend

| Tecnologia | Função Principal |
| :--- | :--- |
| **HTML5** | Estrutura e marcação do conteúdo da web. |
| **CSS3** | Estilização, layout e design responsivo. |
| **JavaScript** | Lógica de interação do lado do cliente e comunicação com a API. |

### 💻 Backend e banco de dados

| Tecnologia | Função Principal |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript do lado do servidor. |
| **Express.js** | Framework para construir a API REST que conecta o frontend ao banco de dados. |
| **MySQL** | Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) para persistência e gestão dos dados do sistema de sementes. |

---

## 💡 Funcionalidades principais

O sistema **AgroSustenta** oferece um conjunto de funcionalidades essenciais para o gerenciamento de sementes:

* **Cadastro de sementes e lotes:** registro detalhado de cada tipo de semente e dos lotes recebidos, incluindo espécie, quantidade, e validade.
* **Gestão de armazém e estoque:** controle físico e lógico do local de armazenamento e das entradas/saídas de lotes.
* **Registro de distribuição:** criação de pedidos de saída de sementes para entrega.
* **Rastreamento completo:** acompanhamento do percurso da semente desde o armazém até o destinatário final.
* **Validação por cooperativa:** confirmação e finalização do processo de entrega pela organização parceira.

---

## 🔄 Fluxo de dados simplificado

O fluxo de dados da aplicação segue o modelo Full-Stack tradicional, integrando as camadas de apresentação, lógica de negócios e persistência:

1.  **Frontend (HTML/CSS/JS):** coleta dados do usuário ou solicita dados para exibição.
2.  **Comunicação (JavaScript):** envia requisições HTTP como `GET`, `POST` para a API.
3.  **Backend (Node.js/Express.js):** recebe a requisição, executa a lógica de negócios e conecta-se ao **MySQL** para realizar a operação.
4.  **Banco de dados (MySQL):** armazena e retorna os dados.
5.  **Resposta:** o backend envia a resposta de volta ao frontend para **atualizar a interface**.

---

## 🚀 Como executar

Para rodar este projeto localmente, siga os passos abaixo:

1.  Clone o repositório;
2.  Instale as dependências do Node.js/Express (npm install);
3.  Configure o banco de dados MySQL e as credenciais de conexão no backend;
4.  Inicie o servidor Node.js/Express;
5.  Abra o arquivo index.html no navegador.
