$("#newFood").on("submit", function(event){
   event.preventDefault();

   var newMeal = {
       txt: $("#devoured").val().trim(),
       devoured: 0
   };

   $.ajax("api/all", {
       type: "POST",
       data: newMeal
   }).then(()=>{
       console.log("new meal added");
       location.reload();
   });
});

$(".del-meal").on("click", function(event){
    var id= $(this).data("id");
    
    $.ajax("/api/all/"+ id, {
        type: "DELETE"
    }).then(function(){
        console.log("deleted", id);
        location.reload();
    });
});

$(".dv").on("click", function(event){
    var id= $(this).data("id");
    var dv = $(this).data("dv");
    var newDv={ devoured: 1} ;

    $.ajax("/api/all/"+ id, {
        type: "PUT",
        data: newDv
    }).then(function(){
        location.reload();
    });
    
});