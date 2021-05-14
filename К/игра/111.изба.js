/*
 *
 * Реакции
 *
 */


ЗагрузитьРесурсыИзбы = мир =>
{
    мир.сцена.load.audio("звук-избы", "ресурсы/звуки/387922__setuniman__scheming-1o95.mp3");
    мир.сцена.load.audio("звук-зарядки", "ресурсы/звуки/543927__eminyildirim__pistol-gun-cocking.wav");
    мир.сцена.load.audio("пуск-стрелы", "ресурсы/звуки/521552__omerbhatti34__arrow-impact.mp3");
    мир.сцена.load.audio("удар-стрелы", "ресурсы/звуки/330800__czarcazas__shattering-glass-small.mp3");
    мир.сцена.load.audio("выломали-окно", "ресурсы/звуки/448004__kneeling__break-window.mp3");
    мир.сцена.load.audio("молоко-перевернули", "ресурсы/звуки/235596__tcrocker68__large-glassbottle-fall-woodfloor.wav");
    мир.сцена.load.audio("молоко-прыгнули", "ресурсы/звуки/352065__cabled-mess__glassy-bits-06.wav");

    мир.сцена.load.image("основа", "ресурсы/отладка/основа.jpg");
    мир.сцена.load.image("линия", "ресурсы/отладка/линия_вертикальная.png");
    мир.сцена.load.image("изба", "ресурсы/сцены/изба.jpg");
    мир.сцена.load.image("молоко", "ресурсы/вещи/банка_молока.png");
    мир.сцена.load.image("лужа", "ресурсы/вещи/лужа.png");
    мир.сцена.load.image("паук", "ресурсы/животные/паук.png");
    мир.сцена.load.image("мышь", "ресурсы/животные/мышь.png");
    мир.сцена.load.image("мышь", "ресурсы/животные/мышь.png");
    мир.сцена.load.image("самовар", "ресурсы/вещи/самовар.png");
    мир.сцена.load.image("стрела", "ресурсы/вещи/стрела.png");
    мир.сцена.load.image("окно-разбито", "ресурсы/вещи/окно_разбитая-часть.png");
    мир.сцена.load.image("окно-выломано", "ресурсы/вещи/окно_дыра.png");
};


// // // //


