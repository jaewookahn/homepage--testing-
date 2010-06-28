#!/bin/bash

googleAnalyticsCode='UA-4780107-1'
textToInsert="<script src=\"http:\/\/www.google-analytics.com\/urchin.js\" type=\"text\/javascript\"><\/script><script type=\"text\/javascript\">_uacct = \"$googleAnalyticsCode\";urchinTracker();<\/script>"
textToReplace="<\/[Bb][Oo][Dd][Yy]>"
iWebBasePath='homepage'

# this is where the actual work happens
find $iWebBasePath -iname '*.html' -exec sed -i .bak -e "/$textToInsert/!s/$textToReplace/$textToInsert&/g" {} \; -print
