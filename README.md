# Overview

This is an internal document describing how to update
[Opensource Game Studio website][opengamestudio]
powered by [Pelican][pelican].

# Installation

Install Pelican with the following command:

```
sudo apt install pelican
```

# Preview

To preview results locally:

* generate local copy with the following commands:
    ```
    cd pelican
    pelican -s pelicanconf.py
    ```
* serve the local copy with the following commands:
    ```
    cd output
    python -m SimpleHTTPServer
    ```

The preview should now be available at [http://localhost:8000][preview].

# Publishing

To publish new content:

* generate public site with the following commands:
    ```
    cd pelican
    pelican -s publishconf.py
    ```

* upload it to GitHub with the following commands:
    ```
    git add .
    git push
    ```

The public site should now be available at
[Opensource Game Studio website][opengamestudio].

[opengamestudio]: http://opengamestudio.org
[pelican]: http://getpelican.com
[preview]: http://localhost:8000

