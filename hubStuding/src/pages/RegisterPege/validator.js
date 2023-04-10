import * as z from "zod";

export const schema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido").min(1, "O email é obrigatório"),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/\d+/, "A senha deve conter pelo menos um número")
    .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caracter especial")
    .min(1, "A senha é obrigatória"),
  confirm: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .refine((data) => data === schema.pick({ password: true }).password, { message: "As senhas não conferem" }),

  bio: z.string().min(3, "A bio deve ter pelo menos 3 caracteres").min(1, "A bio é obrigatória"),
  contact: z.string().min(3, "O contato deve ter pelo menos 3 caracteres").min(1, "O contato é obrigatório"),
  course_module: z.string().min(1, "O módulo é obrigatório"),
});
