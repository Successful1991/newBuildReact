import axios from 'axios';

export function getGallery() {
    return axios.get('https://kyivproekt.space/wp-json/wp/v2/pages/398/');
}