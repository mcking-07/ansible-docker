const app = require('express')();

app.get('/', (req, res ) =>
    res.json(process.env) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));
