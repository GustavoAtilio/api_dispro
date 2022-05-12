# Descrição

## Projeto API Dispro

## infra-estrutura de banco de dados

```bash
# Baixando imagem Postgres
$ docker pull postgres

# Sob container postgres
$ docker run --name api_dispro -e POSTGRES_PASSWORD=e3fYnnX6SefCpPjM -p 5432:5432 -d postgres

```

## Instalação do Nest

```bash
# Baixando imagem Postgres
$ docker pull postgres

# Sob container postgres
$ docker run --name api_dispro -e POSTGRES_PASSWORD=e3fYnnX6SefCpPjM -p 5432:5432 -d postgres

```

## Instalação das dependências

```bash
$ npm install
```

## rodando o projeto

```bash
# modo de desenvolvimento
$ npm run start

# modo de produção
$ npm run start:prod
```

### Caso o banco e api não seja iniciado na mesma máquina deve ser alterado o arquivo de configuração, localizado em app.module.ts 
```
 TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password:'e3fYnnX6SefCpPjM',
      database:'postgres',
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

```


## Rota de Login API

```
# Rota POST: 'http://localhost:3000/users/login'
Envio:
{
	"userName":"",
	"password":""
}

Resposta caso solicitação for ok:
{
  "message": "Usuário Autenticado..",
  "success": true,
  "data": {
    "id": "22e8da44-5dab-4491-8a65-70ca647638c1",
    "name": "user",
    "email": "user@gmail.com"
  },
  "error": null
}

OBS: userName poder ser E-mail ou nome ou número

```

## Rota de Cadastro API

```
# Rota POST: 'http://localhost:3000/users/create'
{
	"name":"",
	"email":"",
	"number":"",
	"password":""
}

Resposta caso solicitação for ok:
{
  "message": "Usuário Criado com Sucesso.",
  "success": true,
  "error": null
}

```

## Resposta de Erro

```
{
  "message": "Verificar os dados.",
  "success": false,
  "data": null,
  "error": [
    "Nome do usuário já existe.",
    "Email do usuário já existe.",
    "Número do usuário já existe."
  ]
}

```


## Manter contato
- Author - [Gustavo Atilio](https://www.linkedin.com/in/gustavo-dal-canton-921816170/)


## License

[MIT licensed](LICENSE).
