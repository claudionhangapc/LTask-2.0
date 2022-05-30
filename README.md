# LTask-2.0
É uma ferramenta desenvolvido para ajudar as pessoas (de forma individual) a organizar suas atividades priorizando as mais urgentes.
<p>
    <img src="projeto-demo.gif"/>
</p>

# Pré-requisito

- [x] Docker - você pode saber mais <a href="https://www.docker.com/get-started/">aqui</a>

# Instalação

1. Clona o projeto no diretório da tua maquina. `https://github.com/claudionhangapc/LTask-2.0.git`
2. Entra na pasta do projeto `cd LTask-2.0`
3. Entra na pasta app do projeto `cd app` e executa o seguinte instrução na linha de comando `npm install` para installar as dependencia do frontend
4. Volta para pasta raiz do projeto `cd ..` e entra na pasta api `cd api` e executa o seguinte instrução na linha de comando `npm install` para installar as dependencia do backend e `mkdir uploads` para criar pasta responsavel pelos armazenamento de arquivos
5. Volta novamente para pasta raiz do projeto `cd ..` e executa o seguinte comando `docker-compose up` para construir as imagens e subir o projeto.
6. Execute o seguinte comado `docker ps` para ver quais container estão em execução
```bash
CONTAINER ID   IMAGE          COMMAND                  CREATED       STATUS       PORTS                              NAMES
5331e40b1a2c   ltask-20_api   "docker-entrypoint.s…"   5 weeks ago   Up 2 hours   0.0.0.0:3000->3000/tcp             ltask-20-api-1
0bd12faa7b44   postgres       "docker-entrypoint.s…"   5 weeks ago   Up 2 hours   0.0.0.0:5433->5432/tcp             ltask-20-postgres-1
76ba9731754e   ltask-20_app   "docker-entrypoint.s…"   5 weeks ago   Up 2 hours   3000/tcp, 0.0.0.0:8000->8000/tcp   ltask-20-app-1
``` 
7. Executa o seguinte comando `docker exec -i -t ltask-20-api-1 /bin/bash` ou no windows > git bash  `winpty docker exec -it ltask-20-api-1 sh` para abrir o shell do container da api em execução, onde 'ltask-20-api-1' é o nome do container
8. Com o shell do container da api aberto, rodamos os comandos `npx knex migrate:latest` e `npx knex seed:run` criar e preencher as tabelas do nosso banco de dados.
8. Agora so digitar `http://localhost:8000/` no navegador para abir o projeto.

# Documentação 

- Back-end do projeto
    - [API](https://github.com/claudionhangapc/LTask-2.0/tree/main/api)

- Front-end do projeto
    - [APP](https://github.com/claudionhangapc/LTask-2.0/tree/main/app)
