import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({friends}){
    return (
        <ul className={css.friendList}>
           {
            friends.map( friend =>
                <FriendListItem 
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            )
           }
           
        </ul>
    )
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };