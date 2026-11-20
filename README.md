# BlazeDemo Login - Playwright

Projeto desenvolvido para a Atividade 08, com o objetivo de automatizar o processo de login do site BlazeDemo utilizando JavaScript e Playwright.

## Tecnologias
- JavaScript
- Node.js
- Playwright

## Site utilizado
https://www.blazedemo.com

## Cenário automatizado

- Acessar a página de login.
- Preencher e-mail e senha.
- Clicar em Login.
- Validar a mensagem `419 Page Expired`.

**Observação:** A mensagem 419 é o resultado esperado, conforme as instruções da atividade.

## Executar o projeto

Instalar as dependências:

```bash
npm install
```

Instalar o navegador:

```bash
npx playwright install chromium
```

Executar os testes:

```bash
npx playwright test
```

Executar com navegador visível:

```bash
npx playwright test --headed
```