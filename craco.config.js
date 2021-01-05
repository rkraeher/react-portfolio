// Don't open the browser during development
process.env.BROWSER = "none";

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#2a9d8f' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};