import { useParams, Redirect } from 'react-router-dom';
import { endOfDay, format, formatDistance } from 'date-fns';


const UserProfile = (props) => {
    const { username } = useParams();
    const { users } = props;
    console.log(users)

    let singleUser = users.find((user => {
        if (user.login === username) {
            return user;
        } else {
            return console.log('user not found')
        }
    }))

    if (users.length > 0) {
        return (
            <>
                <div className="user-profile">
                    <h1>{singleUser.name}</h1>
                    <img src={singleUser.avatar_url}/>
                    <p>{singleUser.bio}</p>
                    {/* <h3>Today is {format(endOfDay(new Date()), 'yyyy-MM-dd')}</h3> */}
                    <p>Joined GitHub: {singleUser.created_at}</p> 
                </div>
            </>
        );
    } else {
        <Redirect to='/' />
        return null;
    }
    
}

export default UserProfile;