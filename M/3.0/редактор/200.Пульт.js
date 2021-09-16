function Пульт(события, имяОшибки, имяПуска)
{
    this.создать = function()
    {
        var ошибка = document.getElementById(имяОшибки);

        /*
        var версия = document.getElementById(имяПуска);
        пуск.addEventListener("click", function(событие) {
console.debug("НАДО запустить");
        });
        */

        события.подписать(this);
    };

    this.обработатьСобытие = function(событие)
    {
        if (событие == "код корректен")
        {
            this.показатьОшибку(false);
        }
        else if (событие == "код некорректен")
        {
            this.показатьОшибку(true);
        }
    };


    this.показатьОшибку = function(показать)
    {
        ошибка.innerHTML = показать ? "<span uk-icon=\"icon: warning\"></span>" : "&nbsp;";
    };

    // Конструктор.
    this.создать();
}
