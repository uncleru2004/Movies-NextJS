import css from "../components/card.module.css";
//import MovieDetails from "../pages/movie_details";

export default function RenderCard({ movie }) {
  return (
    <a href="#">
      <div className={css.card}>
        <p className={css.title}>
          {movie.Title}
          <span className={css.year}>{movie.Year}</span>
        </p>
        <img className={css.img} src={movie.Poster} alt={movie.Title} />
      </div>
    </a>
  );
};
