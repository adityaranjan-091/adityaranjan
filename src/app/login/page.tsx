import { Suspense } from "react";
import LoginClient from "./LoginPageClient";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading login page...</div>}>
      <LoginClient />
    </Suspense>
  );
}
