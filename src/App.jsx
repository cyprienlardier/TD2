import Card from "./components/card";
import Toogle from "./components/Toogle";
import data from "./data/data";
import { useState } from "react";

function App() {
  const cardClass = "max-w-6xl mx-auto px-6 py-12";
  const [active, setActive] = useState(false);

  return (
    <div className={`${cardClass}`}>
      <h1 className="text-3xl font-bold text-center ">Our Pricing</h1>
      <div className="mt-4 flex items-center justify-center gap-4 text-sm font-semibold">
        <span className={!active ? "text-(--clr-dark-grayish-blue)" : "text-(--clr-light-grayish-blue)"}>
          Annually
        </span>
        <Toogle active={active} onChange={() => setActive((current) => !current)} />
        <span className={active ? "text-(--clr-dark-grayish-blue)" : "text-(--clr-light-grayish-blue)"}>
          Monthly
        </span>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 mt-10">
        {data.map((plan) => (
          <li key={plan.id}>
            <Card
              title={plan.title}
              price={active ? plan.price : plan.annual}
              storage={plan.storage}
              users={plan.users}
              upside={plan.upside}
              featured={plan.featured}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;