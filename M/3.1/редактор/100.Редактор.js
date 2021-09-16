function Редактор(события, имяРедактора)
{
    this.создать = function()
    {
        this.первоначальныйЗаголовок = document.title;
        this.установитьAce();
        this.улавливатьЗавершениеРедактирования();
        this.пз = new ПараметрыЗапуска();
        this.задатьКодПриЗапуске();
        события.подписать(this);
    };

    this.задатьКодПриЗапуске = function()
    {
        var z64 = this.пз.параметры["z64"];
        if (z64)
        {
            var код = мир.изZ64(z64);
            this.ace.session.setValue(код);
        }
    };

    this.запуститьОтдельно = function()
    {
        var содержимое = this.ace.session.getValue();
        var z64 = мир.вZ64(содержимое);
        var путь = window.location.pathname + "/../../проигрыватель/index.html?z64=" + z64;
        window.open(путь);
    };

    this.исполнитьКод = function()
    {
        var содержимое = this.ace.session.getValue();
        var z64 = мир.вZ64(содержимое);
        var путь = window.location.pathname + "?z64=" + z64;
        history.pushState(null, "", путь);
        document.title = `${this.первоначальныйЗаголовок} ${z64.length}:${z64.slice(z64.length - 5)}`;

        // Исполняем явно код лишь первый раз.
        var проигрыватель = document.getElementById("проигрыватель");
        if (!проигрыватель.src)
        {
            проигрыватель.src = "../проигрыватель/index.html?z64=" + z64;
        }
        // После запуска уведомляем iframe о новом коде без перезагрузки.
        else
        {
            window.frames.проигрыватель.postMessage(z64, "*");
        }
    };

    this.обработатьСобытие = function(событие)
    {
        if (событие == "завершили редактирование")
        {
            this.проверитьКорректностьКода();
        }
        else if (событие == "код корректен")
        {
            this.исполнитьКод();
        }
        else if (событие == "перезапустить")
        {
            this.перезапуститьКод();
        }
        else if (событие == "запустить отдельно")
        {
            this.запуститьОтдельно();
        }
    };

    this.перезапуститьКод = function()
    {
        var содержимое = this.ace.session.getValue();
        var z64 = мир.вZ64(содержимое);
        var проигрыватель = document.getElementById("проигрыватель");
        проигрыватель.src = "../проигрыватель/index.html?z64=" + z64;
    };

    this.проверитьКорректностьКода = function()
    {
        try
        {
            eval(this.ace.session.getValue());
            события.уведомить("код корректен");
        }
        catch (ошибка)
        {
            события.уведомить("код некорректен");
        }
    };

    this.улавливатьЗавершениеРедактирования = function()
    {
        var тут = this;
        this.ace.session.on("change", function(дельта) {
            const билет = мир.uuid();
            тут.билет = билет;
            setTimeout(
                function()
                {
                    if (билет == тут.билет)
                    {
                        события.уведомить("завершили редактирование");
                    }
                },
                300
            );
        });
    };

    this.установитьAce = function()
    {
         var область = document.getElementById(имяРедактора);
         this.ace = window.ace.edit(имяРедактора);
         this.ace.session.setMode("ace/mode/javascript");
         this.ace.session.setUseWrapMode(true);
    };

    // Конструктор.
    this.создать();
}
