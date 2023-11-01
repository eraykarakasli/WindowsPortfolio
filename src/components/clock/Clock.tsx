import  { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Her saniyede bir saat bilgisini güncelle
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Temizlik işlemi: Bileşen ayrıldığında zamanlayıcıyı temizle
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-xs">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  );
}

export default Clock;
