import card from "./components/Card";
import data from "./data/data.";

function App() {
  return (
    <div className="gradient-bg text-fg text -3xl font bold underline ">
      <h1>Hello World! </h1>

      <ul className="flex justify-center gap-1.5">
        '{data.map((plan) => (
          <li key ={plan.id}>
            <card 
           title={plan.title}
            price={plan.Price}
            storage={plan.Storage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;