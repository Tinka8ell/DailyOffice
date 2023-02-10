exports.handler = async (event, context, callback) => {
    console.log('getBibleGateway: event: ', event, ', context: ', context);
    const url = //`https://www.biblegateway.com/passage/?{event.rawQueryString}`;
        'https://www.whatismybrowser.com/detect/what-is-my-user-agent/';
    console.log('url:', url);
    const options = { 
        headers: {
            'Content-Type': 'text/html',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Viewport-Width': '1920'
        }
    };
    const res = await fetch(url, options);
    const text = await res.text();
    // console.log('getBibleQuoteAsHtml => text: ', text);
    const statusCode = 200;
    const headers = {
        'Content-Type': 'application/json',
    };
    return {
        statusCode,
        headers,
        body: `{ "verse": "{ html: ${text} }" `
    };
};