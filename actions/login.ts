'use server';
import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export const login = (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Упс:( Что то пошло не так, проверь!' };
  }
  return { success: 'Успешно!' };
};
