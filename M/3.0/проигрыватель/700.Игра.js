function Игра()
{
    this.создать = function()
    {
        this.события = new События();
        this.пз = new ПараметрыЗапуска();
        var z64 = this.пз.параметры["z64"];
        this.исполнитьКод(z64);
        this.отслеживатьОбновленияКода();
    };

    this.исполнитьКод = function(z64)
    {
        if (z64)
        {
            var код = изZ64(z64);
/**/console.debug("Игра.исполнитьКод:", код);
        }
    };

    this.отслеживатьОбновленияКода = function()
    {
        var тут = this;
        window.addEventListener("message", function(событие) {
            тут.исполнитьКод(событие.data);
        });
    };

    // Конструктор.
    this.создать();
}
