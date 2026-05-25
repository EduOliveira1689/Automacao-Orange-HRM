# 🚀 Cypress Automation Project

Projeto de automação de testes End-to-End (E2E) utilizando Cypress e JavaScript.

O projeto foi desenvolvido com foco em boas práticas de automação, organização de testes e validação de fluxos críticos da aplicação OrangeHRM.

---

# 📌 Tecnologias utilizadas

- Cypress
- JavaScript
- FakerJS
- Page Objects Pattern

---

# 📂 Estrutura do projeto

```bash
cypress/
 ├── e2e/
 │   ├── dashboard/
 │   ├── login/
 │   └── recruitment/
 │
 ├── pages/
 │   ├── dashboardPage.js
 │   ├── loginPage.js
 │   └── recruitmentPage.js
 │
 ├── fixtures/
 └── support/
```

---

# ✅ Cenários automatizados

## Login

- Login com usuário válido
- Validação de acesso ao dashboard

## Recruitment

- Cadastro automatizado de candidatos
- Preenchimento dinâmico de formulário
- Upload de currículo
- Validação de cadastro realizado

## Dashboard

- Navegação para dashboard
- Validação de carregamento da página
- Verificação de elementos visíveis

---

# 🧪 Boas práticas utilizadas

- Estruturação utilizando Page Objects
- Separação de responsabilidades
- Organização modular dos testes
- Reutilização de seletores
- Geração de dados dinâmicos com FakerJS

---

# ▶️ Como executar o projeto

## Instalar dependências

```bash
npm install
```

## Executar Cypress

```bash
npx cypress open
```

## Executar testes em modo headless

```bash
npx cypress run
```

---

# 📌 Objetivo do projeto

Projeto desenvolvido para prática e aprimoramento de conhecimentos em automação de testes, validação de fluxos funcionais e Quality Assurance (QA).
