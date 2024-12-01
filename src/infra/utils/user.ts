import { Request } from 'express';

export const getUserIdFromRequest = (req: Request): string => {
  return (req as any).user?.sub as string;
};
