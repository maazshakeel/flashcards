"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function requireAuth(Component: any) {
  const { data: session } = useSession();
  return function RequireAuth(props: any) {
    useEffect(() => {
      if (!session) {
        redirect("/login");
      }
    }, []);

    if (!session) {
      return null;
    }

    return <Component {...props} />;
  };
}
