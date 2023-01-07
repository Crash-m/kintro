function show( n )
{
    var str;
    var textField = document.getElementById("eng" + Math.abs(n));
    var newNode;

    newNode = document.createTextNode( (n < 0) ? "\xa0" : english[n-1] );
    textField.replaceChild(newNode, textField.firstChild);
}
