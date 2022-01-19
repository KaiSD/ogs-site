function grМеню(события, подсказки, реплики)
{
    this.создать = function()
    {
        события.подписать(this);
        this.установитьМеню();
        this.улавливатьВыбор();
    };

    this.обработатьСобытие = function(событие)
    {
        let мышь = "мышь/нажатие/";
        let сами = "меню/";
        if (событие.startsWith(мышь))
        {
            let значения = событие.substring(мышь.length).split("/");
            let элемент = значения[2];
            let имя = подсказки.подсказкаДляЭлемента(элемент);
            if (имя && имя in реплики.задано)
            {
                this.отобразитьМеню(имя);
            }
        }
        else if (событие.startsWith(сами))
        {
            UIkit.modal("#меню").hide();
        }
    };

    this.отобразитьМеню = function(имя)
    {
        this.активнаяПодсказка = имя;
        let подсказка = подсказки.задано[имя];
        document.getElementById("меню-заголовок").innerHTML = подсказка.текст;
        UIkit.modal("#меню").show();
    };

    this.улавливатьВыбор = function()
    {
        var тут = this;
        let глаз = document.getElementById("меню-кнопка-глаз");
        глаз.addEventListener(
            "click",
            function() {
                события.уведомить(`меню/глаз/${тут.активнаяПодсказка}`);
            }
        );

        let рука = document.getElementById("меню-кнопка-рука");
        рука.addEventListener(
            "click",
            function() {
                события.уведомить(`меню/рука/${тут.активнаяПодсказка}`);
            }
        );

        let рот = document.getElementById("меню-кнопка-рот");
        рот.addEventListener(
            "click",
            function() {
                события.уведомить(`меню/рот/${тут.активнаяПодсказка}`);
            }
        );

        let нога = document.getElementById("меню-кнопка-нога");
        нога.addEventListener(
            "click",
            function() {
                события.уведомить(`меню/нога/${тут.активнаяПодсказка}`);
            }
        );
    };

    this.установитьМеню = function()
    {
        let html = `
<div id="меню" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 id="меню-заголовок" class="uk-modal-title">Заголовок</h2>
        <div class="uk-child-width-1-4 uk-text-center" uk-grid>
            <div>
                <div id="меню-кнопка-глаз" class="uk-card uk-card-small uk-card-hover uk-card-default uk-card-body">👁️</div>
            </div>
            <div>
                <div id="меню-кнопка-рука" class="uk-card uk-card-small uk-card-hover uk-card-default uk-card-body">🤚</div>
            </div>
            <div>
                <div id="меню-кнопка-рот" class="uk-card uk-card-small uk-card-hover uk-card-default uk-card-body">🗣</div>
            </div>
            <div>
                <div id="меню-кнопка-нога" class="uk-card uk-card-small uk-card-hover uk-card-default uk-card-body">🥾</div>
            </div>
        </div>
    </div>
</div>
        `;
        document.body.insertAdjacentHTML("beforeend", html);
    };

    // Конструктор.
    this.создать();
};

