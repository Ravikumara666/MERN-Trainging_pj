import React, { useEffect, useState } from 'react';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <div className="text-end p-3">
      <button className="btn btn-secondary" onClick={toggleDarkMode}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
