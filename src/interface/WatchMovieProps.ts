import { IActor } from "./IActor"
import { INewMovie } from "./IMovie"
import { IVideo } from "./IMoviePage"

export type WatchMovieProps = {
  movie: INewMovie,
  video?: IVideo,
  actors?: IActor[]
}