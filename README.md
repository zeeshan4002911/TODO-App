# TODO web and Android App
#### Video Demo:  https://youtu.be/pLebGngssSY
#### Description: 
This is the Simple todo application which I intially build using Reactjs and then converted to android app for daily use.

git page --> https://zeeshan4002911.github.io/TODO-App/

##### Key Features:

1) The application features an automatic dark and light mode which I acheived using css media query.
2) There is dedicated switch button if user wants to change the app mode without changing their system mode
3) The app also has theme changer which have 15 different color.
4) The app is based on create, read, update and delete (CRUD) architecture.
5) It stores setting and all the user data in local storage, so not having a database and API call for crud operation
make this app extremely fast.

###### Content of repo

public --> It has favicon and index html of react where it injects javascript
src --> It has the source code
components ---> 
    1) EditForm is the component which render when user click and edit button
    2) Form is the component which render by default, through it we add our task in app
    3) TaskItem is a single task, it contains mainly task description and edit and delete button
    4) TaskList is responsible for propulating the tasks, it uses javascript map function

hooks --> It contains custom hook, useLocalStorage which basically takes two argument name and value for setting and getting
        that name, value in local storage in key value pair, it returns a value and a function by which we can set that value like react hooks, it uses react useState and useEffect hook to achieve this local database

styles --> It contains css for the app
App.js is the main file where we conditionally render our component and pass state and function to other component by
the method which we call prop drilling..... as the app gets bigger it's become really messy so that's why we should avoid using prop drilling, but I used it as this project has limit scalability scope, and I wanted to have a example which could show how prop drilling could become really worse real quick.

index.js is what uses that App.js and render it using react render method

##### Android Apk

I've created the android version of the this TODO using ionic capacitor (https://capacitorjs.com) and android SDK for building android app.

The android app is the go to when it comes to portability and use.

android folder contains code for Android sdk
Todo apk contains different version of apk

A brief about React as it's the center of this project:
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called ???components???.

The render method returns a description of what you want to see on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a lightweight description of what to render. Most React developers use a special syntax called ???JSX??? which makes these structures easier to write. The <div /> syntax is transformed at build time to React.createElement('div')

JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.