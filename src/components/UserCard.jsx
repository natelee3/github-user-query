
const UserCard = (props) => {
    //get user object as prop
    const { user } = props;
    return (
        <div>
                <img src={user.avatar_url} alt={user.login}/>
        </div>
    )
    //Render avatar + whatever else
}

export default UserCard;