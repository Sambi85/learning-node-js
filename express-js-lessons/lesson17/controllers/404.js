exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' })  
};// <--- moved 404 here! 