ЗадатьСтруктуруИзбы = мир =>
{
    мир.изба = {
        фон: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 0,
            y: 0,
            texture: "изба",
            originX: 0,
            originY: 0,
        },

        полДоКрышки: {
            родитель: мир.каркас,
            тип: "платформа",
            x: 0,
            y: 585,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 43,
            visible: false,
        },
        полКрышки: {
            родитель: мир.каркас,
            тип: "платформа",
            x: 300,
            y: 585,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 30,
            visible: false,
        },
        полПослеКрышки: {
            родитель: мир.каркас,
            тип: "платформа",
            x: 510,
            y: 585,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 200,
            visible: false,
        },

        леваяСтена: {
            родитель: мир.каркас,
            тип: "платформа",
            x: 0,
            y: 200,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleY: 50,
            visible: false,
        },
        праваяСтена: {
            родитель: мир.каркас,
            тип: "платформа",
            x: 2000,
            y: 200,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleY: 50,
            visible: false,
        },

        фундаментПечи: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 583,
            y: 473,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 65,
            visible: false,
        },
        полка1: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 666,
            y: 335,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 3,
            visible: false,
        },
        полкаМолока: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 771,
            y: 335,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 3,
            visible: false,
        },
        полка3: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 862,
            y: 335,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 3,
            visible: false,
        },
        полкаСамовара: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 995,
            y: 355,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 4,
            visible: false,
        },
        лежанкаПечи: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 620,
            y: 245,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 35,
            visible: false,
        },
        основаТрубыПечи: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 950,
            y: 180,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 12,
            visible: false,
        },

        стол: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 1270,
            y: 427,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 70,
            visible: false,
        },
        подоконник: {
            родитель: мир.платформы,
            тип: "платформа",
            x: 1690,
            y: 375,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 20,
            visible: false,
        },
        разбитоеОкно: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 1660,
            y: 183,
            texture: "окно-разбито",
            originX: 0,
            originY: 0,
            scaleX: 0.75,
            scaleY: 0.75,
            visible: false,
        },
        выломанноеОкно: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 1660,
            y: 183,
            texture: "окно-выломано",
            originX: 0,
            originY: 0,
            scaleX: 0.75,
            scaleY: 0.75,
            visible: false,
        },

        молоко: {
            родитель: мир.сцена.physics,
            тип: "спрайт",
            группы: [мир.вещи],
            x: 785,
            y: 240,
            texture: "молоко",
            scaleX: 0.4,
            scaleY: 0.4,
            depth: 10,
        },
        лужа: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 285,
            y: 585,
            texture: "лужа",
            scaleX: 0.25,
            scaleY: 0.25,
            visible: false,
        },
        самовар: {
            родитель: мир.сцена.physics,
            тип: "спрайт",
            группы: [мир.вещи],
            x: 1003,
            y: 200,
            texture: "самовар",
            scaleX: 0.25,
            scaleY: 0.25,
            depth: 5,
        },

        паук1: {
            родитель: мир.враги,
            тип: "платформа",
            x: 620,
            y: 345,
            texture: "паук",
            скорость: 50,
            низ: 550,
            верх: 270,
            depth: 10,
        },
        нить1: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 619,
            y: 245,
            texture: "линия",
            originX: 0,
            originY: 0,
            depth: 10,
        },
        паук2: {
            родитель: мир.враги,
            тип: "платформа",
            x: 785,
            y: 375,
            texture: "паук",
            скорость: 70,
            низ: 600,
            верх: 270,
            depth: 10,
        },
        нить2: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 784,
            y: 245,
            texture: "линия",
            originX: 0,
            originY: 0,
            depth: 10,
        },
        паук3: {
            родитель: мир.враги,
            тип: "платформа",
            x: 930,
            y: 500,
            texture: "паук",
            скорость: 70,
            низ: 550,
            верх: 270,
            depth: 10,
        },
        нить3: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 929,
            y: 245,
            texture: "линия",
            originX: 0,
            originY: 0,
            depth: 10,
        },
        паук4: {
            родитель: мир.враги,
            тип: "платформа",
            x: 1003,
            y: 250,
            texture: "паук",
            скорость: 40,
            низ: 400,
            верх: 200,
            depth: 10,
        },
        нить4: {
            родитель: мир.сцена,
            тип: "изображение",
            x: 1002,
            y: 180,
            texture: "линия",
            originX: 0,
            originY: 0,
            depth: 10,
        },

        мышь1: {
            родитель: мир.враги,
            тип: "платформа",
            x: 350,
            y: 575,
            texture: "мышь",
            flipX: true,
            depth: 10,
            скорость: 290,
        },
        мышь2: {
            родитель: мир.враги,
            тип: "платформа",
            x: 740,
            y: 575,
            texture: "мышь",
            flipX: true,
            depth: 10,
            скорость: 375,
        },

        кучаСтрел: {
            родитель: мир.стрелы,
            тип: "платформа",
            x: 1270,
            y: 405,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleX: 25,
            scaleY: 2,
            visible: false,
        },
        лук: {
            родитель: мир.стрелы,
            тип: "платформа",
            x: 1280,
            y: 200,
            texture: "основа",
            originX: 0,
            originY: 0,
            visible: false,
        },
        пускСтрелы: {
            родитель: мир.стрелы,
            тип: "платформа",
            x: 1270,
            y: 160,
            texture: "основа",
            originX: 0,
            originY: 0,
            visible: false,
        },
        границаПолётаСтрелы: {
            родитель: мир.стрелы,
            тип: "платформа",
            x: 1830,
            y: 200,
            texture: "основа",
            originX: 0,
            originY: 0,
            scaleY: 20,
            visible: false,
        },
    };
};


// // // //


ЗадатьФункциюПоискаУзлаПоИмени = мир =>
{
    мир.узелСцены = function(имя) {
        return мир.сцена.children.list.find(function(элемент) {
            return элемент.name == имя;
        });
    };
};


// // // //


СоздатьИзбу = мир =>
{
    создатьУзлыСценыПоСтруктуре(мир.изба);
    мир.сцена.sound.play("звук-избы", { loop: true });
};


// // // //


ПозволитьПлатформамПропускатьПрыжки = мир =>
{
    мир.платформы.children.iterate(function(платформа) {
        платформа.body.checkCollision.down = false;
        платформа.body.checkCollision.left = false;
        платформа.body.checkCollision.right = false;
    });
};


// // // //


НастроитьПауков = мир =>
{
    мир.пауки = [];
    мир.нитиПауков = [];
    for (var имя in мир.изба)
    {
        if (имя.startsWith("паук"))
        {
            var паук = мир.узелСцены(имя);
            var имяНити = имя.replace("паук", "нить");
            var нить = мир.узелСцены(имяНити);
            паук.body.setVelocityY(паук.скорость);
            мир.пауки.push(паук);
            мир.нитиПауков.push(нить);
        }
    }
};


// // // //


АнимироватьПауков = мир =>
{
    for (var номер in мир.пауки)
    {
        var паук = мир.пауки[номер];
        var нить = мир.нитиПауков[номер];
        нить.displayHeight = паук.y - нить.y - 5;
        if (паук.y > паук.низ)
        {
            паук.setVelocityY(-паук.скорость);
        } else if (паук.y < паук.верх)
        {
            паук.setVelocityY(паук.скорость);
        }
    }
};


