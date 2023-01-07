function dynamicText( itemID, message )
{
    var textField = document.getElementById(itemID);
    var newNode;
    
    if (!textField) {return; }

    newNode = document.createTextNode(
        (message =="") ? "\xa0" : message
    );
    textField.replaceChild(newNode, textField.firstChild);
}


function clearChildren( node )
{
    while (node.hasChildNodes())
    {
        node.removeChild( node.lastChild );
    }
}

function makeImage( src, width, height, alt )
{
    var node = document.createElement("img");
    
    node.setAttribute("src", src);
    if (width) { node.setAttribute("width", width); }
    if (height) { node.setAttribute("height", height); }
    node.setAttribute("alt", alt);
    return node;
}
