const App = () => {
  const name = 'John';
  const names = ['Saul', 'Pau', 'Lucy'];

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello {name}</p>
      <ul>
        { names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {
          
        }
      </ul>
    </>
  );
};

export default App;