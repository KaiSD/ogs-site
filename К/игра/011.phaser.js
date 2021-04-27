
/*
 *
 * Реакции
 *
 */


НастроитьИгру = мир =>
{
    мир.настройки = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: 0xfbfbfb,
        scale: {
            width: 800,
            height: 600,
            parent: document.getElementById("родитель"),
            mode: Phaser.Scale.ENVELOP,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
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


// // // //


ЗадатьГромкость = мир =>
{
    мир.сцена.sound.volume = 0.15;
};


/*
 *
 * Последовательность
 *
 */


мир.разобрать(`
пуск
    настроить игру
    запустить игру
создать сцену
    задать громкость
`);

