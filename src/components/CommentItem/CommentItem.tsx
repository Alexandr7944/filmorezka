import { Comment } from "@/interface/Comment";
import styles from './commentItem-style.module.scss';
import { IUserAccount } from "@/interface/IUserAccount";
import { useState } from "react";
import CommentInput from "../UI/CommentInput/CommentInput";

type CommentsItemProps = {
  user: IUserAccount,
  comment: Comment,
  changeComment: (id: number, text: string) => void,
  deleteComment: (id: number) => void
}

const CommentItem: React.FC<CommentsItemProps> = ({ user, comment, changeComment, deleteComment }) => {
  const date = new Date(comment.createdAt).toLocaleDateString() === new Date().toLocaleDateString()
    ? 'Сегодня ' + new Date(comment.createdAt).toLocaleTimeString()
    : new Date(comment.createdAt).toLocaleDateString();
  
  const [getComment, setGetComment] = useState(false);
  const [change, setChange] = useState(comment.comment);   
  
  const handlerChange = () => {
    changeComment(comment.id, change);
    setGetComment(false);
  }
  
  return (
    <div className={styles.comment}>
      <h5 className={styles.comment__title}>{comment.displayName}</h5>
      {(user.displayName === comment.displayName) &&
      <div className={styles['comment__btn-row']}>
        <button
          className={styles.comment__edit}
          onClick={() => setGetComment(prev => !prev)}
        >&#9998;</button>
        <button
          className={styles.comment__delete}
          onClick={() => deleteComment(comment.id)}
        >&#10008;</button>
      </div>
      }
      {getComment 
        ? <CommentInput 
          value={change}
          change={setChange}
          submit={handlerChange}
          text="Изменить"
        />
        : <div className={styles.comment__body}>{comment.comment}</div>
      }
      <div className={styles.comment__date}>{date}</div>
      <div className={styles.comment__like}>36 &#10084;</div>
    </div>
  )
}

export default CommentItem