var x = new XMLHttpRequest();

// Regex to return the content of the body
var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im
x.onreadystatechange = function() {
    if( x.status === 200 && x.readyState === 4) {
      var source = x.responseText;
      var example = document.createTextNode(pattern.exec(source)[1]);
      document.getElementById('example-1').appendChild(example);
    }
}

x.open(
    'GET',
    'http://vanilla-framework.github.io/vanilla-framework/examples/base/code/',
    true
);
x.send(null);
