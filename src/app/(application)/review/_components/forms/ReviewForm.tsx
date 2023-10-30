"use client";
import { FC, FormEvent } from "react";
import { ReviewOptionType, formSchema, initialOptionData } from "./constants";
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
  handleSubmit: (options: ReviewOptionType) => void;
  loading: boolean;
}

const ReviewForm: FC<Props> = ({ handleSubmit, loading }) => {
  const form = useForm<ReviewOptionType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialOptionData,
  });

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(form.getValues());
  };

  return (
    <div>
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

export default ReviewForm;
