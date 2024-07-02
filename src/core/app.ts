import express, { Request, Response, NextFunction } from 'express';
import userRoutes from '../routes/userRoutes';
import ApiError from '../entities/ApiError';

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

// Error handling middleware
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

