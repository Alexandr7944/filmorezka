import { Button } from '../Button';
import styles from './commentInput-style.module.scss';

type CommentInputProps = {
  submit: () => void,
  value: string,
  change: (value: string) => void,
  text?: string
}

const CommentInput: React.FC<CommentInputProps> = ({ submit, value, change, text = 'Отправить' }) => {
  return (
    <div className={styles['comment-input']}>
      <input
        type="text"
        value={value}
        onChange={e => change(e.target.value)}
      />
      <Button
        onClick={submit}
      >{text}</Button>
    </div>
  )
}

export default CommentInput