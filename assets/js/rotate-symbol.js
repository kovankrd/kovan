$(document).ready(function() {
    $("#btn-logo").click(function(event) {
        event.stopPropagation();
        $('.btn-logo-icon').toggleClass('rotated');
    });
    $("#main-dropdown").click(function(event) {
        event.stopPropagation();
        $('.dropdown-toggle-icon').toggleClass('rotated');
    });    
    $("#btn").click(function(event) {
        event.stopPropagation();
        $('.caret-down-symbol').toggleClass('rotated');
    });    
    $(document).click(function(event) {
        if (!$(event.target).closest('#main-dropdown, #btn, #btn-logo').length) {
            $('.btn-logo-icon').removeClass('rotated');
            $('.dropdown-toggle-icon').removeClass('rotated');
            $('.caret-down-symbol').removeClass('rotated');
        }
    });
});