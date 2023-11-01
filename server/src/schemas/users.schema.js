import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(30, { message: "El nombre debe tener como maximo 20 caracteres" }),
  number_pages: z
    .number({ required_error: "El numero de paginas es obligatorio" })
    .positive({message: "El numero de paginas debe ser mayor a 0"})
    .lte(1500, {message: "El numero de paginas debe ser menor a 1500"}),
  name_creator: z
    .string({ required_error: "El autor es obligatorio" })
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(30, { message: "El nombre debe tener como maximo 30 caracteres" }),
});
