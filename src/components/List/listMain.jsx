import React, { useState, useEffect } from 'react';
import AllServices from '../../services/dataRetreiver';
import PostsTable from './postsTable';
import Container from 'react-bootstrap/Container';
import UserPostTable from './userPostTable';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PostCommentsTable from './postCommentsTable';

const ListMain = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        AllServices.retreiveAllPosts().then(data => {
            //cutting so I leave only 10 starting at 15
            setAllPosts(data.splice(15, 10));
        });
    },[selectedUser, selectedPost])
    
    return (
        <Container>
            <h1>List Table (part2)</h1>
            <Row>
                <PostsTable setSelectedUser={setSelectedUser}
                            setSelectedPost={setSelectedPost}
                            allPosts={allPosts}/>
            </Row>
            <Row>
                {!!selectedUser && <Col><UserPostTable selectedUser={selectedUser}/></Col>}
                {!!selectedPost && <Col><PostCommentsTable selectedPost={selectedPost}/></Col>}

            </Row>
        </Container>
    );
}

export default ListMain