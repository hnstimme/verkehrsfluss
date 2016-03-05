# snowzilla-traffic
Screen-capping Google Maps during the January 2016 blizzard to see how bad traffic tracks with the storm

<img src="frames/traffic.gif" alt="Traffic animation" />

The morning of the January 2016 blizzard, my husband showed me Google Maps on his phone, with North Carolina's highways lit up with bad traffic: "I guess we know where the storm is!"

Inspired, I wrote a quick, crude [PhantomJS](http://phantomjs.org) script to take regular screenshots of Google Maps for the rest of the day. Then I selected the screenshots I wanted to use and turned them into a GIF using [ImageMagick](http://www.imagemagick.org/script/convert.php).

The final gif includes screengrabs taken roughly every half-hour. There's a gap between 2 and 4 p.m. (sadly, right about when the storm hits Washington, D.C., in earnest) when my script threw an error and I didn't notice.

This was a crude, pulled-together-in-10-min-or-so project, so nothing is done in a clean or optimized way. I'm saving it here on GitHub mostly for my own future reference.

----------

## Screen Capture

I wrote a crude [PhantomJS](http://phantomjs.org/screen-capture.html) script ([here it is](mapcapture.js)) to snap screengrabs of [Google Maps](https://www.google.com/maps/@38.6337794,-76.8123652,6z/data=!5m1!1e1) (for traffic) and [WNYC's weather radar](http://project.wnyc.org/storm-radar/) (which I didn't end up using) every 5 minutes or so. I added an extra 5-second delay to help make sure that all/most of the page had rendered before PhantomJS captured the image. Even then, about a fourth of my Google Maps screencaps came out mostly blank, with just the map search bar and other wrapper items and no actual map.

Most PhantomJS scripts include a `phantom.exit();` command somewhere. I excluded it because I wanted it to keep running until I cancelled it (ctrl-C) in terminal.

To set things up (sorry &mdash; the initial download will take a while because I saved the images in the repo):

```
git clone git@github.com:alykat/snowzilla-traffic.git
cd snowzilla-traffic
mkvirtualenv snowzilla-traffic
brew install phantomjs
```

To run the script:

```
phantomjs mapcapture.js
```

If that fails, try:

```
phantomjs --ignore-ssl-errors=true mapcapture.js
```

To exit the script, hit ctrl-C.

----------

## Composite

I used [ImageMagick](http://www.imagemagick.org/script/convert.php) to turn my frames into a GIF:

```
convert -background white -alpha remove -layers optimize-plus -delay 15x60 -resize 800 *.png -loop 0 filmstrip.gif
```

Then I brought the GIF into Photoshop to crop out the Google Maps controls. I probably also could have done this with ImageMagick, but Photoshop was the speediest/simplest way to do it at the time.
