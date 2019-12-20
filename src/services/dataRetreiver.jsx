import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const retreiveAllPosts = () => {
    const URL = `${BASE_URL}/posts`;
    return axios(URL, {
        method: 'GET',
    })
    .then( response => response.data)
    .catch(error => {
        throw error;
    })
}

const retreiveUserPosts = (userId) => {
    const URL = `${BASE_URL}/posts?userId=${userId}`;
    return axios(URL, {
        method: 'GET',
    })
    .then( response => response.data)
    .catch(error => {
        throw error;
    })
}

const retreivePostComments = (postId) => {
    const URL = `${BASE_URL}/comments?postId=${postId}`;
    return axios(URL, {
        method: 'GET',
    })
    .then( response => response.data)
    .catch(error => {
        throw error;
    })
}

export default { retreiveAllPosts, retreiveUserPosts, retreivePostComments }