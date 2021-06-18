import axios from 'axios';

export const constructionService = {
	getContentPage() {
		return axios.get('https://api.spinhouse.space/wp-json/myplugin/v1/constructions')
			.then(resp => resp.data);
	},

	getNote(id) {
		const data = {
			id,
		};
		return axios.get('https://api.spinhouse.space/wp-json/myplugin/v1/constructions',
			{ data	});
	}
};
