import type { FastifyInstance } from 'fastify';

import { create } from './create';
import { find } from './find';
import { search } from './search';
import { update } from './update';
import { createVisit } from './create-visit';


export async function propertiesRoutes(app: FastifyInstance) {
  app.get('/manager/properties', search);
  app.get('/manager/properties/:id', find);
  app.post('/manager/properties', create);
  app.patch('/manager/properties/:id', update);
  app.post('/manager/properties/:id/visit', createVisit);
}