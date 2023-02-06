const https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    let body;
    let VersionReference;
    let statusCode = 200;
    const headers = {
    "Content-Type": "application/json",
    };

    try {
    switch (event.routeKey) {
        case "GET /quote/{version}/{reference}":
            const url = 'https://www.biblegateway.com/passage/?version=' +
                        event.pathParameters.version + '&search=' + 
                        encodeURIComponent(event.pathParameters.reference);
            const req = https.request(event.options, (res) => {
                let body = '';
                console.log('Status:', res.statusCode);
                console.log('Headers:', JSON.stringify(res.headers));
                res.setEncoding('utf8');
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => {
                    console.log('Successfully processed HTTPS response');
                    // If we know it's JSON, parse it
                    if (res.headers['content-type'] === 'application/json') {
                        body = JSON.parse(body);
                    }
                    //callback(null, body);
                });
            });
            // req.on('error', callback);
            // req.write(JSON.stringify(event.data));
            req.end();
            break;
        default:
            throw new Error(`Unsupported route: "${event.routeKey}", parameters: ${ Object.keys(event.pathParameters).join() }, reference: ${event.pathParameters.reference}`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};