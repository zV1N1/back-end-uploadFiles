import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { FileRepositories } from '../repositories/FilesRepositories';

class FilesControllers {
  async store(req: Request, res: Response) {
    const files = req.file;

    const fileRepository = getCustomRepository(FileRepositories);

    const post = fileRepository.create({
      name: files?.originalname,
      size: files?.size,
      key: files?.key,
      url: '',
    });

    await fileRepository.save(post);

    return res.json(post);
  }
}

export default new FilesControllers();
