# NLW Setup - Habits

![image](https://user-images.githubusercontent.com/64651224/213896950-cc3fe528-0b2b-427b-aa77-e41c2000fe9a.png)



## Sobre projeto
- Criado durante o primeiro NLW de 2023, o projeto consiste em um monitorador de hábitos, onde o usuário pode acompanhar o cumprimento de suas metas ao longo do ano.
Para isso, ele pode cadastrar um novo hábito e escolher sua recorrência e pode diariamente registrar se realizou aquela atividade ou não.



## Tecnologias
<div align="center"><img src="https://skillicons.dev/icons?i=ts,react,tailwind,nodejs,vite,prisma" alt="tecnologias" /></div>

### Web
- React
- Typescript
- TailwindCSS
- Vite
### Server
- Node JS
- Typescript
- Fastify
- Prisma
- SQLite
### Mobile
- React Native
- TailwindCSS
- Typescript
- Expo


## Documentação API
### Resumo dos hábitos possíveis e completos ao longo do ano
```
GET /summary
```
---
### Cadastrar novo hábito
```
POST /habits
```
Exemplo do body em `JSON`
```
{
  "title": "Fazer exercício",
  "weekDays": [0,1,2,3]
}
```
| Campo    | Tipo       | Descrição                                                          |
| -------- | ---------  | ------------------------------------------------------------------ |
| title    | `string`   | Qual é o hábito que você quer cadastrar                            |
| weekDays | `number[]` | Recorrência do hábito, Array em que cada hábito é um dia na semana |
---

### Ver hábitos possivei e completos de um dia
```
GET /day?{date}
```

| Campo    | Tipo       | Descrição                        |
| -------- | ---------  | -------------------------------- |
| date     | `string`   | Data do dia que você quer buscar |
---
### Mudar status do hábito
```
PATCH /habits/{id}/toggle
```
| Campo    | Tipo       | Descrição                                 |
| -------- | ---------  | ----------------------------------------- |
| id       | `string`   | ID do hábito que você quer mudar o status |
---
## Utilização

### Clonar o projeto
```
git clone git@github.com:bernardobfg/NLW-Setup.git
```

#### Back-end
###### Entrar na pasta (partindo da raiz)
```
cd server
```
###### Instalar dependências
```
npm i
```
###### Executar o projeto
```
npm run dev
```
---
#### Front-end (web)
###### Entrar na pasta (partindo da raiz)
```
cd web
```
###### Instalar dependências
```
npm i
```
###### Executar o projeto
```
npm run dev
```
---
#### Front-end (mobile)
###### Entrar na pasta (partindo da raiz)
```
cd mobile
```
###### Instalar dependências
```
npm i
```
###### Executar o projeto
```
npx expo start
```

