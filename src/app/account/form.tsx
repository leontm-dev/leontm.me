"use client";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { MailIcon, KeyRoundIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const formSchema = z.object({
    "email-input-0": z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "This field is required" })
      .includes("@", { message: 'Must contain "@"' }),
    "password-input-0": z
      .string()
      .min(1, { message: "This field is required" })
      .min(8, { message: "Must be at least 8 characters" }),
    "submit-button-0": z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "email-input-0": "",
      "password-input-0": "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={onReset}
      className="@container space-y-8"
    >
      <div className="grid grid-cols-12 gap-4">
        <Controller
          control={form.control}
          name="email-input-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex flex-col items-start gap-2 space-y-0 self-end"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Email</FieldLabel>

              <InputGroup>
                <InputGroupInput
                  key="email-input-0"
                  placeholder="A unique email"
                  type="email"
                  className=""
                  {...field}
                />
                <InputGroupAddon align="inline-start">
                  <MailIcon className="size-4" strokeWidth={2} />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="password-input-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex flex-col items-start gap-2 space-y-0 self-end"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Password</FieldLabel>

              <InputGroup>
                <InputGroupInput
                  key="password-input-0"
                  placeholder="A secure password"
                  type="password"
                  className=""
                  {...field}
                />
                <InputGroupAddon align="inline-start">
                  <KeyRoundIcon className="size-4" strokeWidth={2} />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="submit-button-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex flex-col items-start gap-2 space-y-0 self-end"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="hidden w-auto!">Submit</FieldLabel>

              <Button
                key="submit-button-0"
                id="submit-button-0"
                name=""
                className={"w-min"}
                type="submit"
                variant="default"
                disabled
              >
                Log in / create (Currently disabled)
              </Button>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </form>
  );
}
