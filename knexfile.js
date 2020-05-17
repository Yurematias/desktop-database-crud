module.exports = {
	development: {
		client: 'mysql',
		version: '8.0',
		connection: {
			host : '127.0.0.1',
			user : 'root',
			password : '26052000',
			database : 'lyric_book'
		},
		migrations: {
			directory: './src/desktop/persistance/migrations'
		}
	},
	staging: {
		client: 'mysql',
		connection: {
			host : '127.0.0.1',
			user : 'Yure',
			password : '26052000',
			database : 'lyric_book'
		},
		migrations: {
			directory: './src/desktop/persistance/migrations'
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host : '127.0.0.1',
			user : 'Yure',
			password : '26052000',
			database : 'lyric_book'
		},
		migrations: {
			directory: './src/desktop/persistance/migrations'
		}
	}
};