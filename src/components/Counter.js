export default function Counter({ counter, onClick, onReset }) {
  return (
    <div className="counter">
      <button
        onClick={() => {
          onClick(-20);
        }}
      >
        minus 20
      </button>
      <button
        onClick={() => {
          onClick(-10);
        }}
      >
        minus 10
      </button>
      <button
        onClick={() => {
          onClick(-5);
        }}
      >
        minus 5
      </button>
      <button
        onClick={() => {
          onClick(-1);
        }}
      >
        minus 1
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          onClick(1);
        }}
      >
        plus 1
      </button>
      <button
        onClick={() => {
          onClick(5);
        }}
      >
        plus 5
      </button>
      <button
        onClick={() => {
          onClick(10);
        }}
      >
        plus 10
      </button>
      <button
        onClick={() => {
          onClick(20);
        }}
      >
        plus 20
      </button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

// function add(a, b) {
//   return a + b;
// }

// const firstNumber = 1
// const secondNumber = 2

// add(firstNumber,secondNumber)
