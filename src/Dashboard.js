import { useState } from "react";

const Dashboard = () => {

    const [posts, setPosts] = useState([
        { content: 'first content', id : 1},
        { content: 'second content', id : 2}
    ]);

    const [content, setContent] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        setPosts([...posts,{content:content, id:3}]);
        setContent('');
        // const newpost = {content};
        // setPosts.content(newpost);
        // setPosts.id(3);
        // const newpost = posts.concat({content, id:3});
        // setPosts(newpost);
    }

    return (
        <div className="dashboard-main-page">
            <div className="dashboard-main-content">
                <form onSubmit={handlesubmit} className="dash-form">
                    <input type="text" id="something" className="something" value={content} spellCheck="false" onChange={(e) => {setContent(e.target.value)}} />
                    <button className="submit-new-dash">Submit</button>
                </form>
                <div className="dash-posts">
                    {posts.map((post) => (
                        <div className="dash-post" key={post.id}>
                            <button className="edit-post">Edit</button>
                            <button className="delete-post">Delete</button>
                            <h1 className="dash-username">Username</h1>
                            <p>{post.content}</p>
                            <p>{post.id}</p>
                            <span className="like">Like</span>
                            <span className="dislike">Dislike</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;