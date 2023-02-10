const https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    console.log('getBibleGateway: event: ', event, ', context: ', context);
    let body = "";
    let statusCode = 200;
    event.routeKey = "GET /{version}/{reference}";
    console.log('event.routeKey:', event.routeKey);
    try {
    switch (event.routeKey) {
        case "GET /{version}/{reference}":
            const url = new URL('https://www.biblegateway.com/passage/?' +
                        event.rawQueryString);
            console.log('url:', url);
            const req = https.request(url, (res) => {
                let body = '';
                console.log('Status:', res.statusCode);
                console.log('Headers:', JSON.stringify(res.headers));
                res.setEncoding('utf8');
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => {
                    console.log('Successfully processed HTTPS response');
                    // console.log('body:', body)
                    // If we know it's JSON, parse it
                    if (res.headers['content-type'] === 'application/json') {
                        console.log('JSON.parse');
                        body = JSON.parse(body);
                        console.log('body:', body);
                    }
                    callback(null, body);
                });
            });
            // req.on('error', callback);
            req.write(JSON.stringify(event.data));
            req.end();
            break;
        default:
            console.log ("Got to default");
            throw new Error(`Unsupported route: "${event.routeKey}", parameters: ${ Object.keys(event.pathParameters).join() }, reference: ${event.pathParameters.reference}`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        //body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};