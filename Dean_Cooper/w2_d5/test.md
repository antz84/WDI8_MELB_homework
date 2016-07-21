(1.) Write the correct javascript to select the second h1 element:

document.getElementsByTagName('h1')[1]



(2.) How would you change the contents of the element to be 'Friend'?


document.getElementsByTagName('h1')[1].innerHTML = "Friend"




```html
<html>
  <div>
    <h1>Hello</h1>
  </div>

  <ul>
    <h1>Goodbye<h1>
  </ul>
</html>
```

(3.) How would you add an event listener to the button element inside the div, so that when it is clicked the background colour of the div changes to red?



document.getElementsByTagName('button')[0].addEventListener('click',function(){
    document.getElementsByTagName('div')[0].style.background-color = "red";
})


```html
<html>
  <div>
    <button>Click me!</button>
  </div>

  <button>Dont click me</button>
</html>
```

(4.) Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.

var favouriteColor = document.getElementById('favCol').value;



```html
<html>
  <input type="text" id="favCol"/>
  <input type="text" id="leastFavCol"/>
  <input type="text" id="favFood"/>
</html>
```

(5.) Append a paragraph tag to the div with class 'my-articles'.


var divToAddTo = document.getElementsByClassName('my-articles')[0]
var para = document.createElement('p');
divToAddTo.appendChild(para);

```html
<html>
  <body>
  <input type="text" id="search"/>

  <div class="my-articles">

  </div>
  </body>

</html>
```

(6.) Write the necessary code to figure out how many list items are in the ul tag below:

document.querySelectorAll('body ul li').length;



```html
<html>
  <body>
  <input type="text" id="search"/>

  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </body>

</html>
```
