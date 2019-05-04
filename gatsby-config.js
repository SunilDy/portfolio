module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: 'Roboto Slab'
                    },
                    {
                        family: 'Roboto'
                    }
                ]
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Sunil Kumar - Portfolio`,
                short_name: `Portfolio`,
                start_url: `/`,
                background_color: `whitesmoke`,
                theme_color: `dodgerblue`,
                display: 'standalone'
            }
        }
    ]
}