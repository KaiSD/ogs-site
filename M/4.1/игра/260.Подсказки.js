function Подсказки()
{
    this.создать = function()
    {
        this.задано = {};
    };

    this.задатьПодсказку = function(имя)
    {
        let за = this.задано[имя];
        if (!за.элемент || !за.текст)
        {
            return;
        }

        let элемент = document.getElementById(за.элемент);
        if (!элемент)
        {
            return;
        }

        элемент.setAttribute("uk-tooltip", `pos: right; title: ${за.текст}`);
    };

    this.обработатьКлюч = function(ключ, путь, значение)
    {
        if (путь[0] != "подсказки")
        {
            return;
        }

        let имя = путь[1];
        let свойство = путь.slice(2).join(".");
        if (!this.задано[имя])
        {
            this.задано[имя] = {};
        }
        this.задано[имя][свойство] = значение;

        this.задатьПодсказку(имя);
    };

    this.подсказкаДляЭлемента = function(элемент)
    {
        for (var имя in this.задано)
        {
            let подсказка = this.задано[имя];
            if (подсказка.элемент == элемент)
            {
                return имя;
            }
        }
        return null;
    };

    // Конструктор.
    this.создать();
};
