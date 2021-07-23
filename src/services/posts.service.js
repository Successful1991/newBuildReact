import axios from "axios";

const SITE_URL = 'https://stanford.kiev.ua/';
const POSTS_URL = `${SITE_URL}wp-json/wp/v2/posts/`;
// const MEDIA_API_URL = `${SITE_URL}wp-json/wp/v2/media/`;
export default function getPosts(id = '') {
    const categories = {
        'news': 1,
        'promotions' : 5,
    };
    return {
        categories,
        request: axios.get(POSTS_URL),
        singleRequest: axios.get(`${POSTS_URL}${id}`),
        // getImg: axios.get(`${MEDIA_API_URL}${id}`),
    };
   

}