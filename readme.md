# GiantBomb-ify

A chrome extension that was originally built to replace all <img> tags on your current page with one of 10 random [GiantBomb](http://www.giantbomb.com/) staff members.

<img src="https://thumbs.gfycat.com/ColossalQuarrelsomeBunny-size_restricted.gif"/>

Since its initial setup the extension has additional functionality to replace images with:

* Random Nicholas Cage images based on size & use of external service [Placecage](https://www.placecage.com).
* Random Bill Murray images based on size & use of external service [Fillmurray]( https://fillmurray.com).

To enable the additional functionality modify the commented code in the scripts/imageswap.js file.

## Setup Instructions

1. Clone repository locally with `git clone git@github.com:daniel40392/giantbomb-ify.git`
2. Go to chrome://extensions and select 'load unpacked'
3. Navigate to the downloaded giantbomb-ify directory and select OK
4. Go to a webpage with images and click the chrome extension icon

## Alternate Setup

The manifest.json file is setup to only change images when the icon is clicked. There is functionality to immediately replace the images on a page load by commenting out the top code segment and uncommenting the bottom code segment in this file.

Want to use your own images? navigate to scripts/imageswap and replace the hardcoded image urls. A sample localfile is also included in the event you wish to use your own local images! Note that you may need to update the chromeExtensionId variable to correspond to your local build - the correct ID will be visibile on the chrome://extensions section.
