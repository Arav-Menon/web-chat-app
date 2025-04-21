import express from "express"

const app  = express();

app.post('/chats', (req, res) => {
    res.send({
        message : 'All is fine'
    })
})

app.listen(3000)