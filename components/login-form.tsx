"use client";

import { loginFormSchema } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// UI
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [submiting, setSubmiting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setSubmiting(true);
    const user: any = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    console.log(user);
    if (user.ok) {
      setSubmiting(false);
      router.push("/");
    } else {
      setSubmiting(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid email or password!",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        className="w-full h-full flex flex-col items-center justify-start space-y-3 gap-1 mt-16"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-foreground tracking-wide text-3xl sm:text-4xl md:text-5xl md:mb-7">
          Login
        </h1>
        <Button
          variant={"outline"}
          className="bg-accent w-72 sm:w-96 flex justify-center items-center gap-1 text-sm sm:text-md font-bold"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </div>
          Continue with Google
        </Button>
        <div className="w-32 sm:w-44 flex gap-2 items-center justify-center">
          <Separator />
          or
          <Separator />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type={"email"}
                  placeholder="Email"
                  {...field}
                  className="w-72 sm:w-96"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  placeholder="Password"
                  {...field}
                  className="w-72 sm:w-96"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-center">
          <Button
            variant={"link"}
            className="text-xs tracking-tight sm:text-lg"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Don't have an account?
          </Button>
          <Button
            type="submit"
            className={`w-36 ${
              submiting && "hover:bg-slate-800 bg-slate-800"
            }bg-default`}
          >
            {submiting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
