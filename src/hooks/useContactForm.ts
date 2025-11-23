"use client";

import { useState } from "react";
import { ContactFormData, contactSchema } from "@/schemas/contactSchema";
import emailjs from "@emailjs/browser";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [values, setValues] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  /** ❌ Agora valida apenas quando chamamos manualmente */
  const validate = (data: ContactFormData) => {
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

      (Object.keys(fieldErrors) as (keyof ContactFormData)[]).forEach((key) => {
        const msg = fieldErrors[key]?.[0];
        if (msg) newErrors[key] = msg;
      });

      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  /** 🔹 Agora o change apenas troca o valor */
  const handleChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  /** 🔥 Valida aqui e só na submissão */
  const submit = async () => {
    if (!validate(values)) return false;

    setLoading(true);

    try {
      await emailjs.send(
        "service_caxzb0t",
        "template_2m02cia",
        values,
        "uLlRnZdw5lQDW_eqc"
      );

      setSent(true);
      setValues({ name: "", email: "", phone: "", message: "" });
      return true;
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    sent,
    handleChange,
    validate,
    submit,
  };
}
