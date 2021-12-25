Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: '13thagekr',
            lang: 'ko',
            dir: 'compendium'
        });
    }
});
