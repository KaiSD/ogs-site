function ПараметрыЗапуска()
{
    this.создать = function() {
        this.параметры = {};
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
                this.параметры[ключ] = null;
            }
            // Ключ со значением.
            else
            {
                var сыройКлюч = арг.slice(0, позицияЗнака);
                var сыроеЗначение = арг.slice(позицияЗнака + 1);
                var ключ = decodeURIComponent(сыройКлюч);
                var значение = decodeURIComponent(сыроеЗначение);
                this.параметры[ключ] = значение;
            }
        }
    };

    // Конструктор.
    this.создать();
}
