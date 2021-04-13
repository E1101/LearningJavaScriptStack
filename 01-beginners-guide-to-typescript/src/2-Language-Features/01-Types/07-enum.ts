/**
 * All enums have a value associated with them. By default,
 * the value of the first item in the enum list is zero and
 * each successive item in the list is one more than the
 * preceding item.
 */
enum HttpStatus {
    Success,
    NotFound,
    ServerError,
};

function logStatus(status: HttpStatus) {
    switch (status) {
        case HttpStatus.Success:
            console.log('200');
            break;
        case HttpStatus.NotFound:
            console.log('404');
            break;
        case HttpStatus.ServerError:
            console.log('500');
            break;
    }
}

logStatus('Success'); // Error
logStatus(0); // Error

logStatus(HttpStatus.Success); // 200
logStatus(HttpStatus.NotFound); // 404
logStatus(HttpStatus.ServerError); // 500


enum HTTP {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

/**
 * When using numeric enums, we are able to get a mapping from
 * enum value to enum name. In the HTTP enum below, we can print
 * the name of each enum member using bracket notation:
 */
console.log(HTTP[HTTP.Success]); // 'Success'
console.log(HTTP[HTTP.NotFound]); // 'NotFound'
console.log(HTTP[HTTP.ServerError]); // 'ServerError'
