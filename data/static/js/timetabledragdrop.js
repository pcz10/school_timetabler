$(function(){
    $('.left .item').draggable({
        revert:true,
        proxy:'clone'
    });
    $('.timetable td.drop').droppable({
        accept: '.item',
        onDragEnter:function(){
            $(this).addClass('over');
        },
        onDragLeave:function(){
            $(this).removeClass('over');
        },
        onDrop:function(e,source){
            $(this).removeClass('over');
            if ($(source).hasClass('assigned')){
                 $(this).append(source);
            } else {
                 var c = $(source).clone().addClass('assigned');
                 $(this).empty().append(c);
                 c.draggable({
                      revert:true
                      });
                 }
            }
    });
    $('.left').droppable({
        accept:'.assigned',
            onDragEnter:function(e,source){
                $(source).addClass('trash');
            },
            onDragLeave:function(e,source){
                $(source).removeClass('trash');
            },
            onDrop:function(e,source){
                $(source).remove();
            }
    });
});
