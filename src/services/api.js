import axios from 'axios';

export const ItemData = () => {
    return axios.get('https://api.chucknorris.io/jokes/categories')
    .then((res) => res)
}

export const ItemDetails = (item) => {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${item}`)
    .then((res) => res)
}