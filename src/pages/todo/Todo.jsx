import { counterSignal, date, firstName, fullName, lastName } from "./signal";

export default function Todo() {
  return (
    <div>
      App
      <div>
        <br />
        first name
        <input
          value={firstName}
          onChange={(event) => (firstName.value = event.target.value)}
        />
      </div>
      <div>
        <br />
        last name
        <input
          type="date"
          value={date}
          onChange={(event) => (date.value = event.target.value)}
        />
      </div>
      <div>
        <br />
        last name
        <input
          value={lastName}
          onChange={(event) => (lastName.value = event.target.value)}
        />
      </div>
      <div>
        {/* {firstName} - {lastName} */}
        {fullName} <br /> {date}
      </div>
      <br />
      <button
        className="btn btn-success me-2"
        onClick={() => (counterSignal.value += 1)}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => (counterSignal.value -= 1)}
      >
        -
      </button>
      <br />
      <br />
      <Parent1 />
      <br />
      <Parent2 />
    </div>
  );
}

const Child1 = () => {
  return (
    <div className="bg-danger text-white p-5">
      child 1
      <br /> counter:
      {counterSignal.value}
    </div>
  );
};

const Parent1 = () => {
  return (
    <div>
      <Child1 />
    </div>
  );
};

const Child2 = () => {
  return (
    <div className="bg-success text-white p-5">
      child 2
      <br /> counter:
      {counterSignal.value}
    </div>
  );
};

const Parent2 = () => {
  return (
    <div>
      <Child2 />
    </div>
  );
};
