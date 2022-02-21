import { useEffect } from 'react';
import UserPosts from './UserPost';

export default function Profile(props) {
    useEffect(() => {
        props.userPosts(props.currentUser._id)
    }, [])
    
    return(
        <div>
            <h2>Username: {props.currentUser.userName}</h2>
            <UserPosts 
                userIssues = {props.userIssues}
                getComments = {props.getComments}
                getOriginalPoster = {props.getOriginalPoster}
                setOriginalPost = {props.setOriginalPost}
            />
        </div>
    );
}