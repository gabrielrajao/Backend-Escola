import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// READALL (Não existe em uma situação real, feito apenas para completar o CRUD)
router.get('/', userController.readAll);

// READ (Não existe em uma situação real, feito apenas para completar o CRUD)
router.get('/:id', userController.read);

// CREATE
router.post('/', userController.create); // Liberado para todos (Qualquer um pode criar um usuário)

// UPDATE
router.put('/', loginRequired, userController.update); // Login necessário, um usuário pode alterar apenas a própria conta

// DELETE
router.delete('/', loginRequired, userController.delete); // Login necessário, um usuário pode deletar apenas a própria conta

export default router;
