const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const cors = require('cors');
const { response } = require('express');
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
      res.send("usuário sem cadastro")
    } else if (Email == true & Senha == false) {
      res.send("Verifique sua senha")
    } else {
      console.log(usuarios)
    }
  } catch (error) {
    next(error)
  }
});

router.post('/usuarios', async (req, res, next) => {

  try {
    const { Email } = req.body
    const { Senha } = req.body
    const { Numero } = req.body
    const { SenhaV } = req.body
    if(Senha != SenhaV){
      res.send("Senhas não conferem")
    }
    const usuarios = await prisma.Usuarios.create({
      data: 
    })


  } catch (error) {
    next(error)
  }
});

module.exports = router;
