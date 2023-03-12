## How to use:
- Have Node installed
- Clone repo into a folder in your local machine
- Navigate into websitedemo/Home
- Run "open home.html" in your terminal. You should be able to see our website!


## Inspiration
Our inspiration for creating Resonate was to make a website where minorities can come together, share their experiences, and build connections. Often, minorities don’t get heard in their daily lives. We noticed that underrepresented individuals sometimes feel like they don't belong, and their voices aren't heard. Therefore, we created Resonate to provide a space where people can find others who share similar interests and goals. We believe it's important to have a platform where everyone feels included and supported.

## What it does
The web-app takes text input from the user and uses Cohere's "Entity Extraction" and "Text Classification" APIs to categorize the user's intention into categories, such as "gym buddy", "eat out", "study buddy", and "look for a mentor". Additionally, it generates tags by extracting keywords from the prompt. Users can also edit and specify the tags they want. During the matching process, the app pairs up users based on the tags generated from their prompts and any additional ones they manually added. Users can then chat with their buddies and arrange to meet in person for activities like exploring a new cafe or studying together for a midterm.

The web-app also includes a page where users can post questions and answers. Cohere's "Content Moderation" API is used to flag and delete any posts with inappropriate content. The section also allows users to share resources such as links and videos.

## How we built it
First, we discussed the main features that we wanted to include in our app, and then we decided whether to create a mobile application or a web app. Some team members worked on designing the app using Figma and added more details and pages until we covered most of what we initially wanted for our website.
Next, we started constructing the actual website using HTML, CSS, and JavaScript based on the Figma design.

## Challenges we ran into
As it was our first time using Figma, becoming familiar with the various functions and how to construct a prototype was quite a challenging but exciting experience. Implementing most of the design with HTML, CSS and JavaScript in a short period was also quite difficult, as we had many pages and functions that we wanted to implement. Dealing with user input and making requests to the API also took quite a lot of time to figure out.
## Accomplishments that we're proud of
Having an awesome and aesthetically pleasing prototype was very gratifying, as we were able to implement all the functions that we wanted into the design, as we also had transitions between the pages (e.g. animation when a user first opens the page and while matching). We are also very proud of being able to convert a design (images and text) to an actual website (HTML/CSS/JavaScript).
## What we learned
We learned how to use Figma to design and create a prototype for our website, which was a new experience for all of us. We also learned to be flexible and plan efficiently, which was essential for this project as there was much to be done in the short timeframe. We had to search for resources on Google and rapidly learn new technologies. Collaborating on a project in real time also allowed us to enhance our skills in teamwork.
## What's next for Resonate
If we are to continue working on Resonate, the next step would be to convert the entire Figma design into HTML/JavaScript/CSS while preserving the most critical functions, such as processing all user input and providing suggested labels. Additionally, we aim to include more tags, particularly those that are manually added frequently, to make the platform more inclusive of diverse individuals and their interests and goals.
