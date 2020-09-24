import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const agendamento = [];
// eslint-disable-next-line no-shadow
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const appointment = {
        id: uuid(),
        provider,
        date,
    };
    agendamento.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
