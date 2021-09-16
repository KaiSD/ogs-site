var мир = {};

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

мир.параметрыЗапуска = function()
{
    var параметры = {};
    var запрос = window.location.search.substring(1);
    var аргументы = запрос.split("&");
    for (var номер in аргументы)
    {
        var арг = аргументы[номер];
        var позицияЗнака = арг.indexOf("=");
        // Лишь ключ.
        if (позицияЗнака == -1)
        {
            var ключ = decodeURIComponent(арг);
            параметры[ключ] = null;
        }
        // Ключ со значением.
        else
        {
            var сыройКлюч = арг.slice(0, позицияЗнака);
            var сыроеЗначение = арг.slice(позицияЗнака + 1);
            var ключ = decodeURIComponent(сыройКлюч);
            var значение = decodeURIComponent(сыроеЗначение);
            параметры[ключ] = значение;
        }
    }
    return параметры;
};

мир.разобрать = function(словарь)
{
    мир.состояние.разобрать(словарь);
};
