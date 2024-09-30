import { getUser } from '@/app/lib/action';

export default function LogInForm() {
    
    return (
      <form id="auth-form" action={getUser}>
        <div>
          <img src="/images/auth-icon.jpg" alt="A lock icon" />
        </div>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </p>
        <p>
          <button type="submit">
            Login Account
          </button>
        </p>
      </form>
    );
  }
