import { makeServer } from "../../src/mirage/server";

let server;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

const username = (value) => cy.get("#username").type(value).should("have.value", value);
const password = (value) => cy.get("#password").type(value).should("have.value", value);
const containsAndClick = (value) => cy.contains(value).click();

describe("Аутентификация и регистрация", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Успешная аутентификация", () => {
    cy.contains("Вход");
    username("admin");
    password("admin");
    containsAndClick("Логин");
    cy.contains("Загрузка");
    cy.contains("admin");
  });

  it("Переход на регистрацию - успешная регистрация - успешная аутентификация", () => {
    cy.contains("Вход");
    cy.contains("Создать новый аккаунт").click();
    cy.contains("Регистрация");
    cy.url().should("include", "/signup");
    username("test");
    password("test123");
    containsAndClick("Зарегистрироваться");
    cy.contains("Загрузка");
    containsAndClick("У меня уже есть аккаунт");
    cy.contains("Вход");
    cy.url().should("include", "/");
    username("test");
    password("test123");
    console.dir(server);
    containsAndClick("Логин");
    cy.contains("Загрузка");
    cy.contains("test");
  });
});
