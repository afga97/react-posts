import service from './index';

const services = {}

services.getUsers = () => service.get('/users/')

services.getUser = (id) => {
    return service.get(`/users/${id}`)
}

export default services;