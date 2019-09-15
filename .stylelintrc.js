module.exports = {
    extends: 'stylelint-config-airbnb',
    'plugins': ['stylelint-scss'],
    rules: {
        'color-no-invalid-hex': true,
        'color-hex-case': 'lower',
        'unit-whitelist': ['em', 'rem', '%', 's', 'px'],
    }
};
