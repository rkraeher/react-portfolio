// Don't open the browser during development
// Any changes made here need browser reload
process.env.BROWSER = "none";

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#3c6e71',
                            '@heading-color': 'white',
                            '@body-background': '#284B63',
                            '@text-color': 'white',
                            '@input-color': 'black',
                            '@form-item-label-font-size': '1.15em',
                            '@label-color': 'black',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};