
import './App.css';

function App() {
  const firstName = 'Saugat';
  const lastName = 'Shrestha';
  const age = '23';
  const Job = "developer";

  //function
   const getFullName = (firstName, lastName) => `${firstName} ${lastName}`
  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName,lastName)} </h3>
      <p>Age: {age} </p>
      <p>Job: {Job} </p>
    </div>
  );
}

export default App;