// // // //


НастроитьМышей = мир =>
{
    мир.мыши = [];
    for (var имя in мир.изба)
    {
        if (имя.startsWith("мышь"))
        {
            var мышь = мир.узелСцены(имя);
            мышь.body.setVelocityX(мышь.скорость);
            мир.мыши.push(мышь);
        }
    }
};


// // // //


АнимироватьМышей = мир =>
{
    for (var номер in мир.мыши)
    {
        var мышь= мир.мыши[номер];
        if (мышь.x > 1950)
        {
            мышь.setVelocityX(-мышь.скорость);
            мышь.flipX = false;
        } else if (мышь.x < 50)
        {
            мышь.setVelocityX(мышь.скорость);
            мышь.flipX = true;
        }
    }
};


// // // //


НастроитьСтрелы = мир =>
{
    var куча = мир.узелСцены("кучаСтрел");
    куча.body.checkCollision.down = false;
    var лук = мир.узелСцены("лук");
    лук.body.checkCollision.down = false;
    var пуск = мир.узелСцены("пускСтрелы");

    // Определение прыжка по стрелам.
    мир.сцена.physics.add.collider(мир.колобок, куча, function(a, b) {
        if (мир.колобок.body.touching.down) {
            мир.колобок.прыжокПоСтрелам = true;
        }
    });

    // Определение пуска стрелы.
    var стПуск = мир.сцена.physics.add.collider(мир.колобок, пуск);
    стПуск.collideCallback = function(a, b) {
        if (мир.стрелаЗаряжена && !мир.пускСтрелы)
        {
            мир.пускСтрелы = true;
            мир.уведомить("пуск стрелы");
        }
    };
    стПуск.overlapOnly = true;
};


// // // //


СоздатьСтрелу = мир =>
{
    мир.стрелаЗаряжена = false;
    мир.пускСтрелы = false;

    мир.стрела = мир.сцена.physics.add.sprite(1250, 397, "стрела").setOrigin(0, 0);
    мир.стрела.setScale(0.5, 0.5).refreshBody();
    мир.стрела.depth = 5;

    мир.сцена.physics.add.collider(мир.стрела, мир.каркас);
    мир.сцена.physics.add.collider(мир.стрела, мир.платформы);

    // Определение заряда стрелы.
    var лук = мир.узелСцены("лук");
    var стЛук = мир.сцена.physics.add.collider(мир.стрела, лук);
    стЛук.collideCallback = function(a, b) {
        if (мир.стрела.body.touching.down && !мир.стрелаЗаряжена)
        {
            мир.стрелаЗаряжена = true;
            мир.уведомить("стрела заряжена");
        }
    };

    // Определение столкновения с окном.
    var граница = мир.узелСцены("границаПолётаСтрелы");
    var стОкно = мир.сцена.physics.add.collider(мир.стрела, граница);
    стОкно.collideCallback = function(a, b) {
        if (мир.стрелаЗаряжена && мир.пускСтрелы)
        {
            мир.стрелаЗаряжена = false;
            мир.пускСтрелы = false;
            мир.уведомить("удар стрелы об окно");
        }
    };
};


// // // //


ОтследитьПрыжокПоСтрелам = мир =>
{
    мир.колобок.прыжокПоСтрелам = null;
};


// // // //


ПроверитьНаличиеПрыжкаПоСтрелам = мир =>
{
    if (!мир.колобок.прыжокПоСтрелам)
    {
        return;
    }
    мир.уведомить("прыжок по платформе стрел");
};


// // // //


ПодкидыватьСтрелуКЛуку = мир =>
{
    if (!мир.стрела.body.touching.down || мир.стрелаЗаряжена)
    {
        return;
    }
    var скорость = мир.колобок.скоростьПадения * 0.9;
    мир.стрела.setVelocityY(-скорость);
};


// // // //


ВоспроизвестиЗвукЗарядкиСтрелы = мир =>
{
    мир.сцена.sound.play("звук-зарядки");
};


// // // //


ВоспроизвестиЗвукПускаСтрелы = мир =>
{
    мир.сцена.sound.play("пуск-стрелы");
};


// // // //


ПуститьСтрелу = мир =>
{
	function randInt(min, max)
    {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
	  	min = Math.ceil(min);
	  	max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min)) + min;
	}
	var скорость = randInt(1100, 1300);

    мир.стрела.setVelocityX(скорость);
};


// // // //


ВоспроизвестиЗвукУдараСтрелыОбОкно = мир =>
{
    мир.сцена.sound.play("удар-стрелы");
};


