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
        // topcoder728@gmail.com
        google_api_key: 'AIzaSyARW5vuNWo2V1SCVKbQ8Jv6cw-PdFFnizI',
        google_client_id: '269956151246-hjqomipkg62ntjc59psjk3g9n8lsqklv.apps.googleusercontent.com',
        google_client_secret: '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',
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