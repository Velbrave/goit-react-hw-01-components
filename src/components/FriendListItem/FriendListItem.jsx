import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      {isOnline ? (
        <span className={css.statusTrue} />
      ) : (
        <span className={css.statusFalse} />
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
