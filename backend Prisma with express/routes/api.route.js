const router = require('express').Router();
const { PrismaClient} = require('@prisma/client')
const cors = require('cors');
const { response } = require('express');
const express = require('express');

const prisma = new PrismaClient();

router.use(cors());
router.use(express.json());

router.post('/login', async (req, res, next) => {

  try {

    const email = req.body.Email
    const senha = req.body.Senha
    const EMAILPRO = await prisma.usuarios.findMany({
      where: {
        Email: email,
      },
    })
    const SENHAPRO = await prisma.usuarios.findMany({
      where: {
        Senha: senha,
      },
    })
    if (EMAILPRO == 0) {
      res.send("você ainda n tem cadastro")
    } else if (SENHAPRO) {
      res.send("senha errada")
    }
  } catch (error) {
    next(error)
  }
});

router.post('/Cadastro', async (req, res, next) => {

  try {
    const email = req.body.Email
    const senha = req.body.Senha
    const senhaV = req.body.SenhaV
    const nome = req.body.Nome
    if (senha != senhaV) {
      res.send("Senhas não conferem")
    } else {
     const usuarios = await prisma.usuarios.create({
        data: {
          Nome: nome,
          Email: email,
          Senha: senha,
        },
      })
      res.send("criado")
    }



  } catch (error) {
    next(error)
  }
});

module.exports = router;
