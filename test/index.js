const assert = require('chai').assert;
const npmChecker = require('../index.js');

describe('test npm-checker', function() {
	it('should return a resovled promise - package exists', function(done) {
		npmChecker('http-fetcher')
			.then(res => {
				assert.equal(res, true);
				done();
			})
			.catch(err => {
				console.log(err);
			});
	});
	it('should return a resovled promise - package doesn\'t exist', function(done) {
		npmChecker('non-existing-package')
			.then(res => {
				assert.equal(res, true);
				done();
			})
			.catch(err => {
				console.log(err);
			});
	});
	it('should return a rejected promise - something wrong happened', function(done) {
		npmChecker('non-existing-package')
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				assert.equal(res, false);
				done();
			});
	});
});