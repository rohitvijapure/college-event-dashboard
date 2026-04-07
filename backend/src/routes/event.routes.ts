import { Router } from 'express';
import { eventController } from '../controllers/event.controller';
import { isAuthenticated } from '../middleware/auth';

const router = Router();

router.use(isAuthenticated);

router.get('/', eventController.getEvents);
router.post('/scrape', eventController.triggerScrape);

export default router;
