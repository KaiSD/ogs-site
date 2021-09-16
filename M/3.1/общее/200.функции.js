var мир = {};

мир.вZ64 = function(строка)
{
    var байты = new TextEncoder("utf-8").encode(строка);
    var архив = pako.deflate(байты, { to: 'string' });
    return base64js.fromByteArray(архив);
};

мир.изZ64 = function(строка)
{
    var архив = base64js.toByteArray(строка);
    var байты = pako.inflate(архив);
    return new TextDecoder("utf-8").decode(байты);
};

мир.uuid = function()
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
};

мир.назначитьКнопкамСобытия = function(события, список)
{
    for (var номер in список)
    {
        const пара = список[номер];
        var кнопка = document.getElementById(пара[0]);
        кнопка.addEventListener("click", function(_) {
            события.уведомить(пара[1]);
        });
    }
};
