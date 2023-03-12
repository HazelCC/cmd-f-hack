## How to use:
- Have Node, and make sure it is on Environment PATH (For Windows, For Mac)
- Clone repo into a folder
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
 - Becoming familiar with Figma and the flow to see how our prototype would work.
 - Implement most of the design w
