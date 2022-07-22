export const BASE_TITLE = 'SVG to SVGHMI';
// export const API_SERVER = 'http://localhost:2800/';
// export const API_SERVER = 'http://192.168.7.141:2800/';
export const API_SERVER = 'http://server.cirillsokolov.com:2800/';
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
        {
            name: 'removeAttrs',
            params: {
                attrs: '(sketch|stroke-dasharray)',
            },
        },
    ],
    optimization: {
        delRefs: true,
        moveGradients: true,
        addDefaults: true,
        delGradientTransform: true,
        connectBgColor: true,
        bgColorId: 'bgColor',
        addFlipInterface: true,
    }
}