// // // //


ОтобразитьРазбитоеОкно = мир =>
{
    мир.узелСцены("разбитоеОкно").setVisible(true);
};


// // // //


ОтобразитьВыломанноеОкно = мир =>
{
    мир.узелСцены("разбитоеОкно").setVisible(false);
    мир.узелСцены("выломанноеОкно").setVisible(true);
};


// // // //


УведомитьСразуПослеУдара = мир =>
{
    setTimeout(
        function() {
            мир.уведомить("сразу после удара");
        },
        1
    );
};


// // // //


ПодсчитатьУдарыСтрелыОбОкно = мир =>
{
    if (!мир.ударовСтрелыОбОкно)
    {
        мир.ударовСтрелыОбОкно = 1;
        мир.уведомить("первый удар стрелы об окно");
    }
    else if (мир.ударовСтрелыОбОкно == 1)
    {
        мир.ударовСтрелыОбОкно = 2;
        мир.уведомить("второй удар стрелы об окно");
    }
};


// // // //


ВоспроизвестиЗвукВыломанногоОкна = мир =>
{
    мир.сцена.sound.play("выломали-окно");
};


// // // //


ПроверитьПрыжокПоМолоку = мир =>
{
    if (мир.колобок.вещь == "молоко")
    {
        мир.уведомить("колобок прыгнул по молоку");
    }
};


// // // //


ПроверитьДостаточностьПрыжкаПоМолоку = мир =>
{
    if (мир.колобок.скоростьПадения >= 500) {
        мир.уведомить("достаточный прыжок по молоку");
    }
};


// // // //


НачатьПереворотМолока = мир =>
{
    мир.молоко = мир.узелСцены("молоко");
    мир.вещи.remove(мир.молоко);
    мир.вещиНедвижимые.add(мир.молоко);
    мир.молоко.setAngularVelocity(120);
    мир.молоко.setVelocityY(-500);
    мир.молоко.переворот = 1;
};


// // // //


АнимироватьПереворотМолока = мир =>
{
    if (!мир.молоко)
    {
        return;
    }

    if (мир.молоко.переворот == 1)
    {
        мир.молоко.переворот = 2;
        setTimeout(
            function() {
                мир.молоко.переворот = 3;
                // Меняем местами высоту и ширину тела.
                var тело = мир.молоко.body;
                var ширина = тело.height / мир.молоко.scaleY;
                var высота = тело.width / мир.молоко.scaleX;
                тело.setSize(ширина, высота);
            },
            100
        );
    }
    else if (
        (мир.молоко.переворот == 3) &&
        (мир.молоко.body.touching.down)
    ) {
        мир.молоко.depth = 5;
        мир.молоко.body.stop();
        мир.молоко = null;
        мир.уведомить("перевернули молоко");
    }
};


// // // //


ПоказатьЛужуМолока = мир =>
{

    var молоко = мир.узелСцены("молоко");
    var лужа = мир.узелСцены("лужа");
    лужа.setPosition(молоко.x + 40, молоко.y + 20);
    лужа.setVisible(true);
};


// // // //


ВоспроизвестиЗвукПрыжкаПоМолоку = мир =>
{
    мир.сцена.sound.play("молоко-прыгнули");
};


// // // //


ВоспроизвестиЗвукПереворотаМолока = мир =>
{
    мир.сцена.sound.play("молоко-перевернули", { seek: 1 });
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
    задать структуру избы
    задать функцию поиска узла по имени
    создать избу
    позволить платформам пропускать прыжки
    настроить пауков
    настроить мышей
    настроить стрелы
    создать стрелу
колобок начал прыжок
    отследить прыжок по стрелам
колобок закончил прыжок
    проверить наличие прыжка по стрелам
прыжок по платформе стрел
    подкидывать стрелу к луку
стрела заряжена
    воспроизвести звук зарядки стрелы
пуск стрелы
    воспроизвести звук пуска стрелы
    пустить стрелу
удар стрелы об окно
    воспроизвести звук удара стрелы об окно
    уведомить сразу после удара
    подсчитать удары стрелы об окно
первый удар стрелы об окно
    отобразить разбитое окно
второй удар стрелы об окно
    отобразить выломанное окно
    воспроизвести звук выломанного окна
сразу после удара
    создать стрелу
колобок прыгнул на вещь
    проверить прыжок по молоку
колобок прыгнул по молоку
    проверить достаточность прыжка по молоку
    воспроизвести звук прыжка по молоку
достаточный прыжок по молоку
    начать переворот молока
перевернули молоко
    показать лужу молока
    воспроизвести звук переворота молока

обновить сцену
    анимировать пауков
    анимировать мышей
    анимировать переворот молока
`);

