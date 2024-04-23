import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Некорректный адрес эл. почты',
  }),
  password: z.string().min(3, {
    message: 'Пароль должен быть не менее 3 символов',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Некорректный адрес эл. почты',
  }),
  password: z.string().min(6, {
    message: 'Пароль должен быть не менее 6 символов',
  }),
  name: z.string().min(3, {
    message: 'Имя должно быть не менее 3 символов',
  }),
});
