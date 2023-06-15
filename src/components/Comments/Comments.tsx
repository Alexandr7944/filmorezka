import { useAppSelector } from '@/hooks/hook';
import styles from './comments-style.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Comment } from '@/interface/Comment';
import CommentItem from '../CommentItem/CommentItem';
import { Button } from '../UI/Button';
import CommentFetch from '@/API/CommentFetch';
import CommentInput from '../UI/CommentInput/CommentInput';

type CommentsProps = {
  movieId: number,
  movieName: string
}

const Comments: React.FC<CommentsProps> = ({ movieId, movieName }) => {
  const user = useAppSelector(state => state.user);
  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const [getNewComment, setGetNewComment] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  
  const getComment = () => {
    CommentFetch.getComment(movieId, setCommentsList);
  };

  useEffect(getComment, []);

  const addComment = () => {
    if (!commentInput || !user.displayName) return;
    
    CommentFetch.addComment(
      commentInput,
      user.displayName || '',
      movieId,
      null
    );

    setCommentInput('');
    setTimeout(getComment);
  }

  const deleteComment = (id: number) => {
    CommentFetch.deleteComment(id);
    setCommentsList(commentsList.filter(item => item.id !== id));
  }

  const changeComment = (id: number, text: string) => {    
    CommentFetch.changeComment(id, text);
    setCommentsList(commentsList.map(item => item.id === id
      ? {...item, comment: text}
      : item));

      console.log(id);
      
  }

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Комментарии к фильму {movieName}</h2>
      {user.isAuth &&
        <Button onClick={() => setGetNewComment(prev => !prev)}>
          Добавить комментарий
        </Button>
      }
      {
        getNewComment && <CommentInput
          value={commentInput}
          change={setCommentInput}
          submit={addComment}
        />
      }
      <div className={styles.comments__list}>
        {
          commentsList.length > 0
          ? commentsList.map((comment: Comment) => 
            <CommentItem 
              key={comment.id}
              user={user}
              comment={comment}
              changeComment={changeComment}
              deleteComment={deleteComment}
            />
          )
          : <div className={styles.comments__default}>Комментариев нет, вы можете стать первым</div>
        }
      </div>
    </div>
  )
}

export default Comments