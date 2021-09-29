// Create a clone of element with id ddl_1:
let memberClone = document.querySelector('.team-member-div').cloneNode( true );

// Change the id attribute of the newly created element:
clone.setAttribute( 'id', newId );

// Append the newly created element on element p 
document.querySelector('.team-member-div').appendChild( clone );