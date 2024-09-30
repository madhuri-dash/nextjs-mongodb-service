import connect from '@/app/lib/db'

export async function register() {    
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      const os = await import('os');
      await connect();
      console.log('i am running server side. ' + os.hostname);
    }
  }