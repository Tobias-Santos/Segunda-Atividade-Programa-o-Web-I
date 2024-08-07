import {Router} from 'express';

const routerUser = Router();

import registerUser from '../controllers/registerUserController';

routerUser.post('/',registerUser);

export{ routerUser }