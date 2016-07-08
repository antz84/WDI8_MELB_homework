
//   (1.) Write the correct javascript to select the second h1 element:

var secondElement = document.getElementsByTagName('h1')[1];

// (2.) How would you change the contents of the element to be 'Friend'?

// <html>
//   <div>
//     <h1>Hello</h1>
//   </div>

//   <ul>
//     <h1>Goodbye<h1>
//   </ul>
// </html>

document.getElementsByTagName('h1')[1].innerHTML = 'Friend';

// (3.) How would you add an event listener to the button element inside the div, so that when it is clicked the background colour of the div changes to red?

// <html>
//   <div>
//     <button>Click me!</button>
//   </div>

//   <button>Dont click me</button>
// </html>

var makeRed = function() {
  document.body.style.backgroundColor = red;
}

var redBtn = document.getElementsByTagName('button')[0];

redBtn.addEventListener('click', makeRed);

// (4.) Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.

// <html>
//   <input type="text" id="favCol"/>
//   <input type="text" id="leastFavCol"/>
//   <input type="text" id="favFood"/>
// </html>

var favouriteColor = document.getElementById('#favCol');

// (5.) Append a paragraph tag to the div with class 'my-articles'.

// <html>
//   <body>
//   <input type="text" id="search"/>

//   <div class="my-articles">

//   </div>
//   </body>

// </html>

document.getElementsByClass('.my-articles').innerHTML = '<p>Hello DT</p>' + document.

// (6.) Write the necessary code to figure out how many list items are in the ul tag below:

// <html>
//   <body>
//   <input type="text" id="search"/>

//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
//   </body>

// </html>


function countItems() {
  var ul = document.getElementsByTagName('ul')[0];
  var i = 0, itemCount = 0;
  while(ul.getElementsByTagName('li') [i++]) itemCount++;
}






