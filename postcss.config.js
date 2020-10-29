module.exports = {
    parser: false,
    map: false,
    plugins: {
        'postcss-nested': {},
        'autoprefixer': {},
        'postcss-css-variables': {},
        'postcss-preset-env': {
            stage: 0
        },
        'cssnano': {},
    }
}