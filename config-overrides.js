const path = require('path');
const { override, addWebpackAlias} = require('customize-cra');
/**
 * 使用react-app-rewired修改create-react-app的默认配置
 */

module.exports=override(
    addWebpackAlias({
        Src: path.resolve(__dirname, './src/'),
        Pages: path.resolve(__dirname, './src/pages')
    })
 );
