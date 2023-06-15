import { IUserAccount } from '@/interface/IUserAccount';
import styles from './profile-style.module.scss';

type ProfileProps = {
  person: IUserAccount;
}

const Profile: React.FC<ProfileProps> = ({ person }) => {
  return (
    <div className={styles.profile}>
      <h2 className={styles.profile__title}>Страница профиля</h2>
    </div>
  )
}

export default Profile