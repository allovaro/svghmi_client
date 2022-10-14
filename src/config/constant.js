export const BASE_TITLE = 'SVG to SVGHMI';
export const API_SERVER = 'http://localhost:2800/api';
// export const API_SERVER = 'http://192.168.7.141:2800/api';
// export const API_SERVER = 'https://server.cirillsokolov.com:2800/api';
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