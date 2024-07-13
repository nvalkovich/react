import { useState } from 'react';

export default function ErrorButton() {
  const [isError, setError] = useState<boolean>(false);

  const handleClick = () => {
    setError(true);
  };

  if (isError) {
    throw new Error('Button Error');
  }

  return (
    <>
      <button onClick={handleClick} className="btn">
        Error
      </button>
    </>
  );
}
