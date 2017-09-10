# Overview

We consider changing [Opensource Game Studio website](http://opengamestudio.org)'s
engine from Wordpress to [Pelican](http://getpelican.com). This is Pelican
evaluation.

# Installation

You need a working Python's `pip`.

Install Pelican with the following command:

` `

# Preview

* Generate local copy with the following commands:

`cd pelican`

`pelican -s pelicanconf.py`

* Serve the local copy with the following commands:

`cd output`

`python -m SimpleHTTPServer`

The preview should now be available at
[http://localhost:8000](http://localhost:8000).

# Publishing

* Generate public site with the following commands:

`cd pelican`

`pelican -s publishconf.py`

* Upload it to GitHub with the following commands:

`git push`

The publich site should now be available at
[http://ogstudio.github.io](http://ogstudio.github.io).

