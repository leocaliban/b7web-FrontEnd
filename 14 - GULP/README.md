# Gulp

## Instalação

* Instalar o [GULP](https://gulpjs.com/):
  
  `npm install gulp-cli --global`

* Instalar o GULP no projeto:
  
  `npm install gulp --save-dev` 
  > *verificar instalação `gulp --v`*

----------
## Criando tasks

Criar o arquivo "gulpfile.js" na pasta do projeto

* Criando e exportando uma task:
  
  ```javascript
  
  function defaultTask(callback) {
    callback();
  }
  exports.default = defaultTask;
  ```
* Para executar a task criada, digite `gulp`
  
  * Para executar mais de uma task:
  `gulp TASK1 TASK2...`
  * Para executar task específica:
  `gulp TASK10`

  > *para listar todas as tasks `gulp --tasks`.*


----------