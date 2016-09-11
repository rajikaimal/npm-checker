const httpFetcher = require('http-fetcher');

module.exports = function(packageName) {

	let found = null;

	return new Promise(function(resolve, reject) {
		httpFetcher('npmsearch.com', `/query?q=${packageName}&fields=name`, 'http')
		  .then(result => {
				httpFetcher('npmsearch.com', `/query?q=${packageName}&fields=name,repository&size=${result.total}`, 'http')
				  .then(res => {
				    res.results.map(pkg => {
				    	if(pkg.name[0] === packageName) {
				    		found = true;
				    		resolve(pkg);
				    	}
				    });
						if(found === null) {
							resolve(false);
						}
				  })
				  .catch(err => {
				  	reject(err);
				  });
		  })
		  .catch(err => {
		  	reject(err);
		  });
	});
};
