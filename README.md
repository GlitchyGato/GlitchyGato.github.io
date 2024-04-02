# Personal Website - GlitchyGato
#### Video Demo:  <https://youtu.be/_8FnCsxQbzE>
#### Description: Personal website created to showcase my studies and personal information.

The project I decided to create was a personal website. Since I am a student I find myself trying to maintain a record of what I have done throughout the years and a good way to maintain that type of information on the internet is by having a personal website. I completed all the weeks in CS50 a while ago so this was the perfect time to implement what I have learned in the last weeks of the course into something I could use both as a final project and as something I could share in my profiles over the internet.

Having taken the decision, I began to plan the things I wanted to add to my website. I kept it simple and wanted to show the certifications I have, personal information, and contact information. I will be adding more things as time progresses and I learn new things, but these three milestones began to create the path for creating the project.

First, I needed a place where I could host my website online. I was searching for a free option so GitHub Pages seemed like the best choice in my case. These led to later decisions about the design and the technologies used. After I finished configuring my repository and ensuring the changes I made in my local computer were affecting the website, I continued working on preparing the environment I would work from. That included installing all technologies I didn't have at the time.

After I had my personal website infrastructure and my environment ready, I began to work on my project. I created four total html pages: the _index_ page, the _studies_ page, the _about_ page, and the _contact_ page. After that, I had to establish how to navigate through these pages. My first intuition was to have a side navigation menu that would link the other pages on my homepage (_index_ page), and have a button that returned you to the homepage in the remaining pages. However, the design was not the greatest because it had two different options that completed the same task. Furthermore, the only way you could change pages was through the homepage, so this would create more steps for the user to view the content. Eventually, I left the homepage only with the buttons that linked to the _studies_, _about_, and _contact_ pages, and implemented the sidenav in these three pages.

Then, I moved on with adding the actual content on all these pages. The homepage already had the most important things, I added a little introduction and descriptions for each button.

In the _studies_ page, I decided to embed a spreadsheet in which I keep track of all my certifications so that I don't have to worry about maintaining a database or things that would not be allowed since GitHub Pages are meant for static webpages and I was not going to program the backend portion of the site.

On the _about_ page, I wrote a deeper introduction of myself and edited it a couple of times. I was not very sure what else to add to the page. I thought that adding photos perhaps would be a good option. So, I decided to investigate how to add an image carousel to my webpage. However, after a couple of failed tests, I decided to add photos in another way. The three different implementations of an image carousel were either malfunctioning or wouldn't let me be satisfied with the result. I ended up using a simple image gallery, which was way easier to implement and gave the page a more vibrant mood -the user wasn't forced to look for an image for a certain period or to click a button to view more photos. All the photos in conjunction add to the quick view of myself, which is the ultimate goal for the _about_ page.

In the _contact_ page, my initial idea was to display some basic information and to implement a simple contact form. However, I ran into some difficulties with the form because it required that I use some type of backend framework that would allow me to receive information and decide what to do with that information. There was the option to use a third-party solution to implement forms in my static website. In the end, I decided to just disregard that idea because it was not the nature of the course to use tools like these. Implementing this in the future is a thing I want to do. The _contact_ page was left with just my cellphone, my email, and my linked social media accounts.

The order in which I implemented all these features is not exactly how I am describing them here. One change on one page led to other changes on other pages so it was more of a trial and error for me since I hadn't worked on a similar project before, and I wasn't sure how to implement most of the things in the website.

In addition to the html files, the project has a _CSS_ folder with the _styles_.scss file which contains all the style information used by the html pages. I changed a lot of the style while working through the pages. The color scale was something I had a good idea about before even starting the project. After trying different ways of using the colors, the website ended up having a background color, a dark color, and a scale of greens which are used in the three content pages. Each page has its color which is used in a line below the page's title and on the sidenav when that page is selected. All of the buttons on the homepage follow the colors assigned to each page and the other buttons use a neutral black color. Other factors of the style of the webpage were also tested out a couple of times. I selected a font that I thought goes well with the overall theme of the website and the other things are just little details of the style of the website.

On top of the HTML files and the _css_ folder, there is an _images_ folder that contains, well, all the static images used by the website, including the .jpg files and the .ico favicon file.

Finally, the only file left is the _script_.js located inside the _scripts_ folder. It contains only a few lines that declare how the side navigation menu responds when the user interacts with it.

#### Technologies used
* [GitHub Pages](https://pages.github.com/) - A static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process and publishes a website.
* [Sass](https://sass-lang.com/) - A stylesheet language that's compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible synthax.

#### Credits

* [Font Awesome](https://fontawesome.com/) - External social media icons used in the _about_ page where provided by Font Awesome.
* [How do you correctly attribute external icons and images](https://www.linkedin.com/advice/1/how-do-you-correctly-attribute-external-icons-images) - Blog post I used to learn why and how to attribute the external icons I used for my website.
* [How to Embed a Google Sheet in a Website](https://www.groovypost.com/howto/embed-a-google-sheet-in-a-website/) - Blog post that I used to learn how to embed my Google Sheet in my website.
* [How To Write an "About Me" Page (With Example)](https://www.indeed.com/career-advice/career-development/how-to-write-an-about-me) - Blog post that I used to decide what to include in the _about_ page of the website.
* [W3Shools How To](https://www.w3schools.com/howto/default.asp) - Resource I used to implement the side navigation menu, and to check for html and css rules and features.