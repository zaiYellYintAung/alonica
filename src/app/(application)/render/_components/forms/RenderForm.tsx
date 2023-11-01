"use client";
import { FC, FormEvent } from "react";
import { RenderOptionType, formSchema, initialOptionData } from "./constants";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface Props {
  handleSubmit: (options: RenderOptionType) => void;
  loading: boolean;
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const RenderForm: FC<Props> = ({ handleSubmit, loading }) => {
  const form = useForm<RenderOptionType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialOptionData,
  });

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(form.getValues());
  };

  return (
    <div className="xl:w-full mt-2">
      <Form {...form}>
        <form onSubmit={handleClick} className="w-full space-y-5">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Select onValueChange={() => {}} defaultValue={""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="m@example.com">m@example.com</SelectItem>
                <SelectItem value="m@google.com">m@google.com</SelectItem>
                <SelectItem value="m@support.com">m@support.com</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              You can manage verified email addresses in your{" "}
              <Link href="/examples/forms">email settings</Link>.
            </FormDescription>
            <FormMessage />
          </FormItem>

          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Communication emails</FormLabel>
              <FormDescription>
                Receive emails about your account activity.
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={true} onCheckedChange={() => {}} />
            </FormControl>
          </FormItem>

          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Images</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full shrink-0"
                    rows={5}
                    disabled={loading}
                    placeholder="Billboard label"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Prompt</FormLabel>
            <FormControl>Here are images</FormControl>
            <FormMessage />
          </FormItem>

          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Communication emails</FormLabel>
              <FormDescription>
                Receive emails about your account activity.
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={true} onCheckedChange={() => {}} />
            </FormControl>
          </FormItem>

          <div className="flex justify-between">
            <Button variant={"ghost"} size={"lg"} disabled={loading}>
              Reset
            </Button>
            <Button size={"lg"} disabled={loading}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RenderForm;
