import service from './index';

const services = {}

services.getUsers = () => service.get('/users/')

services.getUser = (user_id) => {
    return service.get(`/users/${user_id}`)
}

services.getPosts = (user_id) => service.get(`/users/${user_id}/posts/`);

export default services;