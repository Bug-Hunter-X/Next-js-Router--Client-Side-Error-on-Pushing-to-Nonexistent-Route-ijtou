```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if route exists before pushing (requires server-side route definition)
    if (router.pathname === '/nonexistent-route') {
      // Handle nonexistent route, e.g., redirect to 404
      router.push('/404');
      return; 
    }
    router.push('/nonexistent-route'); 
  };

  return (
    <button onClick={handleClick}>Go to Nonexistent Route</button>
  );
}

export default MyComponent; 
```