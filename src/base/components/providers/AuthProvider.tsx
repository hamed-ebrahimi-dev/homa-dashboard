"use client";

import { createClient } from "@/src/core/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED") {
        router.refresh();
      }

      if (event === "SIGNED_OUT") {
        router.push("/auth/login");
      }

      if (event === "SIGNED_IN") {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return <>{children}</>;
}
