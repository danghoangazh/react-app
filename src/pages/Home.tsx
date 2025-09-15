import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 400);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className='w-10'>Trang chủ {count} </div>
    </>
  );
}
