# LTask-2.0
É uma ferramenta desenvolvido para ajudar as pessoas (de forma individual) a organizar suas atividades priorizando as mais urgentes.
<p>
    <img src="projeto-demo.gif"/>
</p>

# Status do projeto 

- [ ] Em desenvolvimento

# Funcionalidades 

- [x] Cadastro de usuário
- [x] Validação do cadastro por meio de email de confirmação
- [x] Login usuário
- [x] Adicionar tarefas
- [x] Adicionar projetos
- [x] Adicionar categoria da tarefa
- [x] Adicionar foto do perfil
- [ ] Agendar data de inicio da tarefa
- [ ] Enviar email de lembrete de que a tarefa vai começar
- [ ] Enviar notificação pelo aplicativo web usando firebase

# Pré-requisito

- [x] Docker - você pode saber mais <a href="https://www.docker.com/get-started/">aqui</a>

# Instalação

1. Clona o projeto no diretório da tua maquina ` git clone https://github.com/claudionhangapc/LTask-2.0.git`
2. Entra na pasta do projeto `cd LTask-2.0`
3. Entra na pasta app do projeto `cd app` e executa o seguinte instrução na linha de comando `npm install` para installar as dependencia do frontend.
4. Volta para pasta raiz do projeto `cd ..` e entra na pasta api `cd api` e executa o seguinte instrução na linha de comando `npm install` para installar as dependencia do backend e `mkdir uploads` para criar pasta responsavel pelos armazenamento de arquivos
5. Volta novamente para pasta raiz do projeto `cd ..` e executa o seguinte comando `docker-compose up` para construir as imagens e subir o projeto.
6. Execute o seguinte comado `docker ps` para ver quais container estão em execução.
7. Executa o seguinte comando `docker exec -i -t ltask-20-api-1 /bin/bash` ou no windows > git bash  `winpty docker exec -it ltask-20-api-1 sh` para abrir o shell do container da api em execução, onde 'ltask-20-api-1' é o nome do container.
8. Com o shell do container da api aberto, rodamos os comandos `npx knex migrate:latest` e `npx knex seed:run` criar e preencher as tabelas do nosso banco de dados.
8. Agora so digitar `http://localhost:8000/` no navegador para abir o projeto.

# Tecnologias 

- [x] Node
- [x] Vue
- [x] Postgres
- [x] Knexjs
- [x] Fastify
- [x] Docker
- [x] Vuetify
- [x] Nuxtjs

# Documentação 

- Back-end do projeto
    - [api](https://github.com/claudionhangapc/LTask-2.0/tree/main/api)

- Front-end do projeto
    - [app](https://github.com/claudionhangapc/LTask-2.0/tree/main/app)
