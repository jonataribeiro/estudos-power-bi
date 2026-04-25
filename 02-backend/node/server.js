// Antigo:
/*const express = require("express")*/

// Novo:

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}) // http://localhost:3000/usuarios/


app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        },
    })

    res.status(201).json(user)
}) // http://localhost:3000/usuários/valorQualquer


app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        },
    })// http://localhost:3000/usuários

    res.status(201).json({ message: "Usuário criado com sucesso!" }) // Como estou dentro do ambiente JavaScript, posso usar o json diretamente
})


app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })// http://localhost:3000/usuários/valorQualquer

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});


// request = requisição (o que o usuário está pedindo)
// response = resposta (o que o servidor está respondendo)

//http://localhost:3000/usuarios


/*
ok - CRIAR
ok - LER
ok - ATUALIZAR
ok - DELETAR
CRUD
CREATE
READ
UPDATE
DELETE
*/

