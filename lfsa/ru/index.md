Title: Начальная
Date: 2019-06-26 00:00
Category: Page
Slug: index
Lang: ru

## Обзор

К **Л**окальной **Ф**айловой **С**истеме **Д**оступ (**ЛФСД**):

* является крошечным веб-сервером для доступа клиентских приложений JS к локальной файловой системе
* является кирпичиком фундамента **С**етевых **П**риложений на **С**тороне **К**лиента (**СПСК**)
* умещается в одном файле Python
* выпущен под лицензией [CC0][cc0] (общественное достояние)

Сетевые Приложения на Стороне Клиента выполняются исключительно на вашем устройстве, они никак не связаны с облачными решениями: никто не сможет их отключить.
СПСК могут использовать ЛФСД для хранения данных локально, чтобы вы полность их контролировали.

[ПСКОВ][pskov] (генератор статических сайтов) является первым СПСК, использующим ЛФСД.

## Загрузите ЛФСД

Загрузите [lfsa_1.0.0.py][lfsa-local].

Если вы используете Linux или macOS, то всё готово к запуску.

## Установите Python (лишь для Windows)

<video controls poster="../vid/download-install-python.poster.png">
    <source src="../vid/download-install-python.mp4" type ="video/mp4">
    <source src="../vid/download-install-python.webm" type ="video/webm">
    ОШИБКА Ваш браузер не поддерживает видео HTML5
</video>

Windows не содержит Python по умолчанию, вам необходимо [установить Python самостоятельно][python] для запуска ЛФСД.

**Внимание**: видео показывает установку Python 2.3.4 на Windows 2000, используйте последнюю версию Python для вашей версии Windows.

## Запустите ЛФСД

### Linux и macOS

<video controls poster="../vid/run-lfsa.macos.poster.png">
    <source src="../vid/run-lfsa.macos.mp4" type ="video/mp4">
    <source src="../vid/run-lfsa.macos.webm" type ="video/webm">
    ОШИБКА Ваш браузер не поддерживает видео HTML5
</video>

Если вы используете Linux или macOS, запускайте ЛФСД в терминале:

```
/путь/до/lfsa_1.0.0.py /путь/до/директории
```

### Windows

<video controls poster="../vid/run-lfsa.w2k.poster.png">
    <source src="../vid/run-lfsa.w2k.mp4" type ="video/mp4">
    <source src="../vid/run-lfsa.w2k.webm" type ="video/webm">
    ОШИБКА Ваш браузер не поддерживает видео HTML5
</video>

Если вы используете Windows, запускайте ЛФСД в [CMD][cmd]:

```
C:/путь/до/установки/Python/python.exe C:/путь/до/lfsa_1.0.0.py C:/путь/до/директории
```

## Долговечность

Как вы заметили, ЛФСД может работать на действительно старых операционных системах родом из 2000-х. Это осознанный выбор: мы заботимся о пользователях, поэтому хотим предоставить наш инструмент как можно большему числу пользователей.

[pskov]: http://opengamestudio.org/pskov/ru/pskov_1.0.0+ru.html
[lfsa-local]: ../lfsa_1.0.0.py
[python]: https://www.python.org/downloads/windows/
[cmd]: https://ru.wikipedia.org/wiki/Cmd.exe
[cc0]: https://creativecommons.org/share-your-work/public-domain/cc0/
