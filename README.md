# Big Game Survey 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/fabiosi/dspesquisa/blob/master/LICENSE) 

# Sobre o projeto

https://sds1-fabiosi.netlify.app

Big Game Survey é uma aplicação full stack web e mobile construída durante a 1ª edição da **Semana DevSuperior** (#sds1), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em uma pesquisa de preferência de games, onde os dados são coletados no app mobile, e depois são listados no app web, que também apresenta um dashboard com gráficos baseados nestes dados.

## Layout mobile
![Mobile 1](https://github.com/fabiosi/dspesquisa/blob/master/front-mobile/assets/mobile1.png) ![Mobile 2](https://github.com/fabiosi/dspesquisa/blob/master/front-mobile/assets/mobile2.png)

## Layout web
![Web 1](https://github.com/fabiosi/dspesquisa/blob/master/front-web/src/assets/web1.png)

![Web 2](https://github.com/fabiosi/dspesquisa/blob/master/front-web/src/assets/web2.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/fabiosi/dspesquisa/blob/master/front-web/src/assets/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/fabiosi/dspesquisa

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/fabiosi/dspesquisa

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Fábio Farias Moreira

https://www.linkedin.com/in/fabiosi/
