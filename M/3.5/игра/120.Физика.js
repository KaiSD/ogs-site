function Физика()
{
    this.создать = function()
    {
        this.движок = Matter.Engine.create({
            enableSleeping: true,
            gravity: {
                y: 2,
            },
        });
    };

    this.обновить = function() {
        Matter.Engine.update(this.движок);
    };

    // Конструктор.
    this.создать();
}
