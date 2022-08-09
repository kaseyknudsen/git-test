
function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

        let topPosition = 25;
        let leftPosition = 25;
        let width = 500;
        let height = 500;
  
    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);   
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';   //px is there because a unit is required by the CSS property
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];
        newDiv.style.borderRadius = '50%';   //this will make a circle
        document.body.appendChild(newDiv);

        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}

//additional challenge
// Turn the div from a square into a circle. Research the use of the CSS property called border-radius. 
// You can change the style in the HTML document (inside the <style> element) or you can choose to set the 
// border-radius style in the JavaScript file. Both approaches will work, as long as you set the border-radius 
// property appropriately.

