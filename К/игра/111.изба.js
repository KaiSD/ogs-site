/*
 *
 * Реакции
 *
 */


ЗагрузитьРесурсыИзбы = мир =>
{
    мир.сцена.load.image("изба", "ресурсы/сцены/изба.jpg");
    мир.сцена.load.image("основа", "ресурсы/отладка/основа.jpg");
};


// // // //


СоздатьИзбу = мир =>
{
    const камера = мир.сцена.cameras.main;
    камера.backgroundColor = Phaser.Display.Color.HexStringToColor("#fbfbfb");

    мир.сцена.add.image(0, 0, "изба").setOrigin(0, 0);

    var полСлева = мир.каркас.create(0, 585, "основа").setOrigin(0, 0);
    полСлева.setScale(43, 1).refreshBody();
    полСлева.setVisible(false);
    var полСправа = мир.каркас.create(510, 585, "основа").setOrigin(0, 0);
    полСправа.setScale(200, 1).refreshBody();
    полСправа.setVisible(false);
    мир.полКрышки = мир.каркас.create(300, 585, "основа").setOrigin(0, 0);
    мир.полКрышки.setScale(30, 1).refreshBody();
    мир.полКрышки.setVisible(false);

    var стенаСлева = мир.каркас.create(0, 385, "основа");
    стенаСлева.setScale(1, 50).refreshBody();
    стенаСлева.setVisible(false);
    var стенаСправа = мир.каркас.create(2000, 385, "основа");
    стенаСправа.setScale(1, 50).refreshBody();
    стенаСправа.setVisible(false);
};


/*
 *
 * Последовательность
 *
 */


мир.разобрать(`
загрузить ресурсы сцены
    загрузить ресурсы избы
создать сцену
    создать избу
`);

