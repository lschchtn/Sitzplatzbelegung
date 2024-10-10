export interface Seats {
  id?: string;
  taken: boolean;
}

function Seat({id, taken}: Seats) {
  return(
    <div className={`w-auto h-auto text-center leading-10 ${taken ? "bg-red-600" : "bg-lime-400"}`}>
      {id}
    </div>
  )
}
export {Seat};
