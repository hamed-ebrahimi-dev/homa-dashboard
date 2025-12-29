import { LoginFormData } from "../utils/validation";

export async function loginApi(data: LoginFormData) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "خطا در ورود");
  }

  return res.json();
}
