---
collection: base
title: Code
---

## Inline code

Here is an example of some <code>sample inline code</code> within a paragraph.

## Code block


<a href="http://ubuntudesign.github.io/vanilla-framework/examples/base/code/" class="js-example">
    View example of the base code block
</a>

<iframe
    src="http://ubuntudesign.github.io/vanilla-framework/examples/base/code/"
    width="100%"
    height="250px"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0">
    For an example please visit:
    <a href="http://ubuntudesign.github.io/vanilla-framework/examples/base/code/">
        http://ubuntudesign.github.io/vanilla-framework/examples/base/code/
    </a>
</iframe>

<pre><code id="example-1"></code></pre>

<script>
    var examples = document.querySelectorAll('.js-example');
    examples.forEach(function(example)) {
        var link = example.href;
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
            link,
            true
        );
        x.send(null);
    });
</script>
