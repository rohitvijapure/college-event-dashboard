import express from 'express';
type Request = express.Request;
type Response = express.Response;

export const authController = {
  login: (req: Request, res: Response) => {
    res.redirect('/auth/google');
  },
  callback: (req: any, res: Response) => {
    res.json({ message: 'Authentication successful', user: req.user });
  },
  logout: (req: any, res: Response) => {
    req.logout(() => {
      res.json({ message: 'Logged out successfully' });
    });
  },
  me: (req: any, res: Response) => {
    res.json({ user: req.user });
  }
};
