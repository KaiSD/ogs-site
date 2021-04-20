/*
 *
 * Реакции
 *
 */


НастроитьМышьИКлаву = мир =>
{
    мир.сцена.input.mouse.disableContextMenu();
    мир.клавиши = мир.сцена.input.keyboard.createCursorKeys();
};


// // // //


УведомитьОМыши = мир =>
{
    var мышь = мир.сцена.input.activePointer;
    const новое = {
        "x": мышь.x,
        "y": мышь.y,
        "нажата": мышь.isDown,
    };
    if (
        мир.мышь &&
        мир.мышь.x == новое.x &&
        мир.мышь.y == новое.y &&
        мир.мышь.нажата == новое.нажата
    ) {
        // Ничего не делаем.
    }
    else
    {
        мир.мышь = новое;
        мир.уведомить("изменили мышь");
    }
};


// // // //


УведомитьОКлаве = мир =>
{
    var новое = {
        "направление": 0,
        "прыжок": false,
    };
    if (мир.клавиши.left.isDown)
    {
        новое.направление = -1;
    }
    else if (мир.клавиши.right.isDown)
    {
        новое.направление = 1;
    }
    if (мир.клавиши.space.isDown)
    {
        новое.прыжок = true;
    }
    if (
        мир.клава &&
        мир.клава.направление == новое.направление &&
        мир.клава.прыжок == новое.прыжок
    ) {
        // Ничего не делаем.
    }
    else
    {
        мир.клава = новое;
        мир.уведомить("изменили клаву");
    }
};

// // // //


УведомитьОбУправленииКлавой = мир =>
{
    const естьДвижение = (мир.клава.направление != 0 || мир.клава.прыжок);
    // Начало движения.
    if (!мир.управление && естьДвижение)
    {
        мир.управление = мир.клава;
        мир.уведомить("изменили управление");
    }
    // Окончание движения.
    else if (мир.управление && !естьДвижение)
    {
        мир.управление = null;
        мир.уведомить("изменили управление");
    }
    // Продолжение движения.
    else if (
        (мир.управление && естьДвижение) &&
        (
            (мир.управление.направление != мир.клава.направление) ||
            (мир.управление.прыжок != мир.клава.прыжок)
        )
    ) {
        мир.управление = мир.клава;
        мир.уведомить("изменили управление");
    }
};


// // // //


УведомитьОбУправленииМышью = мир =>
{
    const камера = мир.сцена.cameras.main;
    const ширина = камера.width;
    const высота = камера.height;
    var новое = {
        "направление": 0, // Центр.
        "прыжок": false,
    };
    новое.прыжок = (мир.мышь.y < высота * 0.45);
    if (мир.мышь.x < ширина * 0.45)
    {
        новое.направление = -1; // Лево.
    }
    else if (мир.мышь.x > ширина * 0.55)
    {
        новое.направление = 1; // Право.
    }

    // Начало движения.
    if (!мир.управление && мир.мышь.нажата)
    {
        мир.управление = новое;
        мир.уведомить("изменили управление");
    }
    // Окончание движения.
    else if (мир.управление && !мир.мышь.нажата)
    {
        мир.управление = null;
        мир.уведомить("изменили управление");
    }
    // Продолжение движения.
    else if (
        (мир.управление && мир.мышь.нажата) &&
        (
            (мир.управление.направление != новое.направление) ||
            (мир.управление.прыжок != новое.прыжок)
        )
    ) {
        мир.управление = новое;
        мир.уведомить("изменили управление");
    }
};


/*
 *
 * Последовательность
 *
 */


мир.разобрать(`
создать сцену
    настроить мышь и клаву
обновить сцену
    уведомить о клаве
    уведомить о мыши
изменили мышь
    уведомить об управлении мышью
изменили клаву
    уведомить об управлении клавой
`);

