// Selecting with id
// document.getElementById('idName');



// Selecting with class
// document.getElementsByClassName('className');



// Selecting with tag
// document.getElementsByTagName('tagName');



// Selecting with querySelector
// document.querySelector('selector'); => Return only first element
// document.querySelectorAll('selector'); => Return a NodeList



// DOM Manipulation
// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the text content of the element and all its children with HTML tags
// textContent : returns textual content even for hidden elements => works like innerText but it includes hidden elements

/* DOM tree consist of
1. text nodes
2. comment nodes
3. element nodes
*/

// Attributes
// getAttribute('attributeName')
// setAttribute('attributeName', 'attributeValue')

// Style
// node.style => returns the style object for the node


// Insert Elements
// let el = document.createElement("div") => create element
// node.append(el) => adds at the end of node(inside)
// node.prepend(el) => adds at the start of node(inside)
// node.before(el) => adds before the node(outside)
// node.after(el) => adds after the node(outside)

// Delete Element
// node.remove()
// 