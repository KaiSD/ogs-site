/*
 *
 * Реакции
 *
 */


УведомитьЛишьПервыйРаз = мир =>
{
    if (мир.уведомилиЛишьПервыйРаз)
    {
        return;
    }
    мир.уведомилиЛишьПервыйРаз = true;
    мир.уведомить("лишь первый раз");
};


ВывестиУзлыСцены = мир =>
{
    var узлы = мир.сцена.children.list;
    for (var номер in узлы)
    {
        var узел = узлы[номер];
        console.debug(номер + ": " + JSON.stringify(узел.toJSON()));
    }
};


/*
 *
 * Последовательность
 *
 */


мир.разобрать(`
#обновить сцену
#    уведомить лишь первый раз
#лишь первый раз
#    вывести узлы сцены
`);

