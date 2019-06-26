Title: Index
Date: 2019-06-26 00:00
Category: Page
Slug: index
Lang: en

## Overview

**L**ocal **F**ile **S**ystem **A**ccess (**LFSA**) is:

* a tiny web server to allow client side JS access to local file system
* a buildling block for **C**lient **S**ide **W**eb **A**pps (**CSWA**)
* a single Python file
* released under [CC0][cc0] license (public domain)

Client Side Web Apps run solely on your device, they are not related to cloud solutions in any way: nobody can pull the plug on you.
CSWAs may use LFSA to keep data locally so that you could have complete control of your data.

[PSKOV][pskov] static site generator is the first CSWA to use LFSA.

## Download LFSA

Download [lfsa_1.0.0.py][lfsa-local].

If you use Linux or macOS, you're all set.

## Install Python (Windows only)

<video controls poster="../vid/download-install-python.poster.png">
    <source src="../vid/download-install-python.mp4" type ="video/mp4">
    <source src="../vid/download-install-python.webm" type ="video/webm">
    ERROR Your browser does not support HTML5 video
</video>

Windows doesn't have Python installed by default, you have to [install Python yourself][python] to be able to run LFSA.

**Note**: the video depicts Python 2.3.4 installation under Windows 2000, use the latest Python available for your version of Windows.

## Run LFSA

### Linux and macOS

<video controls poster="../vid/run-lfsa.macos.poster.png">
    <source src="../vid/run-lfsa.macos.mp4" type ="video/mp4">
    <source src="../vid/run-lfsa.macos.webm" type ="video/webm">
    ERROR Your browser does not support HTML5 video
</video>

If you use Linux or macOS, run LFSA in terminal:

```
/path/to/lfsa_1.0.0.py /path/to/dir
```

### Windows

<video controls poster="../vid/run-lfsa.w2k.poster.png">
    <source src="../vid/run-lfsa.w2k.mp4" type ="video/mp4">
    <source src="../vid/run-lfsa.w2k.webm" type ="video/webm">
    ERROR Your browser does not support HTML5 video
</video>

If you use Windows, run LFSA in [CMD][cmd]:

```
C:/path/to/Python/installation/python.exe C:/path/to/lfsa_1.0.0.py C:/path/to/dir
```

## Durability

As you noticed, LFSA can run on really old operating systems dating back to 2000. That's intentional: we care about users, so we want to cover as many users as possible.

[pskov]: http://opengamestudio.org/pskov
[lfsa-local]: ../lfsa_1.0.0.py
[python]: https://www.python.org/downloads/windows/
[cmd]: https://en.wikipedia.org/wiki/Cmd.exe
[cc0]: https://creativecommons.org/share-your-work/public-domain/cc0/
