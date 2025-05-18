import { Router } from 'express';
import { getProxyKeys, getValueByKey } from '../controllers/proxy.controller';
const route = Router();

route.get('/keys', getProxyKeys);

route.get('/value-by-key', getValueByKey)

export default route;