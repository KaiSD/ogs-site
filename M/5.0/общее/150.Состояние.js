function Состояние()
{
    this.создать = function()
    {
        this.обработчик = null;
        this.значения = {};
    };

    this.выпрямить = function(obj)
    {
        // https://stackoverflow.com/a/42121920
        var newObj = {};
        for (var key in obj)
        {
            if (typeof obj[key] === 'object' && obj[key] !== null)
            {
                var temp = this.выпрямить(obj[key])
                for (var key2 in temp)
                {
                   newObj[key + "." + key2] = temp[key2];
                }
            }
            else
            {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    };

    this.лишьНовыеЗначения = function(значения)
    {
        var новые = {};
        for (var ключ in значения)
        {
            var было = this.значения[ключ];
            var стало = значения[ключ];
            if (!(было != null && было == стало))
            {
                новые[ключ] = стало;
            }
        }
        return новые;
    };

    this.разобрать = function(словарь)
    {
        this.разобратьВыпрямленный(this.выпрямить(словарь));
    };

    this.разобратьВыпрямленный = function(выпрямленныйСловарь)
    {
        for (var ключ in выпрямленныйСловарь)
        {
            let путь = ключ.split(".");
            let значение = выпрямленныйСловарь[ключ];
            if (this.обработчик)
            {
                this.обработчик(ключ, путь, значение);
            }
            this.значения[ключ] = значение;
        }
    };

    this.разобратьЛишьНовое = function(словарь)
    {
        this.разобратьВыпрямленный(this.лишьНовыеЗначения(this.выпрямить(словарь)));
    };

    // Конструктор.
    this.создать();
}
