
import { test, expect } from '@playwright/test';

test('Login - Deve apresentar 419 Page Expired', async ({ page }) => {

  // Acessa a página de login
  await page.goto('https://www.blazedemo.com/login');

  // Preenche o campo de e-mail
  await page.getByLabel('E-Mail Address').fill('vinicius.qa@example.com');

  // Preenche o campo de senha
  await page.getByLabel('Password').fill('Teste@123');

  // Clica no botão Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Valida a mensagem apresentada após a tentativa de login
  await expect(page.locator('body')).toContainText(/419\s*Page Expired/i);

});
