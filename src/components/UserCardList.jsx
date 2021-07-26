import UserCard from './UserCard';
import { Link } from "react-router-dom";
import './UserCard.scss';

const UserCardList = (props) => {
    //get users array from searchForm
    const userArray = props.users
    // const { path, url } = useRouteMatch();
    //map through and call userCard
    return (
        <>
        {userArray.map(user => {
            return (
                <>
                    <div key={user.id}>
                        <Link to={`user/${user.login}`}>
                            <UserCard user={user} />
                        </Link>
                    </div>
                </>
            )
        })}
           
        </>
    )
}

export default UserCardList;


