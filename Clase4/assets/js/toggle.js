$(document).ready(function(){
    $("#botton-toggle").toggle(
        function(){
        $("#london-photo").css({
            "background-image": "url(./assets/img/londres.jpg)"
        })},
        function() {
        $("#mexico-photo").css({
            "background-image": "url(./assets/img/bg_hero.jpg)"
        })},
        function(){
        $("#france-photo").css({
                "background" : "url(./assets/img/torre-eiffel-grid-m.jpg)"
            });}
    )

})