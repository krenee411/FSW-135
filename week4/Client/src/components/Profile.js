import { useEffect } from 'react';
import UserPosts from './UserPost';

export default function Profile(props) {
    useEffect(() => {
        props.userPosts(props.currentUser._id)
    }, [])
    
    return(
        <div>
            <h2>Username: {props.currentUser.userName}</h2>
            <img src={props.currentUser.profImg} alt={`${props.currentUser.userName}'s profile picture`}></img>
            <UserPosts 
                userIssues = {props.userIssues}
                getComments = {props.getComments}
                getOriginalPoster = {props.getOriginalPoster}
                setOriginalPost = {props.setOriginalPost}
            />
        </div>
    );
}