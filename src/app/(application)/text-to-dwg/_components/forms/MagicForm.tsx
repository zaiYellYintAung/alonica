"use client";

import MagicPromptForm from "./MagicPromptForm";
import { FC, FormEvent } from "react";
import { MagicFormType, formSchema, initialFormData } from "./constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  handleSubmit: (data: MagicFormType) => void;
}

const MagicForm: FC<Props> = ({ handleSubmit }) => {
  const form = useForm<MagicFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormData,
  });

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(form.getValues());
  };

  return (
    <div>
      <div></div>
      <Form {...form}>
        <form onSubmit={handleClick}>
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Billboard label"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading}>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default MagicForm;
