# Answers

1.  What is React JS and what problems does it try and solve?

    It is a javascript library meant for making development of user interface easier. You can use state and props within components
    to make small pieces of code reusable. These components can be written a little bit easier using JSX and Babel and also be combined 
    with functions to render entire applications and writing minimal code. The react DOM also has access to the actual Dom and renders for us. We can re-render the page based off of state all the time.

1.  What does it mean to _think_ in react?

    I personally think about reusability and simplicity. If I keep all of the components as basic as possible and just assign different classes and trigger different handlers based off of interaction, my code can become easier to reuse. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class components always start with the 'class' keyword and contain state and methods for an app. Functional components use props and have one basic task to keep it reusable.


1.  Describe state.

    In simple terms state is data. We treat it as if it were immutable and do not frequently mess with it to avoid errors in our code. It has to exist within a class component only. Typically stored in props to give components access to the data that we want to render or manipulate.

1.  Describe props.

    Props kind of look like html attributes. We have a lot of freedom when it comes to naming them but if we link them to different pieces of data within our state, we can change the state based off user interaction. The props are attached to components when we call the components.