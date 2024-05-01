

# BackEnd Escola

Fiz esse projeto com ajuda de um curso de JavaScript, para esse projeto tive que usar Eslint (formatação do código), Express (backend), JWT (para verificação do usuário), Sequelize (para criação dos modelos e do banco de dados), Express-Validator (junto com o sequelize para validar as entradas) e ATENÇÃO!! nesse trabalho foi usado o MariaDB, planejo fazer um BackEnd com MySQL padrão no futuro


# Como Usar

 1. Tenha o **node** e o **mariadb** instalados
 2.  Baixe as dependências
```
 > npm install   
```
 
3. Crie um arquivo **.env** com base no **.env_exemplo** disponibilizado:
```
DATABASE= Coloque o nome do seu esquema
DATABASE_HOST= Coloque o endereço do provedor SGBD (mariadb)
DATABASE_PORT= 3306 (Porta MySQL/Mariadb)
DATABASE_USERNAME= Nome do usuario com permissoes para acesso ao SGBD
DATABASE_PASSWORD= Senha do usuario


TOKEN_SECRET= Crie uma string aleatoria para gerar os JWT
TOKEN_EXPIRATION=7d
```
    
4. Inicialize o backend
```
> npm run dev
```
 5. Instale o **Insomnia** e importe o arquivo disponibilizado na pasta **./Insomnia** para ter acesso ao gerenciador de requisições 
