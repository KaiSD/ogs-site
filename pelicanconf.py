#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Opensource Game Studio'
SITENAME = u'Opensource Game Studio'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Novosibirsk'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

DISPLAY_PAGES_ON_MENU = True

ARTICLE_PATHS = ['articles']

# Somewhat working.
#THEME="/home/kornerr/p/pelican-themes/basic"
# translations: pages only
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/bootstrap"
# translations: no
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/bootlex"
# translations: no
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/bricks"
# translations: only pages, not posts
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/cebong"
# translations: only posts, not pages
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/dev-random"
# translations: only posts, not pages
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/dev-random2"
# translations: only posts, not pages
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/gum"
# translations: ok
# pagination: ok
# index: ok
#THEME="/home/kornerr/p/pelican-themes/plumage"
# translations: ok
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/simple-bootstrap"
# translations: ok
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/tuxlite_tbs"
# translations: ok
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/tuxlite_zf"
# translations: ok
# pagination: ok
# index: no
#THEME="/home/kornerr/p/pelican-themes/zurb-F5-basic"

# Fully functional.
THEME="/home/kornerr/p/pelican-themes/tuxlite_zf"


SHARE_BUTTONS = ['twitter']

#TAG_CLOUD = False
#PLUGIN_PATHS = ["/home/kornerr/p/plugins"]
#PLUGINS = ["tag_cloud"]
#tag_cloud = ['abc']
