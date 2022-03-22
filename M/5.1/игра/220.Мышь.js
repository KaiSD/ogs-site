function Мышь(события)
{
    this.создать = function()
    {
        window.addEventListener("click", function(o) {
            события.уведомить(`мышь/нажатие/${o.clientX}/${o.clientY}/${o.target.id}`);
        });
        window.addEventListener("mousemove", function(o) {
            события.уведомить(`мышь/перемещение/${o.clientX}/${o.clientY}/${o.target.id}`);
        });
    };

    // Конструктор.
    this.создать();
};

