const express = require('express'),
      router  = express.Router();
var   db      = require("../models");
var helpers = require("../helpers/todos")

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoID')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports = router;