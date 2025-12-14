## Sobre

Este projeto é uma aplicação web desenvolvida utilizando **Laravel** no backend e **Vue.js** no frontend.  
O objetivo é permitir que qualquer pessoa consiga clonar o repositório e rodar o projeto localmente para testes e estudos.

## Requirements

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- PHP
- Laravel via Composer
- NPM ou Yarn
- Banco de dados (PostgreSQL)

## Aplicando projeto localmente

Clone o repositório para sua máquina local:
```sh
git clone https://github.com/Estagio-UniFil/estagio-VitorHugoOliveiraPaloco.git
cd estagio-VitorHugoOliveiraPaloco/code
```

Crie o arquivo de ambiente e configure as credenciais do banco de dados PostgreSQL::
```sh
cp .env.example .env
```

Gere a chave da aplicação Laravel
```sh
php artisan key:generate
```

Execute as migrations para criar as tabelas com os dados padrão:
```sh
php artisan migrate:fresh --seed
```

Inicie a aplicação (rode os comandos em terminais separados):
```sh
php artisan serve
```
```sh
npm run dev
```
