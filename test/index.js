const assert = require("chai").assert;
const npmChecker = require("../index.js");

describe("test npm-checker", function() {
	it("should return a resolved promise - package exists", function(done) {
		npmChecker("http-fetcher")
			.then(res => {
				assert.typeOf(res, "object");
				done();
			})
			.catch(err => {
				console.log(err);
			});
	});
	it("should return a resolved promise - package doesn't exist", function(
		done
	) {
		npmChecker("non-existing-package")
			.then(res => {
				assert.equal(res, false);
				done();
			})
			.catch(err => {
				console.log(err);
			});
	});
	it("should return a rejected promise - something wrong happened", function(
		done
	) {
		npmChecker("non-existing-package")
			.then(res => {
				assert.equal(res, false);
				done();
			})
			.catch(err => {
				assert.typeOf(res, "object");
				done();
			});
	});
});
