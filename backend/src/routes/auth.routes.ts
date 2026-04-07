import { Router } from 'express';
import passport from 'passport';
import { authController } from '../controllers/auth.controller';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.events'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  authController.callback
);

router.get('/logout', authController.logout);
router.get('/me', authController.me);

export default router;
