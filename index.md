<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

# Description <button type="button" class="btn btn-primary" id="demo0">Click me</button>

A simple plugin to create a bootstrap modal easier.

This plugin is based on Bootstrap modal component and JQuery.

## Requirements
*   [JQuery](https://jquery.com/)
*   [Bootstrap](http://getbootstrap.com/) v4.1.0+

## Demos
### demo 1
Simeple usage. <button type="button" class="btn btn-primary" id="demo1">Demo 1</button>
```js
// set #demo1 button
$('#demo1').modal_maker()
```

### demo 2
Customize modal title. 

Bootstrap modal title default HTML tag is _H5_


<button type="button" class="btn btn-primary" id="demo2">Demo 2</button> 
<button type="button" class="btn btn-primary" id="demo2_1">Demo 2_1</button>

```js
// customize #demo2 modal title
$('#demo2').modal_maker({
    modal_title : 'customize demo 2 title'
})
// or 
$('#demo2_1').modal_maker()
$('#demo2_1').modal_maker('set_modal_title','demo2 title')
```

### demo 3
Customize modal body. 

<button type="button" class="btn btn-primary" id="demo3">Demo 3</button>
 <button type="button" class="btn btn-primary" id="demo3_1">Demo 3_1</button>

```js
// customize #demo3 modal body
$('#demo3').modal_maker({
    modal_body : 'customize modal body'
})
// or 
$('#demo3_1').modal_maker()
$('#demo3_1').modal_maker('set_modal_body','<h1>this is modal body</h1>')
```

### demo 4
Customize modal footer. 

<button type="button" class="btn btn-primary" id="demo4">Demo 4</button>
 <button type="button" class="btn btn-primary" id="demo4_1">Demo 4_1</button>
 <button type="button" class="btn btn-primary" id="demo4_2">Demo 4_2</button>

```js
// customize #demo4 modal footer
$('#demo4').modal_maker({
    modal_footer : '<button type="button" class="btn btn-primary">footer button</button>'
})
// or 
$('#demo4_1').modal_maker()
$('#demo4_1').modal_maker('set_modal_footer','<button type="button" class="btn btn-primary">footer button</button>')
// or 
var modal_4_footer_btn = $('<button type="button" class="btn btn-primary">footer button</button>')
    .on('click', function(){
        $('#demo4_2').modal_maker('modal_hide')
    })
$('#demo4_2').modal_maker()
$('#demo4_2').modal_maker('set_modal_footer', modal_4_footer_btn)
```


## Basic usage
<button type="button" class="btn btn-primary" id="demo5">Click me</button>

```js
// customize #demo5 
var modal_5_body = $('<input type="text" class="form-control">')
var modal_5_footer_btn =  $('<button type="button" class="btn btn-primary">footer button</button>')
    .on('click', function(){
        $('#demo5').modal_maker('modal_hide')
    })
$('#demo5').modal_maker({
    modal_body : modal_5_body,
    modal_footer : modal_5_footer_btn,
    hidden_bs_modal : function( event, modal ){   
        modal.find('input').val('')
    }
})
```

## Advanced usage
Please read [Bootstrap modal component](https://getbootstrap.com/docs/4.1/components/modal/) for more advanced usage.

## License
Released under the [MIT license](https://opensource.org/licenses/MIT).

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="modal_maker.js"></script>   

<script>
    $( document ).ready(function() {
        /// set #demo0 button
        $('#demo0').modal_maker()
        $('#demo1').modal_maker()

        $('#demo2').modal_maker({
            modal_title : 'customize demo 2 title'
        })       
        $('#demo2_1').modal_maker(); 
        $('#demo2_1').modal_maker('set_modal_title','demo2 title')

        // customize #demo3 modal body
        $('#demo3').modal_maker({
            modal_body : 'customize modal body'
        })// or 
        $('#demo3_1').modal_maker()
        $('#demo3_1').modal_maker('set_modal_body','<h1>this is modal body</h1>')

        // customize #demo4 modal footer
        $('#demo4').modal_maker({
            modal_footer : '<button type="button" class="btn btn-primary">footer button</button>'
        })
        // or 
        $('#demo4_1').modal_maker()
        $('#demo4_1').modal_maker('set_modal_footer','<button type="button" class="btn btn-primary">footer button</button>')
        // or 
        var modal_4_footer_btn = $('<button type="button" class="btn btn-primary">footer button</button>')
            .on('click', function(){
                $('#demo4_2').modal_maker('modal_hide')
            })
        $('#demo4_2').modal_maker()
        $('#demo4_2').modal_maker('set_modal_footer', modal_4_footer_btn)

        
        // customize #demo5 
        var modal_5_body = $('<input type="text" class="form-control">')
        var modal_5_footer_btn =  $('<button type="button" class="btn btn-primary">footer button</button>')
            .on('click', function(){
                $('#demo5').modal_maker('modal_hide')
            })
        $('#demo5').modal_maker({
            modal_body : modal_5_body,
            modal_footer : modal_5_footer_btn,
            hidden_bs_modal : function( event, modal ){   
                modal.find('input').val('')
            }
        })
    })

</script>