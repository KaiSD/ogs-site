Title: Рождение вселенной MJIN
Date: 2017-09-10 00:00
Category: News
Slug: mjin-world-birth
Lang: ru

![Рождение вселенной MJIN]({attach}/images/2017-09-mjin-world-birth.png)

Эта статья описывает рождение вселенной MJIN в августе 2017.

**mjin-player**

Как вы знаете, [в июле мы изучали скриптование]({filename}/articles/2017-08-scripting-research-ru.md). Мы нашли решение, которое удовлетворяет следующим критериям. Скрипты должны:

0. исполняться в исходном виде без изменений на всех поддерживаемых платформах
0. позволять расширять код C++

Мы проверили второй критерий в рамках тестового приложения. В первый критерий мы просто поверили, т.к. он ДОЛЖЕН быть верен.

В тот момент мы видели два варианта проверки первого критерия:

0. создать по одному тестовому приложению под каждую платформу для проверки лишь этого критерия
0. создать одно кросс-платформенное приложение, которому можно скормить практически любой код

Мы выбрали второй подход, т.к. он выгоднее в долгосрочной перспективе. Как вы уже догадались, [mjin-player](https://bitbucket.org/ogstudio/mjin-player) является тем самым кросс-платформенным приложением.

mjin-player служит базой для остальных проектов MJIN, которая позволяет этим проектам работать на всех поддерживаемых платформах. Тем не менее, в mjin-player нет никакой магии, проекты никак не скрыты от деталей платформ, да и не было такой задачи. Вместо скрытия деталей платформы mjin-player предоставляет набор правил, которым должны удовлетворять проекты MJIN для работы на всех поддерживаемых платформах.

**mjin-application**

Этот набор правил представлен в виде [mjin-application](https://bitbucket.org/ogstudio/mjin-application). mjin-application является библиотекой с базовым функционалом, необходимым для каждого проекта MJIN, но не более. Например, mjin-application не содержит и никогда не будет содержать скриптования или подобного специфического функционала.

**Вселенная MJIN**

Так что же такое [вселенная MJIN](https://bitbucket.org/ogstudio/mjin)? Это множество проектов, которые являются нашими средствами для разработки игр. mjin-player и mjin-application - первые кирпичики недавно появившейся вселенной MJIN. А будет их намного больше. Оставайтесь на связи, нас ждёт светлое будущее с MJIN.

На этом мы заканчиваем описание рождения вселенной MJIN в августе 2017.

