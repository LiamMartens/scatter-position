module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'scatter-position.js': /^src\//
            }
        }
    },
    paths: {
        public: './dist',
        watched: ['src']
    },
    plugins: {
        babel: {
            presets: [['env', {
                targets: {
                    browsers: ['last 4 versions', 'safari >= 7', 'ie >= 10']
                }
            }]]
        }
    }
}