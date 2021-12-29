Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: '13thageko',
            lang: 'ko',
            dir: 'compendium'
        });
    }
});
