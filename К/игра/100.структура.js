function создатьУзлыСценыПоСтруктуре(структура)
{
    for (var имя in структура)
    {
        var узел = null;
        var описание = структура[имя];

        var свойства = {};
        Object.assign(свойства, описание);
        delete свойства["тип"];
        delete свойства["x"];
        delete свойства["y"];
        delete свойства["texture"];
        delete свойства["группы"];

        // Создаём узел.
        if (описание.тип == "изображение")
        {
            узел = описание.родитель.add.image(описание.x, описание.y, описание.texture);
        }
        else if (описание.тип == "платформа")
        {
            узел = описание.родитель.create(описание.x, описание.y, описание.texture);
        }
        else if (описание.тип == "спрайт")
        {
            узел = описание.родитель.add.sprite(описание.x, описание.y, описание.texture);
        }

        // Помещаем в группы.
        for (var номер in описание.группы)
        {
            var группа = описание.группы[номер];
            группа.add(узел);
        }

        // Задаём имя.
        узел.name = имя;

        // Выставляем оставшиеся невыставленными свойства.
        for (var свойство in свойства)
        {
            var значение = свойства[свойство];
            узел[свойство] = значение;
        }

        // Необходимо после смены originX/Y.
        узел.updateDisplayOrigin();
        // Необходимо для статических физических объектов.
        if ("refreshBody" in узел)
        {
            узел.refreshBody();
        }
    }
}
