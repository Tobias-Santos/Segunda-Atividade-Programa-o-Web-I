import {Router} from 'express';


import registerUserController from '../controllers/registerTechnologyController';
import getTechnology from '../controllers/getTechnologyController';
import deleteTechnology from '../controllers/deleteTechnologyController';
import updateStudiedStatus from '../controllers/updateStudiedStatus';
import updateTitleDeadline from '../controllers/updateTitleDeadline'

import { checkExistsUserAccount } from '../middlewares/checkUser';

const routerTechnologies = Router();

routerTechnologies.post('/',checkExistsUserAccount,registerUserController);
routerTechnologies.get('/',checkExistsUserAccount,getTechnology);
routerTechnologies.delete('/:id',checkExistsUserAccount,deleteTechnology);
routerTechnologies.put('/:id',checkExistsUserAccount,updateTitleDeadline);
routerTechnologies.patch('/:id/studied',checkExistsUserAccount,updateStudiedStatus);

export{ routerTechnologies }