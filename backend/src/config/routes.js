const express = require('express');

module.exports = function(server) {
  //Rotas API
  const router = express.Router();
  server.use('/api', router);

  //Rotas TODO
  const todoService = require('../api/todo/todoService');
  todoService.register(router, '/todos')
}