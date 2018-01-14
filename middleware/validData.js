module.exports = function(req, res, next) {
	req.checkBody('title').notEmpty();
	req.checkBody('body').notEmpty();
	const errors = req.validationErrors( true );
	if ( errors ) res.status(405).send(errors);
	next();
}