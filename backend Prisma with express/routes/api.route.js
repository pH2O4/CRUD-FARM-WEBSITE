const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const cors = require('cors');
const express = require('express');

const prisma = new PrismaClient

router.use(cors());
router.use(express.json());

router.get('/usuarios', async (req, res, next) => {
  
  try {
    const usuarios = await prisma.Usuarios.findMany({})
    const { Email } = req.body
    const { Senha } = req.body
    if (usuarios == 0) {
      const resposta = 'resposta usuario sem cadastro'
      res.send(resposta)
    } else if( Email == true & Senha == false) {
      console.log("Verifique sua senha")
    } else {
      console.log(usuarios)
    }
  } catch (error) {
    next(error)
  }
});

module.exports = router;
