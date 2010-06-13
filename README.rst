**jQuery-placeholder** is a JavaScript shim to emulate the behavior of the `HTML5 placeholder attribute <http://dev.w3.org/html5/spec-author-view/common-input-element-attributes.html#the-placeholder-attribute>`_ where it isn't supported.

Usage
=====

1. Include jquery.placeholder-x.x.js after jQuery has been included::
   
      <script type="text/javascript" src="jquery-x.x.x.js"></script>
      <script type="text/javascript" src="jquery.browsersupport-x.x.js"></script>

2. Run the ``$.featureSupport()`` function on the document ready event::
   
      $(document).ready(function(){
         $('input#search').placeholder();
      });

Options
=======

Options may be passed to the ``$().placeholder()`` function via an optional hash parameter. Example:

::

   $('input#search').placeholder({
      onClass: 'on',
      offClass: 'off',
      placeholderSupport: featureSupport.placeholder
   });

**onClass**
   Class to be applied while ``<input>`` is focused (``false`` or string; default ``'focused'``)

**offClass**
   Class to be applied while ``<input>`` is blurred (``false`` or string; default ``false``)

**placeholderSupport**
   Whether or not the ``placeholder`` attribute is supported (boolean; default ``('placeholder' in document.createElement('input'))``). Only define to avoid running feature test multiple times (e.g. if you are using `jquery-featureSupport <http://github.com/cpharmston/jQuery-featureSupport>`_)

