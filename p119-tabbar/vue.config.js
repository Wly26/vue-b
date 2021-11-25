module.exports = {
	configureWebpack: {
		// resolve通常用来配置一些路径解析
		resolve: {
			alias: {
				'components': '@/components',
				'assets': '@/assets',
				'views': '@/views'
			}
		}
	}
}