function Пульт(события, имяОшибки, имяПерезапуска, имяОтдельно, имяСсылки)
{
    this.создать = function()
    {
        var ошибка = document.getElementById(имяОшибки);
        мир.назначитьКнопкамСобытия(
            события,
            [
                [имяПерезапуска, "перезапустить"],
                [имяОтдельно, "запустить отдельно"],
                [имяСсылки, "скопировать ссылку"],
            ]
        );
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
        else if (событие == "скопировать ссылку")
        {
            navigator.clipboard.writeText(window.location)
                .then(() => {
                    UIkit.notification("Скопировали ссылку", { status: "success", timeout: 1000 });
                })
                .catch(err => {
                    UIkit.notification("Не удалось скопировать ссылку :(", { status: "danger", timeout: 5000 });
                });
        }

    };


    this.показатьОшибку = function(показать)
    {
        ошибка.innerHTML = показать ? "<span uk-icon=\"icon: warning\"></span>" : "&nbsp;";
    };

    // Конструктор.
    this.создать();
}
