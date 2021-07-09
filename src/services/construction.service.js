import axios from 'axios';

export const constructionService = {
	getContentPage() {
		return axios.get('https://api.spinhouse.space/wp-json/myplugin/v1/constructions')
			.then(resp => resp.data);
	},

	getFlats() {
		return axios.get('http://api.spinhouse.space/wp-json/myplugin/v1/flats/')
		// return axios.get('public/flats.json')
	},

	getNote(id) {
		const data = {
			id,
		};
		return axios.get('https://api.spinhouse.space/wp-json/myplugin/v1/constructions',
			{ data	});
	}
};
