/*
 * bootstrap Modal Plugin
 * https://github.com/Kuan-wei/modal_maker
 *
 * Copyright 2018, Kuan-wei Ho
 * https://github.com/Kuan-wei
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

if ( typeof Object.create !== 'function' ) {
  Object.create = function( obj ) {
      function F() {}
      F.prototype = obj;
      return new F();
  };
}

(function ($) {
  'use strict';

  

  var modal_maker = {
    init: function( options, element ) {
      var _obj = this;
      _obj.element = element;
      _obj.$element = $( element );
      _obj.options = $.extend( {}, $.fn.modal_maker.options, options );
      
      _obj.metadata = _obj.$element.data();

      if( _obj.options.modal_id == 'modal_maker'){        
        var date = new Date();
        var timestamp = date.getTime();
        o_obj.options.modal_id =  'modal_maker_' + timestamp 
      }

      _obj.$element
        .attr("data-toggle", "modal")
        .attr("data-target", "#" + _obj.options.modal_id );

      _obj.modal = $('<div></div>')
        .addClass("modal fade")
        .attr("id", _obj.options.modal_id)
        .attr("tabindex", "-1")
        .attr("role", "dialog")
        .attr("aria-labelledby", _obj.options.modal_label)
        .insertAfter( _obj.$element )
        .on('show.bs.modal', function (event) {
          _obj.options.show_bs_modal( event, _obj.modal )
        })
        .on('hidden.bs.modal', function (event) {
          _obj.options.hidden_bs_modal( event, _obj.modal )
        })

      var modal_document = $('<div></div>')
        .addClass("modal-dialog")
        .addClass( _obj.options.modal_dialog_centered? "modal-dialog-centered" : "" )
        .addClass( (_obj.options.modal_size == 'large')? "modal-lg" : (_obj.options.modal_size == 'small')? "modal-sm" : "" )
        .attr("role", "document")
        .appendTo( _obj.modal )
  
      _obj.modal_content = $('<div></div>')
        .addClass("modal-content")
        .appendTo( modal_document )
  
      _obj.modal_header = $('<div></div>')
        .addClass("modal-header")
        .append( $('<h5 class="modal-title" id="'+_obj.options.modal_label+'">'+_obj.options.modal_title+'</h5>') )
        .append( $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>') )
        .appendTo( _obj.modal_content )
  
      _obj.modal_body = $('<div></div>')
        .addClass("modal-body")
        .addClass( _obj.options.modal_body_class )
        .appendTo( _obj.modal_content )
      
      _obj.modal_footer = $('<div></div>')
        .addClass("modal-footer")
        .addClass( _obj.options.modal_footer_class )
        .appendTo( _obj.modal_content )
        
      _obj.initializeModal();

    },

    initializeModal: function() {
      var _obj = this;
      
      _obj.set_modal_body()
      _obj.set_modal_footer()

      _obj.setTrigger();
    },

    setTrigger: function() {
      var _obj = this;
    },

    set_modal_title : function( content ){
      var _obj = this;  
      $( _obj.modal_header ).find('h5').html( content?  content : _obj.options.modal_title );
    },
  
    set_modal_body : function( content ){
      var _obj = this;  
      $( _obj.modal_body ).html( content?  content : _obj.options.modal_body );
    },

    set_modal_footer : function( content ){
      var _obj = this;  
      $( _obj.modal_footer ).append( content?  content :  _obj.options.modal_footer );
    },

    modal_hide : function(){
      var _obj = this;  
      _obj.modal.modal('hide')
    },
  }


  $.fn.modal_maker = function( options ) {
    if(  typeof options == 'undefined' ){      
      var date = new Date();
      var timestamp = date.getTime();
      options = { modal_id : 'modal_maker_' + timestamp }
    }
    if ( $.isPlainObject( options ) ) {
        return this.each(function() {
          var modal_makerObj = Object.create( modal_maker );
          modal_makerObj.init( options, this );
          $(this).data('modal_makerObj', modal_makerObj);
        });
    } else if ( typeof options === 'string' && options.indexOf('_') !== 0 ) {
        var modal_makerObj = $(this).data('modal_makerObj');
        var method = modal_makerObj[options];
        return method.apply(modal_makerObj, $.makeArray(arguments).slice(1));
    }
    
  };
  
  $.fn.modal_maker.options = {
    modal_id : 'modal_maker',
    modal_size : '',
    modal_label : 'modalLabel',
    modal_title : 'modalTitle',
    modal_body : 'modal body',
    modal_footer : '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>',
    modal_dialog_centered : false,
  
    show_bs_modal : function( event, modal ){      
      // var button = $(event.relatedTarget) // Button that triggered the modal
      // var recipient = button.data('whatever') // Extract info from data-* attributes
      // var modal = $(this)
    },
    hidden_bs_modal : function( event, modal ){      
      // var button = $(event.relatedTarget) // Button that triggered the modal
      // var recipient = button.data('whatever') // Extract info from data-* attributes
      // var modal = $(this)
    }
  }
}) ( jQuery, window, document );