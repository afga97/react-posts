import service from './index';

const services = {}

services.getUsers = () => service.get('/users/')

services.getUser = (user_id) => service.get(`/users/${user_id}`)

services.getPosts = (user_id) => service.get(`/users/${user_id}/posts/`);

services.getPost = (post_id) => service.get(`/posts/${post_id}`)

services.getCommnentsPost = (post_id) => service.get(`posts/${post_id}/comments?postId=${post_id}`)

export default services;