import MoveItem from "@/components/movies/movie-item";
import MovieList from "@/components/movies/movie-list";
import { createContext, useState } from "react";

export const movies_context = createContext({});
export default function FilmPage() {
  const [count, setCount] = useState(0);
  console.log("render FilmPage");

  const movies = [
    {
      id: 1,
      name: "Harryposter",
    },
  ];
  return (
    <div>
      <p>

      </p>
      <MovieList child={<MoveItem />}>
        {/* <MoveItem></MoveItem> */}
      </MovieList>
    </div>
  );
}
