<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

# Description

A simple plugin to create a bootstrap modal easier.
<button type="button" class="btn btn-primary" id="demo0">Click me</button>

## Requirements
*   [JQuery](https://jquery.com/)
*   [Bootstrap](http://getbootstrap.com/) v4.1.0+

## Desmos
### demo 1
Simeple usage. <button type="button" class="btn btn-primary" id="demo1">Click me</button>
```js
// set #demo1 button
$('#demo1').modal_maker()
```

### demo 2
Customize modal title. <button type="button" class="btn btn-primary" id="demo2">Click me</button> <button type="button" class="btn btn-primary" id="demo2_1">Click me</button>

```js
// customize #demo2 modal title
$('#demo2').modal_maker({
    modal_title : 'demo2 title'
})
// or 
$('#demo2_1').modal_maker()
$('#demo2_1').modal_maker('set_modal_title','demo2 title')
```

### demo 3
Customize modal body. <button type="button" class="btn btn-primary" id="demo3">Click me</button>
 <button type="button" class="btn btn-primary" id="demo3_1">Click me</button>

```js
// customize #demo3 modal body
$('#demo3').modal_maker({
    modal_body : 'customize modal body'
})// or 
$('#demo3_1').modal_maker()
$('#demo3_1').modal_maker('set_modal_body','<h1>this is modal body</h1>')
```
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
            modal_title : 'customize modal title'
        })       
        $('#demo2_1').modal_maker(); 
        $('#demo2_1').modal_maker('set_modal_title','demo2 title')

        // customize #demo3 modal body
        $('#demo3').modal_maker({
            modal_body : 'customize modal body'
        })// or 
        $('#demo3_1').modal_maker()
        $('#demo3_1').modal_maker('set_modal_body','<h1>this is modal body</h1>')

        /*
        var ttt = $('<button type="button" class="btn btn-primary">xxx</button>')
            .on('click', function(){
                $('#test').modal_maker('modal_hide')
            })
        
        var ttt2 = $('<input type="text">')

        var taa = $('#test').modal_maker({
            modal_body : ttt2,
            modal_footer : ttt,
            hidden_bs_modal : function( event, modal ){   
                modal.find('input').val('')
            }
        });            

        $('#test2').modal_maker()
        $('#test2').modal_maker('set_modal_body','<h1>tttt</h1>')   
        */
    })

</script>