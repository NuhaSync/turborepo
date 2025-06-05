import { logger } from '@repo/utils';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    logger('Client app started');
    fetch('/api', { mode: 'cors' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.text();
      })
      .then((data) => {
        logger(`Fetched server message: ${data}`);
        setMessage(data);
      })
      .catch((err) => {
        logger(`Fetch error: ${err.message}`, 'error');
        setError(err.message);
      });
  }, []);

  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl'>Turborepo Client</h1>
      <p>Server Message: {error || message || 'Loading...'}</p>
    </div>
  );
}

export default App;
