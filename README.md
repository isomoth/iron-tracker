# Iron Tracker

1.62 billion people suffer from anemia (iron deficiency). Nutrition is a decisive factor in many cases. This web application contains a database of ca. 8000 common foods that you can search for and filter through the two nutrients that help combat this condition: Iron and Vitamin C. The app also allows the user to track the foods they’ve consumed and see their total intake of these minerals.

## Tech Stack

- React
- React Router
- Redux
- Styled Components
- Node
- Express
- MongoDB

### Features

- Food list page, fetched via a GET request and query params
- Food tracker that fetches the foods via GET request, presents a set of suggestions (i.e. dropdown dictionary) and allows the user to add foods via a POST request.
- The TotalValues feature calculates the user's total consumption for the tracked session.

### Frontend

- The state management was done via two reducers: foods (for the whole dataset) and food (for each food item)
- The TrackFood component acts as a parent component to the TopValues component, which in turn listens to its changes and saves its prop. Then it uses this prop for calculations later on.

### Backend

- Food Database modeled from a dataset from Kaggle: https://www.kaggle.com/shrutisaxena/food-nutrition-dataset
- Endpoints: /foods (all foods), /foods/iron (foods richest in iron), /foods/id/:id (get foods by id).
- DELETE and PATCH requests (possible frontend implementation in the future).

## Challenges and lessons learned

- The whole project was an exercise in debugging techniques. I became way more acquainted with the nuances of the browser's dev tools as a result.
- The major challenge was the integration between the backend and frontend. The debugging in this part wasn't always as intuitive.
- Last but not least, there were two main causes for several of the most difficult bugs: Type inconsistency (the more the steps of a function, the higher the risk), and array iteration. Solutions like console.logging typeof and making sure the database didn't get corrupted while testing POST requests were quite helpful.

## Special Thanks

- To the team at Technigo for all the knowledge and support in my journey to web development.
- To my lions team of classmates, for sharing the journey and lending me a fresh pair of eyes when I got stuck.
- To Rikku Bölske and Ghazala Shahid from Pink Programming. Their feedback and advice as professional developers made the refactoring of TrackFood, AddFood and TotalValues possible.

## View it live

Backend

https://iron-tracker-fr4c3nkgfq-lz.a.run.app/foods/

Frontend

https://iron-tracker.netlify.app/
