import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
	
	root: {
		margin: 0,
		padding: '25px',
	},
	closeButton: {
		position: 'absolute',
		right: '30px',
		top: '50px',
		color: 'green',
		background: '#505dfe',
	},
});

export default theme;