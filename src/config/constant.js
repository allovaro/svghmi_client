const local_api_url = 'http://localhost:2800/api';
const global_api_url = 'https://server.cirillsokolov.com:2800/api';
const env = process.env.NODE_ENV;
export const GA_ID = 'G-K7FGW03X55';
export const BASE_TITLE = 'SVG to SVGHMI';
export const API_SERVER = env === 'production' ? global_api_url : local_api_url;
export const API_CRYPTOCLOUD = 'https://api.cryptocloud.plus/v1';
export const AUTH_CRYPTOCLOUD = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE0NCwiZXhwIjo4ODA2NTkxNDc3Mn0.KeYgruMO8EMj9Q_vt-jw469qtHo6OozBg8kxs1RzHHY';
export const SHOP_ID = 'W5iMrW2Dlt3zScY9';
export const MAX_PREMIUM_CONVERT_FILES = 100;
export const MAX_FREE_CONVERT_FILES = 1;
export const FREE_FILE_SIZE = 102400;
export const PREMIUM_FILE_SIZE = 2097152;
export const CONFIG_DEFAULT = {
    svgo: [
        'convertStyleToAttrs',
        'removeUnusedNS',
        'convertColors',
        'removeEditorsNSData',
        'removeDoctype',
        'removeDimensions',
        'removeMetadata',
        'sortDefsChildren',
        'sortAttrs',
        'moveGroupAttrsToElems',
        'convertTransform',
        {
            name: 'removeAttrs',
            params: {
                attrs: '()',
            },
        },
    ],
    optimization: {
        delRefs: true,
        moveGradients: true,
        addDefaults: true,
        spaceToComma: true,
        connectBgColor: true,
        polyToPath: true,
        bgColorId: ['bgColor'],
        addFlipInterface: true,
        pretify: true,
    }
}