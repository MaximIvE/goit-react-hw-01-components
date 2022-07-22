import css from './Profile.module.css';
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
                    <span className={css.quantity}>{stats[stat]}</span>
                </li>
            ))}
        </ul>
    </div>
    )
    };

    export default Profile;