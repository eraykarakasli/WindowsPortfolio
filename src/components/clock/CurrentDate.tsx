

function CurrentDate() {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Aylar 0'dan başlar, bu yüzden +1 ekliyoruz
    const year: number = currentDate.getFullYear();
  
    // Tarihi 1.11.2023 formatında biçimlendirin
    const formattedDate: string = `${day}.${month}.${year}`;
  
    return (
      <div className="text-xs">
        <p>{formattedDate}</p>
      </div>
    );
    }
export default CurrentDate