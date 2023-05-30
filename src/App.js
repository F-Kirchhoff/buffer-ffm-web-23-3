import Counter from "./components/Counter";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form2";

function App() {
  const [appCounter, setAppCounter] = useState(0);
  const [openCardId, setOpenCardId] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev + 1);
      console.log(time);
    }, 1000);
  }, []);

  function handleToggleById(id) {
    //welcher Wert hat openCardId wenn die Karte mit der id 0 geöffnet ist?
    if (id === openCardId) {
      setOpenCardId(null);
      return;
    }
    setOpenCardId(id);
  }

  function handleClick(delta) {
    setAppCounter(appCounter + delta);
  }

  function handleReset() {
    setAppCounter(0);
  }

  return (
    <div className="App">
      <Form />
      <h1>Time since first Render: {time}</h1>
      <Counter
        onClick={handleClick}
        counter={appCounter}
        onReset={handleReset}
      />
      <Card
        showDetails={openCardId === 0}
        onToggle={() => handleToggleById(0)}
        title="Lorem ipsum!"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia consectetur debitis asperiores corrupti natus pariatur autem impedit ullam. Magni sapiente asperiores reiciendis adipisci ducimus. Tempora eligendi iure quae debitis?"
      />
      <Card
        showDetails={openCardId === 1}
        onToggle={() => handleToggleById(1)}
        title="Dolor Sit!"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia consectetur debitis asperiores corrupti natus pariatur autem impedit ullam. Magni sapiente asperiores reiciendis adipisci ducimus. Tempora eligendi iure quae debitis?"
      />
      <Card
        showDetails={openCardId === 2}
        onToggle={() => handleToggleById(2)}
        title="Amet!"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia consectetur debitis asperiores corrupti natus pariatur autem impedit ullam. Magni sapiente asperiores reiciendis adipisci ducimus. Tempora eligendi iure quae debitis?"
      />
    </div>
  );
}

export default App;
