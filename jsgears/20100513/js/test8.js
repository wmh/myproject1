// JavaScript Document

$(function() {
   $(".Place").draggable({
	 helper: 'clone',
	 revert: 'invalid',
	 scroll: false
	 });

   $("#list2").droppable({
     accept: '.Place',
     drop: function(ev, ui)
     {
    	 if (ui.draggable.parent().attr("id") == "list2")
    	 {
    		 var $a = $(ui.draggable);
    	 }
    	 else
    	 {
    		 var $a = $(ui.draggable).clone();
    	 }
    	 $(this).append($a);
    	 $a.draggable();
      }
      });

   $('body').droppable({
	   accept: '#list2 .Place',
	   drop: function(ev, ui)
	   {
		   $a = $(ui.draggable);
		   $a.empty().addClass("Start");
	   }
	   });

   $("#accordion").accordion({collapsible: true});

});
