//add comment
import { useState } from 'react'

export default function Comments({comment, addData}) {

    const UserComment = {comment: comment}
    const [addComment, setAddComment] = useState(UserComment )

    const onChangeData = (e) => {
        const {name,value} = e.target
        setAddComment(comment => ({...comment, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData(addComment,id)
        setAddComment(UserComment )
    }
                return(
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="comment"
                        value={addComment.comment}
                        placeholder="enter comment here"
                        onChange={onChangeData}>
                        </input>
                        <button>Add Comment</button>
                    </form>
                );
            }