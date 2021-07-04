import { Router } from 'express';
import multer from 'multer';
import { multerConfig } from './config/multer';

import FilesControllers from './controllers/FilesControllers';

const router = Router();

router.post('/posts', multer(multerConfig).single('file'), FilesControllers.store);

export default router;
