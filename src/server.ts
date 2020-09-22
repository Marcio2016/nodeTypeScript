import express from 'express';

const app = express();

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server Iniciado!');
});
