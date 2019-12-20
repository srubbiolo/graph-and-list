import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AllServices from '../../services/dataRetreiver';

const UserPostTable = ({selectedUser}) => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        AllServices.retreiveUserPosts(selectedUser).then( posts => {
            setAllPosts(posts);
        })
    }, [selectedUser]);

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
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                    }
                )}
            </tbody>
        </Table>
    )
}

export default UserPostTable