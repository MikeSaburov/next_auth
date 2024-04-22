import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Некорректный адрес эл. почты',
  }),
  password: z.string().min(3, {
    message: 'Пароль должен быть не менее 3 символов',
  }),
});
