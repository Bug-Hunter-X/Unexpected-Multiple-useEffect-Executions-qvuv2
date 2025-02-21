```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data (replace with your actual API call)
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Fetch data only once on component mount

  useEffect(() => {
    console.log('Effect ran, Data changed!');
  }, [data]); // This effect runs whenever 'data' changes

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```