export const GA_ID = 'G-K7FGW03X55';
export const BASE_TITLE = 'SVG to SVGHMI';
export const API_SERVER = 'http://localhost:2800/api';
// export const API_SERVER = 'http://192.168.7.141:2800/api';
// export const API_SERVER = 'https://server.cirillsokolov.com:2800/api';
export const API_CRYPTOCLOUD = 'https://api.cryptocloud.plus/v1';
export const AUTH_CRYPTOCLOUD = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE0NCwiZXhwIjo4ODA2NTkxNDc3Mn0.KeYgruMO8EMj9Q_vt-jw469qtHo6OozBg8kxs1RzHHY';
export const SHOP_ID = 'W5iMrW2Dlt3zScY9';
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
    }
}