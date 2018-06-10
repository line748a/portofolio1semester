$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPåmenubutton);
}

function trykPåmenubutton() {

    console.log("Tryk på menubutton");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");
}
