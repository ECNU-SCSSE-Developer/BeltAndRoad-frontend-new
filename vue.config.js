const configs = require('./src/config');
const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
};
// 用于做相应的 merge 处理
const merge = require('webpack-merge');

// 根据环境判断使用哪份配置
const cfg = process.env.NODE_ENV === 'development' ? configs.dev.env : configs.build.env;

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_img', resolve('src/assets'))

        const oneOfsMap = config.module.rule('less').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    resources: './src/styles/common.less',
                })
                .end()
        });
        config.plugin('define')
            .tap(args => {
                let name = 'process.env';
                // 使用 merge 保证原始值不变
                args[0][name] = merge(args[0][name], cfg);
                return args
            })
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    prime: '#8DCD8D',
                    'button-primary-background-color': '@prime',
                    'button-primary-border-color': '@prime',
                    'radio-checked-icon-color': '@prime',
                    'nav-bar-background-color':'@prime',
                    'nav-bar-title-text-color':'#fff',
                    'nav-bar-icon-color':'#fff'
                }
            }
        }
    },
}