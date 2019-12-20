import React from 'react';
import Table from 'react-bootstrap/Table';

const PostsTable = ({allPosts, setSelectedPost, setSelectedUser}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Post ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {allPosts.map(post => {
                    return <tr key={post.id}>
                                <td style={{cursor: 'pointer'}} onClick={() => {setSelectedUser(post.userId)}}>{post.userId}</td>
                                <td style={{cursor: 'pointer'}} onClick={() => {setSelectedPost(post.id)}}>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                    }
                )}
            </tbody>
        </Table>
    )
}

export default PostsTable;