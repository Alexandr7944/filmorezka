import { useAppSelector } from '@/hooks/hook';
import styles from './comments-style.module.scss';
import { useEffect } from 'react';

type CommentsProps = {
  movieId: string | string[] | undefined,
  movieName: string
}

const Comments: React.FC<CommentsProps> = ({ movieId, movieName }) => {
  const user = useAppSelector(state => state.user);
  
  useEffect(() => {
    fetch('http://localhost:8000/comments', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        displayName: user.displayName,
        comment: "Какой - то текст",
        filmId: movieId,
        parentCommentId: null
      }),
      credentials: "include"
    })
    .then(response => response.json())
    .then(result => console.log('Success: ', result))
    .catch(error => console.error('Error: ', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Комментарии к фильму {}</h2>
      <span className={styles.comments__subtitle}>{movieName}</span>
      
      Comments
    </div>
  )
}

export default Comments