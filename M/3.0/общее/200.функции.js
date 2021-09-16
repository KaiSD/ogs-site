function вZ64(строка)
{
    var байты = new TextEncoder("utf-8").encode(строка);
    var архив = pako.deflate(байты, { to: 'string' });
    return base64js.fromByteArray(архив);
}

function изZ64(строка)
{
    var архив = base64js.toByteArray(строка);
    var байты = pako.inflate(архив);
    return new TextDecoder("utf-8").decode(байты);
}

function uuid()
{
    // https://stackoverflow.com/a/2117523
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function(c)
        {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }
    );
}
