import css from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline}){
    return(
        <li className={ css.item}>
            <span className={ css.status} style={{backgroundColor:  isOnline ? "green" : "red"}}></span>
            <img className={ css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={ css.name}>{name}</p>
        </li>
    )
};
