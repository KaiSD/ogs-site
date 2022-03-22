function Анимации(события)
{
    this.создать = function()
    {
        this.задано = {};
        this.анимации = {};
    };

    this.запустить = function(имя, элемент)
    {
        // Останавливаем прошлый экземпляр этой анимации на том же элементе.
        this.остановить(имя, элемент);
        // Запускаем новый экземпляр анимации на том же элементе.
        let ключ = `${элемент.id}`;//-${имя}`;
        this.анимации[ключ] = new Анимация(элемент, this.задано[имя]);
    }

    this.обработатьКлюч = function(ключ, путь, значение)
    {
        if (путь[0] != "анимации")
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

        события.уведомить(`анимации/${имя}`);
    };

    this.остановить = function(имя, элемент)
    {
        let ключ = `${элемент.id}`;//-${имя}`;
        if (ключ in this.анимации)
        {
            this.анимации[ключ].остановить();
            delete this.анимации[ключ];
        }
    }

    // Конструктор.
    this.создать();
};
