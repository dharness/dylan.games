module.exports = {
    parser: false,
    map: false,
    plugins: {
        'autoprefixer': {},
        'postcss-css-variables': {},
        'postcss-preset-env': {
            stage: 0
        },
        'cssnano': {}
    }
}