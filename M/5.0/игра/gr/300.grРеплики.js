function grРеплики(события)
{
    this.создать = function()
    {
        this.задано = {};
        события.подписать(this);
    };

    this.номерРеплики = function(инструмент)
    {
        if (инструмент == "рука")
        {
            return 1;
        }
        else if (инструмент == "рот")
        {
            return 2;
        }
        else if (инструмент == "нога")
        {
            return 3;
        }
        // "глаз"
        return 0;
    };

    this.обработатьКлюч = function(ключ, путь, значение)
    {
        if (!ключ.startsWith("gr.реплики"))
        {
            return;
        }

        let имя = путь[2];
        let свойство = путь.slice(3).join(".");
        if (!this.задано[имя])
        {
            this.задано[имя] = {};
        }
        this.задано[имя][свойство] = значение;
    };

    this.обработатьСобытие = function(событие)
    {
        let меню = "меню/";
        if (событие.startsWith(меню))
        {
            let значения = событие.substring(меню.length).split("/");
            let инструмент = значения[0];
            let подсказка = значения[1];
            this.отобразитьРеплику(инструмент, подсказка);
        }
    };

    this.отобразитьРеплику = function(инструмент, подсказка)
    {
        let номер = this.номерРеплики(инструмент);
        let реплика = this.задано[подсказка][номер];
        let частей = реплика.split(/ /);
        let длительность = частей.length * 1000;
        UIkit.notification({
            message: реплика,
            timeout: длительность,
        });
    };

    // Конструктор.
    this.создать();
};
