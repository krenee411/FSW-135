
import Comments from './Comment';

export default function OriginalPost(props) {
    return(
        <div>
            <div>
                <div>
                    <h2>{props.originalPoster.userName}</h2>
                </div>
                <div>
                    <h1>{props.originalPost.title}</h1>
                    <h2>{props.originalPost.description}</h2>
                </div>
            </div>
            <Comments commentThread = {props.commentThread}/>
        </div>
        
    );
}