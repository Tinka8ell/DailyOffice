exports.handler = async (event, context, callback) => {
    const url = `https://www.biblegateway.com/passage/?{event.rawQueryString}`;
    const options = { 
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' + 
            'AppleWebKit/537.36 (KHTML, like Gecko) ' +
            'Chrome/79.0.3945.88 ' +
            'Safari/537.36'
        }
    };
    const res = await fetch(url, options);
    const text = await res.text();
    const domParser = new DomParser();
    const doc = domParser.parseFromString(text, "text/html");
    const main = doc.querySelector('div[role=main]').innerHTML;
    const statusCode = 200;
    const headers = {
        'Content-Type': 'text/html',
    };
    return {
        statusCode,
        headers,
        body: `{ "verse": "${JSON.stringify(main)}"}`
    };
};