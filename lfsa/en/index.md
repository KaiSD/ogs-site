Title: Index
Date: 2019-05-30 00:00
Category: Page
Slug: index
Lang: en

**L**ocal **F**ile **S**ystem **A**ccess (**LFSA**) is:

* a tiny web server to allow client side JS access to local file system
* a buildling block for **C**lient **S**ide **W**eb **A**pps (**CSWA**)
* a single Python file
* released under [CC0][cc0] license (public domain)

## CSWA

Client Side Web Apps run solely on your device, they are not related to cloud solutions in any way: nobody can pull the plug on you.
CSWAs may use LFSA to keep data locally so that you could have complete control of your data.

[PSKOV][pskov] static site generator is the first CSWA to use LFSA.

## Install

If you use Linux or macOS released after 2005 (yes, 2005), you only need to [download lfsa_1.0.0.py][lfsa-local].

If you use Windows 2000 or newer (excluding Windows ME), you need to:

* [download][python] and install Python 2.3 or newer
* [download lfsa_1.0.0.py][lfsa-local]

## Run

If you use Linux or macOS, run LFSA in terminal this way:

```
/path/to/lfsa_1.0.0.py /path/to/dir
```

Here's how it looks like on macOS Mojave:

![LFSA on macOS Mojave][lfsa-on-macos]

If you use Windows, run LFSA in [CMD][cmd] this way:

```
C:/path/to/Python/installation/python.exe C:/path/to/lfsa_1.0.0.py C:/path/to/dir
```

Here's how it looks like on Windows 2000:

![LFSA on Windows 2000][lfsa-on-windows]

## Durability

As you noticed, LFSA can run on really old operating systems dating back to 2000. That's intentional: we care about users, so we want to cover as many users as possible.

[pskov]: http://opengamestudio.org/pskov
[lfsa-local]: ../lfsa_1.0.0.py
[python]: https://www.python.org/downloads/windows/
[cmd]: https://en.wikipedia.org/wiki/Cmd.exe
[lfsa-on-macos]: ../img/lfsa-on-macos.png
[lfsa-on-windows]: ../img/lfsa-on-windows.png
[cc0]: https://creativecommons.org/share-your-work/public-domain/cc0/