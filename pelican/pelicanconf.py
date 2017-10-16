#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Opensource Game Studio'
SITENAME = u'Opensource Game Studio'
SITEURL = 'http://localhost:8000'

PATH = 'content'

TIMEZONE = 'Asia/Novosibirsk'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Menu
MENUITEMS = (
    ('Projects', 'pages/projects.html'),
    ('About', 'pages/about.html'),
)
DISPLAY_PAGES_ON_MENU = False

# Blogroll
#LINKS = (
#    ('OGS Mahjong', '/pages/ogs-mahjong.html'),
#)
PROJECTS = (
    ('OGS Mahjong', 'pages/ogs-mahjong.html'),
    ('OGS Editor', 'pages/ogs-editor.html'),
    ('OpenSceneGraph guide', 'pages/openscenegraph-guide.html'),
)

# Social widget
#SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

ARTICLE_PATHS = ['articles']

# Custom TuxLite ZF based theme.
THEME="theme"


SHARE_BUTTONS = ['twitter']


#TAG_CLOUD = False
#PLUGIN_PATHS = ["/home/kornerr/p/plugins"]
#PLUGINS = ["tag_cloud"]
#tag_cloud = ['abc']
