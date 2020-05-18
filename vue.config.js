// vue.config.js
module.exports = {
	pluginOptions: {
		electronBuilder: {
			externals: ['knex', 'mysql'],
			nodeModulesPath: ['./node_modules']
		}
	}
}