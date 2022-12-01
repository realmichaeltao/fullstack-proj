const express = require('express');
const app = express();
const port = 3000;

app.use( express.json() );

app.listen(
    port,
    () => console.log(`it's alive on http://localhost:${port}`)
)

app.post('/job/:id', (req, res) => {
    const { id } = req.params;
    const company = req.body.company;
    const link = req.body.link;
    const description = req.body.description;
    const requirement = req.body.requirement;

    if (!company || !link || !description || !requirement) {
        res.status(400).send('Bad Request');
    }

    res.send({ 
        id : id,
        job : company,
        link : link,
        description : description,
        requirement : requirement,
        message : "This job is successfully posted!"
        });
});

app.put('/job/:id', (req, res) => {
    const { id } = req.params;
    const company = req.body.company;
    const link = req.body.link;
    const description = req.body.description;
    const requirement = req.body.requirement;

    if (!company || !link || !description || !requirement) {
        res.status(400).send('Bad Request');
    }

    res.send({ 
        id : id,
        job : company,
        link : link,
        description : description,
        requirement : requirement,
        message : "This job is successfully updated!"
        });
});


app.delete('/job/:id', (req, res) => {
    const { id } = req.params;

    res.send({ 
        id : id,
        message : "This job is successfully deleted!"
        });
});

