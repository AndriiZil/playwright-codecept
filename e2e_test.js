Feature('Zero Bank Application - E2E Tests');

Before(({ I }) => {
  console.info('DEFORE HOOK');
  I.amOnPage('http://zero.webappsecurity.com/index.html');
});

After(({ I }) => {
  console.info('AFTER HOOK');
});

Scenario('login Test - Negative', ({ I, LoginPage }) => {
  I.amOnPage('http://zero.webappsecurity.com/index.html');
  I.click('#signin_button');
  I.seeElement('#login_form');
  // I.fillField('#user_login', 'invalid username');
  // I.fillField('#user_password', 'invalid password');
  // I.click('.btn-primary');
  LoginPage.submitLogin('invalid username', 'invalid password');
  LoginPage.assertLoginFormIsVisible();

  I.seeElement('.alert-error');
});
