# Project1-Portfolio


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 1| Wireframes / Priority Matrix / Timeline | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | complete
|Day 4| MVP & Bug Fixes | complete
|Day 5| Final Touches | complete
|Day 6| Present | Incomplete

I would like to leave the above chart up to give me a bigger idea of timelines/ something a bit more abstract than mine.


links: 
- [mobile layout](https://res.cloudinary.com/dnxx8igwb/image/upload/v1583782315/90B2AA81-83BB-40EE-9869-0D06177C3C4D_oywvo8.jpg)
- [desktop layout](https://wireframepro.mockflow.com/view/M723fba1f78894266e6adad9daa7e8c101583532357166)
- [green](https://colorideas.net/olive-green-gray-crimson-635536-color-palette/)
- [red](https://far-wake.org/png-change-blacknwhite-color-palette-24-best-color-palettes-red-white-black-grey-images-5df8bb8280182b6d810ae5b2.html)
- [img for black and red theme](https://www.123rf.com/photo_124250601_stock-vector-retro-memphis-seamless-pattern-80-90s-fashion-style-trendy-black-and-white-abstract-geometric-backgr.html)
- [Really awesome looking site that stands out to me](http://www.elsamuse.com/en/)


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Create responsive layout for mobile | complete
|Day 1| Will have basic layout done for tablet and desktop, will have carousel in place | complete
|Day 3| Will create a scroll box to hold my resume, start working on responsive nav bar.| Incomplete - cannot figure out how to do scrollbox practically
|Day 4|  Finish responsive nav bar, get all other aspects in place. Get responisve js running | Incomplete
|Day 5| Touch up portfolio projects to make them look good, may need to cut out some features if not done.  | complete
|Day 6| Present | Incomplete


| Component | Estimated time| time invested | Actual Time
|---|---| ---| ---|
|Total Layout	| 5hrs|	5hrs| 5 hrs
|creating html and css components|3 hrs|3 hrs|3 hrs|
|Working with API	|4.5hrs| 4.5 hrs| 4.5hrs
|cards |5.5 hrs| 2 hrs| 2 hrs
|doc form for resume|4 hrs|2 hr|2 hr
|nav bar scrolling| 5 hrs| 1 hr | 2 hr
|updating portfolio projs|3 hrs| 3hr | 3 hr
|unique background|4 hrs |1 hr |1 hr
|js animations|4 hrs |1.5 hrs | 2.5 hrs
|Debug and final touches| 3 hrs| 1 hr| 2hrs
|importing json projects| 2 hrs | 4 hrs | 4 hrs
|Total|41hrs|28|33	

MVP:
- responsive nav 
- doc form for resume -- i cant find how to do this anywhere. I was able to make a scrollbox and put images in, but it wouldn't center and seemed impractical.
- updated portfolio projects

Post MVP: 
- animated javascript add ons.(ex in liana penns portfolio)
- creating unique backgrounds to have text written in/ around (like in linked inspo site) -- having an issue with this and screen sizes, but working on it
- custom background


Use semantic markup for HTML and CSS, adhering to best practices.
Use CSS GRID to create a multi-column layout.
Use Flexbox for content
Must be mobile mobile first, then tablet and desktop responsive.
Must pull in projects via API call from google sheet
Be deployed and accessible online either via Github Pages or Surge.


Code Snippet


<nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #4C6F51;">

        <button class="navbar-toggler collapse show" type="button" data-toggle="collapse" data-target="#collapse_target" aria-controls="collapse_target" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div class="navbar-collapse collapse" id="collapse_target" style>

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#name">Home </a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="#about">About </a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="#proj">Projects</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>    
          </ul>
        </div>
    </nav> 



Issues and Resolutions

- Discovering what an iframe was and not being able to make it fit onto the screen properly.
- creating html code then turning it into jQuery caused it to lose its style. I had to go back and figure out what class was what. 
- I actually did have the example error several times. ReferenceError: '$' is not defined. This was fixed by rearranging my functions, and also adding the correct number of {} .
- I was unable ti get scroll appear to work after my projects section. When I took that section out things works fine. I was also unable to properly troubleshoot code revea; or manipulate it in any way.