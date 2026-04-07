import { Router } from 'express';
import { calendarController } from '../controllers/calendar.controller';
import { isAuthenticated } from '../middleware/auth';

const router = Router();

router.use(isAuthenticated);

router.post('/sync', calendarController.syncEvent);

export default router;
