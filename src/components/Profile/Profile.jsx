import PropTypes from 'prop-types';
import css from './Profile.module.css';
import thausendDigit from 'utils/thausendDigit';

function Profile({username, tag, location, avatar, stats}){
    const statistics = Object.keys(stats);
    return(
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            {statistics.map(stat => (
                <li key={stat} className={css.list}>
                    <span className={css.label}>{stat}</span>
                    <span className={css.quantity}>{stat !== 'views' ? stats[stat] : thausendDigit(stats[stat])}</span>
                </li>
            ))}
        </ul>
    </div>
    )
    };


    Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        stats: PropTypes.shape({ 
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }).isRequired,
      };

    export default Profile;