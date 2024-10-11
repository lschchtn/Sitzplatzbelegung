import { Seat  } from "./components/Seat.tsx";

let obj;
const res = await fetch('http://192.168.109.99:8081/frontend')
obj = await res.json();
const json = JSON.parse(JSON.parse(obj));
console.log(json);

const seats = json.Seats;

function App() {
  return (
    <>
      <h1 className="text-center text-xl my-5">Wagon 1</h1>
      <div className="mx-auto my-5 h-full w-1/3 grid grid-cols-4 gap-3 space-x-0">
        {seats.map((seat) => <Seat key={seat.id} id={seat.id} taken={seat.taken} />)}
      </div>
    </>
  )
}

export default App
