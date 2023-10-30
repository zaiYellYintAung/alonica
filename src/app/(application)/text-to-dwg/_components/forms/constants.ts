import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1),
});

export type MagicFormType = z.infer<typeof formSchema>;

export const initialFormData = {
  prompt: "",
};
