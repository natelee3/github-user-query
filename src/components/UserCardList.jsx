import UserCard from './UserCard';
import './UserCard.scss';

const UserCardList = (props) => {
    //get users array from searchForm
    const userArray = props.users
    //map through and call userCard
    return (
        <>
        {userArray.map(user => {
            return (
                <div key={user.id}>
                    <UserCard user={user} />
                </div>
            )
        })}
        </>
    )
}

export default UserCardList;