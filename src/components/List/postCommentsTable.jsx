import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AllServices from '../../services/dataRetreiver';

const PostCommentsTable = ({selectedPost}) => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        AllServices.retreivePostComments(selectedPost).then( comments => {
            setAllComments(comments);
        })
    }, [selectedPost]);

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Post ID</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {allComments.map(comment => {
                    return <tr key={comment.id}>
                                <td>{comment.postId}</td>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                    }
                )}
            </tbody>
        </Table>
    )
}

export default PostCommentsTable
