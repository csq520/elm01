module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // 'max-len': ['error', { 'code': 80 }],
        // 忽略require的警告
        'global-require': 0,
        // never: 不允许花括号中有空格; objectsInObjects: ..
        // 'object-curly-spacing': ['error', 'never', {'objectsInObjects': false}],
        // disabled '++', example: for(let i=0; i<10; i++)
        'no-plusplus': 'off',
        // 'no-param-reassign': 'off',
        // 'no-shadow': 'off',
        'import/no-unresolved': 0,
        'no-param-reassign': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
};
