import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// READALL
router.get('/', alunoController.readAll);
// READ
router.get('/:id', alunoController.read);
// CREATE
router.post('/', loginRequired, alunoController.create);
// DELETE
router.delete('/:id', loginRequired, alunoController.delete);
// UPDATE
router.put('/:id', loginRequired, alunoController.update);

export default router;
