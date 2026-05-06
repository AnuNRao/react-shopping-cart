import { Request, Response } from 'express';
import { products } from '../data/products';

export const getProducts = (
  req: Request,
  res: Response
) => {
  res.json(products);
};