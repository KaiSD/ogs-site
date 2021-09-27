function Изображения(корень)
{
    this.создать = function()
    {
        this.умолчание = {
            x: 0,
            y: 0,
            ширина: 100,
            высота: 100,
            угол: 0,
        };
        this.задано = {};
        this.элементы = {};
    };

    this.создатьИлиПолучитьЭлемент = function(имя)
    {
        var эл = this.элементы[имя];
        if (эл)
        {
            return эл;
        }

        var ум = this.умолчание;
        эл = document.createElement("div");
        эл.id = `изображения-${имя}`;
        эл.style.position = "absolute";
        эл.style.display = "block";
        // Свойства по умолчанию.
        эл.style.left = `${ум.x}px`;
        эл.style.top = `${ум.y}px`;
        эл.style.width = `${ум.ширина}px`;
        эл.style.height = `${ум.высота}px`;
        эл.style.transform = `rotate(${ум.угол}rad)`;

        this.элементы[имя] = эл;
        корень.appendChild(эл);
        return эл;
    };

    this.обновитьЭлемент = function(имя, свойство, значение)
    {
        if (!this.задано[имя])
        {
            this.задано[имя] = {};
        }
        this.задано[имя][свойство] = значение;
        var за = this.задано[имя];
        var эл = this.создатьИлиПолучитьЭлемент(имя);

        if (свойство == "ширина")
        {
            эл.style.width = `${за.ширина}px`;
        }
        else if (свойство == "высота")
        {
            эл.style.height = `${за.высота}px`;
        }
        else if (
            (свойство == "x") ||
            (свойство == "y") ||
            (свойство == "угол") ||
            (свойство == "вид.transform")
        ) {
            var ум = this.умолчание;
            var x = за.x ? за.x : ум.x;
            var y = за.y ? за.y : ум.y;
            var угол = за.угол ? за.угол : ум.угол;
            this.обновитьРасположение(имя, x, y, угол);
        }
        else if (свойство.startsWith("вид"))
        {
            var параметр = свойство.substring(4);
            эл.style.setProperty(параметр, значение);
        }
    };

    this.обновитьРасположение = function(имя, x, y, угол)
    {
        var за = this.задано[имя];
        var эл = this.элементы[имя];
        эл.style.left = `${x}px`;
        эл.style.top = `${y}px`;
        var transform = `rotate(${угол}deg) `;
        if (за["вид.transform"])
        {
            transform += за["вид.transform"];
        }
        эл.style.transform = transform;
    };

    this.обработатьКлюч = function(ключ, путь, значение)
    {
        if (путь[0] == "изображения")
        {
            var имя = путь[1];
            var свойство = путь.slice(2).join(".");
            this.обновитьЭлемент(имя, свойство, значение);
        }
    };

    // Конструктор.
    this.создать();
}
