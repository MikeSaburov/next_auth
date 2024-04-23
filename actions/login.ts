'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export const login = (values: any) => {
  console.log(values);

  revalidatePath();
  revalidateTag();
};
