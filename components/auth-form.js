import Link from 'next/link';
import { createUser } from '@/app/lib/action';

export default function AuthForm() {
  return (
    <form id="auth-form" action={createUser}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" id="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <button type="submit">
          Create Account
        </button>
      </p>
      <p>
        <Link href="/login">Login with existing account.</Link>
      </p>
    </form>
  );
}
