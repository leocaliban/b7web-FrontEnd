# Package Managers

## NPM

### Instalação

* Instalar o [node](https://nodejs.org/en/).
  
  *verificar versão `node -v` e `npm -v`*

----------
### Iniciar novo pacote

* Executar `npm init`.
* Preencher questionário no terminal 
  
  1. package name:
  2. version: (1.0.0) *default*
  3. description:
  4. entry point: (index.js) *default*
  5. test command:
  6. git repository:
  7. keywords:
  8. author:
  9. license: (ISC) *default*

* Criar **index.js** em um repositório src.

----------
#### Instalar um pacote

* Executar `npm install NOME_DA_LIB`.

    *Alias para instalação de pacotes* `i`, `add`.

----------
#### Atualizar um pacote

* Atualizar todas as dependências do projeto `npm update`.
* Atualizar uma de dependência específica `npm update NOME_DA_LIB`.

----------
#### Remover um pacote

* Executar `npm unistall NOME_DA_LIB` 

    *Alias para remover pacotes* `un`, `unlink`, `remove`, `rm`, `r`.

