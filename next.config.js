const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
    env: {
        admin: 'stevekim@gmail.com',
    },
    // experimental: {
    //     modularizeImports: {
    //       '@mui/material/?(((\\w*)?/?)*)': {
    //         transform: '@mui/material/{{ matches.[1] }}/{{member}}'
    //       },
    //       '@mui/icons-material/?(((\\w*)?/?)*)': {
    //         transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    //       }
    //     }
    // },
}