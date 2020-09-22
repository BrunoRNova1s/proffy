import express from 'express'

const app = express();

app.get('/users', () => {
    console.log('acess route')
})

app.listen(3333)