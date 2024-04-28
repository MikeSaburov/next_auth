'use server';

import bcrypt from 'bcryptjs';
import * as z from 'zod';

import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Упс:( Что то пошло не так, проверь!' };
  }

  //вытаскиваем параметры с помощью zod
  const { email, password, name } = validatedFields.data;

  //создаем hash на пароль
  const hashedPassword = await bcrypt.hash(password, 10);

  //ищем есть ли пользователь в базе с таким email
  const existingUser = await getUserByEmail(email);

  //если пользователь существует то ошибка
  if (existingUser) {
    return { error: 'Такой логин или email уже существует' };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return { success: 'Ползователь успешно создан' };
};
