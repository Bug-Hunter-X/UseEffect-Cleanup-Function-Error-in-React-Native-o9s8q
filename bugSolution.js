```javascript
import React, { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const mounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('...');
        const jsonData = await response.json();
        if (mounted.current) {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      mounted.current = false; // Cleanup function
    };
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;
```