import { useAppSelector } from '@/hooks/hook';
import styles from './comments-style.module.scss';
import { useEffect, useState } from 'react';
import { Comment } from '@/interface/Comment';
import CommentItem from '../CommentItem/CommentItem';

type CommentsProps = {
  movieId: string | string[] | undefined,
  movieName: string
}

const Comments: React.FC<CommentsProps> = ({ movieId, movieName }) => {
  const user = useAppSelector(state => state.user);
  const [commentsList, setCommentsList] = useState<Comment[]>([])
  
  useEffect(() => {
    // fetch('http://localhost:8000/comments/filmId/' + movieId, {
    fetch('http://localhost:8000/comments/filmId/' + 38, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    .then(response => response.json())
    .then(result => result && setCommentsList(result))
    .catch(error => console.error('Error: ', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const addComment = (text: string, parentCommentId: number | null = null) => {
    fetch('http://localhost:8000/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        displayName: user.displayName,
        comment: text,
        filmId: movieId,
        parentCommentId
      }),
      credentials: "include"
    })
    .then(response => response)
    .then(result => console.log('Success: ', result))
    .catch(error => console.error('Error: ', error));
  }

  const deleteComment = (comId: number) => {
    fetch('http://localhost:8000/comments/comId/' + comId, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    .then(response => response)
    .then(result => console.log('Success: ', result))
    .catch(error => console.error('Error: ', error));
  }

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Комментарии к фильму {}</h2>
      <span className={styles.comments__subtitle}>{movieName}</span>
      <div className={styles.comments__list}>
        {
          commentsList.length && commentsList.map((comment: Comment) => 
            <CommentItem 
              key={comment.id}
              user={user}
              comment={comment}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          )
        }
      </div>
    </div>
  )
}

export default Comments