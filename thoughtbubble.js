var bubbles = [];

function onAddThought() {
    // Get the screen extents
    var width = window.screen.availWidth;
    var height = window.screen.availHeight;

    var bubble = document.createElement( "input" );
    bubble.className = "bubble";
    bubble.style.left = Math.floor(Math.random() * (width - 500) ).toString() + 'px';
    bubble.style.top = Math.floor(Math.random() * (height - 200) ).toString() + 'px';
    document.body.appendChild( bubble );
    
    bubbles.push( bubble );
}