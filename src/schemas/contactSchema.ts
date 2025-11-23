import { z } from "zod";

export const contactSchema = z.object({
    name: z
      .string()
      .min(2, "Seu nome precisa ter pelo menos 2 caracteres."),
    email: z
      .string()
      .email("Informe um e-mail válido."),
    phone: z
      .string()
      .optional()
      .or(z.literal("")), 
    message: z
      .string()
      .min(10, "Me conta um pouco mais: mínimo 10 caracteres."),
  });
  
  export type ContactFormData = z.infer<typeof contactSchema>;