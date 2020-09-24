import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();
interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

const agendamento: Appointment[] = [];
// eslint-disable-next-line no-shadow
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date));

    // eslint-disable-next-line prettier/prettier
    const findAppointmentInSameDate = agendamento.find(agenda => isEqual(parsedDate,agenda.date));

    if (findAppointmentInSameDate) {
        // eslint-disable-next-line prettier/prettier
        return response.status(400).json({ message: 'This appointment is already booked' });
    }
    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };
    agendamento.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
