
/*
 *
 * Реакции
 *
 */


ПодготовитьОбластьОтрисовки = мир =>
{
    var родитель = document.createElement("div");
    родитель.style = `
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
display: flex;
align-items: center;
    `;
    var ребёнок = document.createElement("div");
    ребёнок.style = `margin: auto;`;
    родитель.appendChild(ребёнок);
    document.body.appendChild(родитель);

    мир.областьОтрисовки = ребёнок;
};


// // // //

НастроитьИгру = мир =>
{
    мир.настройки = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: мир.областьОтрисовки,
        physics: {
            default: "arcade",
            arcade: {
                gravity: {
                    y: 1300,
                },
                debug: false,
            },
        },
        scene: {
            preload: function() {
                мир.сцена = this;
                мир.уведомить("загрузить ресурсы сцены");
            },
            create: function() {
                мир.сцена = this;
                мир.уведомить("создать сцену");
            },
            update: function() {
                мир.сцена = this;
                мир.уведомить("обновить сцену");
            },
        },
    };
};


// // // //


ЗапуститьИгру = мир =>
{
    мир.игра = new Phaser.Game(мир.настройки);
};


/*
 *
 * Последовательность
 *
 */


мир.разобрать(`
пуск
    подготовить область отрисовки
    настроить игру
    запустить игру
`);

