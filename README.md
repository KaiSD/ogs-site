# Overview

This is a work in progress. This example is used to evaluate
[Pelican static site generator](http://getpelican.com) to power
Opensource Game Studio home website.

# Usage (internally)
### Generate local copy

`cd pelican`

`pelican -s pelicanconf.py`

### Serve local copy

`cd output`

`python -m SimpleHTTPServer`

The site is served at [http://localhost:8000](http://localhost:8000).

### Generate public copy

`cd pelican`

`pelican -s publishconf.py`

