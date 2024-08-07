import { LoginButton } from "~/components/auth/login-button";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-8 text-center">
        <h1 className="text-6xl font-bold text-white">🔐 Authentication</h1>
        <p className="text-white">Next.js with NextAuth v5 - Boilerplate</p>
        <div>
          <LoginButton>
            <Button variant="secondary">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
