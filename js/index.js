var input = document.getElementById("input");
var mapa = document.getElementById("mapa");
var botellas = $("#botellas");
var video = document.getElementById("video");
var botonBizkaia = $("#boton-bizkaia");
var botonGipuzkoa = $("#boton-gipuzkoa");
var botonAraba = $("#boton-araba");
var botonNafarroa = $("#boton-nafarroa");

// Cambio de estado barra navegación al hacer scroll

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
        $("header").addClass("header-scroll");
        $(".logo").attr("src", "img/logo-kaiku-negro.png");
        $("#boton-hamburguesa").attr("src", "img/menu-azul.svg");
        $("#boton-hamburguesa").css("margin-top", "-20px");
    } else {
        //se borra el fondo y se vuelve transparente (defined en el css)
        $("header").removeClass("header-scroll");
        $(".logo").attr("src", "img/logo-kaiku-blanco.png");
        $("#boton-hamburguesa").attr("src", "img/menu.svg");
        $("#boton-hamburguesa").css("margin-top", "0px");
    }
});

//_________LOADER____________//

setTimeout(function() {
    var options = {};
    $(".loader").hide();
}, 1400);

//_________ MENÚ MOVIL ____________//

$("#menu-movil").hide();

function abrirMenumovil() {
    $("#menu-movil").show();
    $("#boton-hamburguesa").hide();
}

function cerrarMenumovil() {
    $("#menu-movil").hide();
    $("#boton-hamburguesa").show();
}

$(".boton").hide();

//_________CONTENIDO DE CADA COMARCA____________//

function contenidoBizkaia() {
    $("#insercion-js").remove();
    $("#footer").after('<div id="insercion-js" style="background:red"></div>');
}

function contenidoGipuzkoa() {
    $("#insercion-js").remove();
    $("#footer").after('<div id="insercion-js" style="background:blue"></div>');
}

//_________BOTONES DE CADA PROVINCIA____________//

function mostrarBotonBizkaia() {
    botonBizkaia.addClass("display");
    botonGipuzkoa.removeClass("display");
    botonAraba.removeClass("display");
    botonNafarroa.removeClass("display");
}

function mostrarBotonGipuzkoa() {
    botonBizkaia.removeClass("display");
    botonGipuzkoa.addClass("display");
    botonAraba.removeClass("display");
    botonNafarroa.removeClass("display");
}

function mostrarBotonAraba() {
    botonBizkaia.removeClass("display");
    botonGipuzkoa.removeClass("display");
    botonAraba.addClass("display");
    botonNafarroa.removeClass("display");
}

function mostrarBotonNafarroa() {
    botonBizkaia.removeClass("display");
    botonGipuzkoa.removeClass("display");
    botonAraba.removeClass("display");
    botonNafarroa.addClass("display");
}

//_________BOTÓN MOSTRAR MAPA PROVINCIA____________//

function mostrarMapaBizkai() {
    mapa.src = "img/bizkaia.png";
    $(".boton").hide();
    $("#comarca").hide();
    $("#boton-volver").show();
}

function mostrarMapaGipuzkoa() {
    mapa.src = "img/gipuzkoa.png";
    $(".boton").hide();
    $("#comarca").hide();
    $("#boton-volver").show();
}

function mostrarMapaAraba() {
    mapa.src = "img/araba.png";
    $(".boton").hide();
    $("#comarca").hide();
    $("#boton-volver").show();
}

function mostrarMapaNafarroa() {
    mapa.src = "img/nafarroa.png";
    $(".boton").hide();
    $("#comarca").hide();
    $("#boton-volver").show();
}

//_________BOTÓN MOSTRAR CONTENIDO COMARCA____________//

function cambiarImagenJS() {
    //_________CARGAR MAPAS DE BIZKAIA____________//

    //CARGAR MAPA DE DURANGALDEA
    if (
        (input.value == 48220) |
        (input.value == 48340) |
        (input.value == 48348) |
        (input.value == 48291) |
        (input.value == 48292) |
        (input.value == 48240) |
        (input.value == 48249) |
        (input.value == 48200) |
        (input.value == 48348) |
        (input.value == 48200) |
        (input.value == 48260) |
        (input.value == 48215) |
        (input.value == 48213) |
        (input.value == 48212) |
        (input.value == 48210) |
        (input.value == 48200) |
        (input.value == 48250)
    ) {
        mapa.src = "img/durangaldea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //CARGAR MAPA DE BILBO HANDIA
    else if (
        (input.value == 48500) |
        (input.value == 48540) |
        (input.value == 48810) |
        (input.value == 48480) |
        (input.value == 48003) |
        (input.value == 48901) |
        (input.value == 48902) |
        (input.value == 48903) |
        (input.value == 48001) |
        (input.value == 48002) |
        (input.value == 48003) |
        (input.value == 48004) |
        (input.value == 48005) |
        (input.value == 48006) |
        (input.value == 48007) |
        (input.value == 48008) |
        (input.value == 48009) |
        (input.value == 48010) |
        (input.value == 48011) |
        (input.value == 48012) |
        (input.value == 48013) |
        (input.value == 48014) |
        (input.value == 48015) |
        (input.value == 48450) |
        (input.value == 48970) |
        (input.value == 48480) |
        (input.value == 48640) |
        (input.value == 48160) |
        (input.value == 48170) |
        (input.value == 48950) |
        (input.value == 48960) |
        (input.value == 48195) |
        (input.value == 48940) |
        (input.value == 48550) |
        (input.value == 48196) |
        (input.value == 48530) |
        (input.value == 48920) |
        (input.value == 48920) |
        (input.value == 48980) |
        (input.value == 48910) |
        (input.value == 48150) |
        (input.value == 48510) |
        (input.value == 48520) |
        (input.value == 48508) |
        (input.value == 48180) |
        (input.value == 48170)
    ) {
        mapa.src = "img/bilbo-handia.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }
    //CARGAR MAPA DE BUSTURIALDEA
    else if (
        (input.value == 48320) |
        (input.value == 48383) |
        (input.value == 48390) |
        (input.value == 48391) |
        (input.value == 48382) |
        (input.value == 48370) |
        (input.value == 48287) |
        (input.value == 48311) |
        (input.value == 48393) |
        (input.value == 48360) |
        (input.value == 48394) |
        (input.value == 48391) |
        (input.value == 48392) |
        (input.value == 48312) |
        (input.value == 48395)
    ) {
        mapa.src = "img/busturialdea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //CARGAR MAPA DE LEA ARTIBAI
    else if (
        (input.value == 48289) |
        (input.value == 48277) |
        (input.value == 48710) |
        (input.value == 48380) |
        (input.value == 48289) |
        (input.value == 48278) |
        (input.value == 48288) |
        (input.value == 48280) |
        (input.value == 48270) |
        (input.value == 48276) |
        (input.value == 48278) |
        (input.value == 48060) |
        (input.value == 48381) |
        (input.value == 48700) |
        (input.value == 48269)
    ) {
        mapa.src = "img/lea-artibai.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //CARGAR MAPA DE ARRATIA-NERVIÓN
    else if (
        (input.value == 48498) |
        (input.value == 48140) |
        (input.value == 48140) |
        (input.value == 48145) |
        (input.value == 48144) |
        (input.value == 48499) |
        (input.value == 48460) |
        (input.value == 48498) |
        (input.value == 48143) |
        (input.value == 48498) |
        (input.value == 48499) |
        (input.value == 48142) |
        (input.value == 48390) |
        (input.value == 48141) |
        (input.value == 48330) |
        (input.value == 48410) |
        (input.value == 48419) |
        (input.value == 48490)
    ) {
        mapa.src = "img/arratia-nervion.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //CARGAR MAPA DE ENKARTERRIAK
    else if (
        (input.value == 48879) |
        (input.value == 48800) |
        (input.value == 48191) |
        (input.value == 48192) |
        (input.value == 48194) |
        (input.value == 48820) |
        (input.value == 48830) |
        (input.value == 48840) |
        (input.value == 48890) |
        (input.value == 48891) |
        (input.value == 48895) |
        (input.value == 48850) |
        (input.value == 48860) |
        (input.value == 48869) |
        (input.value == 48190) |
        (input.value == 48191) |
        (input.value == 48869) |
        (input.value == 48870) |
        (input.value == 48880)
    ) {
        mapa.src = "img/enkarterriak.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //CARGAR MAPA DE URIBE
    else if (
        (input.value == 48650) |
        (input.value == 48130) |
        (input.value == 48116) |
        (input.value == 48110) |
        (input.value == 48930) |
        (input.value == 48990) |
        (input.value == 48991) |
        (input.value == 48992) |
        (input.value == 48993) |
        (input.value == 48620) |
        (input.value == 48630) |
        (input.value == 48620) |
        (input.value == 48620) |
        (input.value == 48600) |
        (input.value == 49610) |
        (input.value == 48111) |
        (input.value == 48100) |
        (input.value == 48120) |
        (input.value == 48112) |
        (input.value == 48120) |
        (input.value == 48114)
    ) {
        mapa.src = "img/uribe.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-bizkaia").show();
    }

    //_________CARGAR MAPAS DE GIPUZKOA____________//

    //CARGAR MAPA DE DEBABARRENA
    else if (
        (input.value == 20820) |
        (input.value == 20829) |
        (input.value == 20600) |
        (input.value == 20860) |
        (input.value == 20870) |
        (input.value == 20850) |
        (input.value == 20830) |
        (input.value == 20590)
    ) {
        mapa.src = "img/debabarrena.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
        if (euskera == false) {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Debabarrena</h3> <p class="texto-debabarrena">En Debabarrena hay más de 7 ganaderías de la cooperativa Kaiku donde trabajan más de 20 familias. La leche que recogemos, únicamente recorre alrededor de 60 kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor. </p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/debabarrena1.jpg " alt=" "></li><li class="splide__slide"><img src="img/debabarrena2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        } else {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Debabarrena</h3> <p class="texto-debabarrena">Debabarrenan 7 ustiategi baino gehiago daude , non 20 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 60 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/debabarrena1.jpg " alt=" "></li><li class="splide__slide"><img src="img/debabarrena2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        }
        slider();
        $("#comarca").show();
    }

    //CARGAR MAPA DE DEBAGOIENA
    else if (
        (input.value == 20577) |
        (input.value == 20550) |
        (input.value == 20500) |
        (input.value == 20509) |
        (input.value == 20569) |
        (input.value == 20570) |
        (input.value == 20578) |
        (input.value == 20580) |
        (input.value == 20690) |
        (input.value == 20530) |
        (input.value == 20540) |
        (input.value == 20530) |
        (input.value == 20560) |
        (input.value == 20567) |
        (input.value == 20568) |
        (input.value == 20569)
    ) {
        mapa.src = "img/debagoiena.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
    }

    //CARGAR MAPA DE BIDASOA TXINGUDI
    else if (
        (input.value == 20280) |
        (input.value == 20300) |
        (input.value == 20301) |
        (input.value == 20302) |
        (input.value == 20303) |
        (input.value == 20304) |
        (input.value == 20305) |
        (input.value == 20100) |
        (input.value == 20180) |
        (input.value == 20110)
    ) {
        mapa.src = "img/bidasoa-txingudi.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
    }

    //CARGAR MAPA DE TOLOSALDEA
    else if (
        (input.value == 20269) |
        (input.value == 20150) |
        (input.value == 20495) |
        (input.value == 20260) |
        (input.value == 20494) |
        (input.value == 20268) |
        (input.value == 20268) |
        (input.value == 20270) |
        (input.value == 20159) |
        (input.value == 20259) |
        (input.value == 20492) |
        (input.value == 20496) |
        (input.value == 20493) |
        (input.value == 20491) |
        (input.value == 20494) |
        (input.value == 20400) |
        (input.value == 20267) |
        (input.value == 20271) |
        (input.value == 20159) |
        (input.value == 20491) |
        (input.value == 20490) |
        (input.value == 20269) |
        (input.value == 20490) |
        (input.value == 20267) |
        (input.value == 20268) |
        (input.value == 20400) |
        (input.value == 20494) |
        (input.value == 20150) |
        (input.value == 20159)
    ) {
        mapa.src = "img/tolosaldea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
        $("#comarca").show();
        if (euskera == false) {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Tolosaldea</h3> <p class="texto-tolosaldea">En Tolosaldea hay más de 34 ganaderías de la cooperativa Kaiku. La leche que recogemos, únicamente recorre alrededor de 20 kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/tolosaldea1.jpg " alt=" "></li><li class="splide__slide"><img src="img/tolosaldea2.jpg " alt=" "></li><li class="splide__slide"><img src=" img/tolosaldea3.jpg " alt=" "></li></ul> </div></div></div>'
            );
        } else {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Tolosaldea</h3> <p class="texto-tolosaldea">Tolosaldean 34 ustiategi baino gehiago daude , non 60 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 20 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/tolosaldea1.jpg " alt=" "></li><li class="splide__slide"><img src="img/tolosaldea2.jpg " alt=" "></li><li class="splide__slide"><img src=" img/tolosaldea3.jpg " alt=" "></li></ul> </div></div></div>'
            );
        }
        slider();
        $("#comarca").show();
    }

    //CARGAR MAPA DE UROLA KOSTA
    else if (
        (input.value == 20809) |
        (input.value == 20809) |
        (input.value == 20749) |
        (input.value == 20720) |
        (input.value == 20730) |
        (input.value == 20739) |
        (input.value == 20737) |
        (input.value == 20709) |
        (input.value == 20218) |
        (input.value == 20808) |
        (input.value == 20220) |
        (input.value == 20230) |
        (input.value == 20810) |
        (input.value == 20700) |
        (input.value == 20800) |
        (input.value == 20740) |
        (input.value == 20749) |
        (input.value == 20750) |
        (input.value == 20267) |
        (input.value == 20271) |
        (input.value == 20159) |
        (input.value == 20491) |
        (input.value == 20490) |
        (input.value == 20269) |
        (input.value == 20490) |
        (input.value == 20267) |
        (input.value == 20700)
    ) {
        mapa.src = "img/urola-kosta.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
        if (euskera == false) {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Urola Kosta</h3> <p class="texto-urolakosta">En Urola Kosta hay más de 51 ganaderías de la cooperativa Kaiku donde trabajan más de 105 familias. La leche que recogemos, llega en menos de media hora hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/urolakosta1.jpg " alt=" "></li><li class="splide__slide"><img src="img/urolakosta2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        } else {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Urola Kosta</h3> <p class="texto-urolakosta">Urola Kostan 51 ustiategi baino gehiago daude , non 105 familia baino gehiagok lan egiten dute. Biltzen dugun esneak ordu erdi baino gutxiago egiten du ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/urolakosta1.jpg " alt=" "></li><li class="splide__slide"><img src="img/urolakosta2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        }
        slider();
        $("#comarca").show();
    }

    //CARGAR MAPA DE GOIERRI
    else if (
        (input.value == 20248) |
        (input.value == 20248) |
        (input.value == 20211) |
        (input.value == 20200) |
        (input.value == 20217) |
        (input.value == 20248) |
        (input.value == 20213) |
        (input.value == 20249) |
        (input.value == 20210) |
        (input.value == 20250) |
        (input.value == 20214) |
        (input.value == 20212) |
        (input.value == 20240) |
        (input.value == 20216) |
        (input.value == 20214) |
        (input.value == 20247) |
        (input.value == 20215) |
        (input.value == 20214)
    ) {
        mapa.src = "img/goierri.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
        if (euskera == false) {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Goierri</h3> <p class="texto-goierri">En Goierri hay más de 10 ganaderías de la cooperativa Kaiku donde trabajan más de 15 familias. La leche que recogemos, únicamente recorre alrededor de 40  kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/goierri1.jpg " alt=" "></li><li class="splide__slide"><img src="img/goierri2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        } else {
            $("#comarca").html(
                '<div id="texto-comarca"> <h3>Goierri</h3> <p class="texto-goierri">Goierrin 10 ustiategi baino gehiago daude , non 15 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 40 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu.</p></div><div id="imagenes-comarca"> <div class="splide"> <div class="splide__track"> <ul class="splide__list"> <li class="splide__slide"><img src=" img/goierri1.jpg " alt=" "></li><li class="splide__slide"><img src="img/goierri2.jpg " alt=" "></li></ul> </div></div></div>'
            );
        }
        slider();
        $("#comarca").show();
    }

    //CARGAR MAPA DE DONOSTIALDEA
    else if (
        (input.value == 20140) |
        (input.value == 20115) |
        (input.value == 20001) |
        (input.value == 20002) |
        (input.value == 20003) |
        (input.value == 20004) |
        (input.value == 20005) |
        (input.value == 20006) |
        (input.value == 20007) |
        (input.value == 20008) |
        (input.value == 20009) |
        (input.value == 20010) |
        (input.value == 20011) |
        (input.value == 20013) |
        (input.value == 20014) |
        (input.value == 20015) |
        (input.value == 20016) |
        (input.value == 20017) |
        (input.value == 20018) |
        (input.value == 20100) |
        (input.value == 20160) |
        (input.value == 20100) |
        (input.value == 20120) |
        (input.value == 20128) |
        (input.value == 20160) |
        (input.value == 20130) |
        (input.value == 20130) |
        (input.value == 20170)
    ) {
        mapa.src = "img/donostialdea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-gipuzkoa").show();
    }

    //_________CARGAR MAPAS DE ARABA____________//

    //CARGAR MAPA DE GAZTEIZ - AGURAIN
    else if (
        (input.value == 1240) |
        (input.value == 1193) |
        (input.value == 1208) |
        (input.value == 1510) |
        (input.value == 1191) |
        (input.value == 1510) |
        (input.value == 1191) |
        (input.value == 1195) |
        (input.value == 1003) |
        (input.value == 1007) |
        (input.value == 1012) |
        (input.value == 1192) |
        (input.value == 1196) |
        (input.value == 1004) |
        (input.value == 1008) |
        (input.value == 1013) |
        (input.value == 1193) |
        (input.value == 1012) |
        (input.value == 1001) |
        (input.value == 1005) |
        (input.value == 1194) |
        (input.value == 1002) |
        (input.value == 1006) |
        (input.value == 1010) |
        (input.value == 1003) |
        (input.value == 1007) |
        (input.value == 1010) |
        (input.value == 1192) |
        (input.value == 1196) |
        (input.value == 1004) |
        (input.value == 1008) |
        (input.value == 1013) |
        (input.value == 1193) |
        (input.value == 1001) |
        (input.value == 1005) |
        (input.value == 1006) |
        (input.value == 1009) |
        (input.value == 1015) |
        (input.value == 1194) |
        (input.value == 1002) |
        (input.value == 1002)
    ) {
        mapa.src = "img/gazteiz-agurain.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-araba").show();
    }

    //CARGAR MAPA DE AÑANA - AIARA - AYALA
    else if (
        (input.value == 1450) |
        (input.value == 1468) |
        (input.value == 1470) |
        (input.value == 1150) |
        (input.value == 1423) |
        (input.value == 1426) |
        (input.value == 1211) |
        (input.value == 1220) |
        (input.value == 1474) |
        (input.value == 1478) |
        (input.value == 1470) |
        (input.value == 1476) |
        (input.value == 1477) |
        (input.value == 1479) |
        (input.value == 1408) |
        (input.value == 1212) |
        (input.value == 1427) |
        (input.value == 1216) |
        (input.value == 1118) |
        (input.value == 1428) |
        (input.value == 1213) |
        (input.value == 1420) |
        (input.value == 1230) |
        (input.value == 1195) |
        (input.value == 1430) |
        (input.value == 1439) |
        (input.value == 1213) |
        (input.value == 1400) |
        (input.value == 1409) |
        (input.value == 1213)
    ) {
        mapa.src = "img/anana-ayara-ayala.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-araba").show();
    }

    //CARGAR MAPA DE ZUIA - GORBEIALDEA
    else if (
        (input.value == 1160) |
        (input.value == 1165) |
        (input.value == 1169) |
        (input.value == 1520) |
        (input.value == 1170) |
        (input.value == 1171) |
        (input.value == 1130) |
        (input.value == 1139) |
        (input.value == 1440) |
        (input.value == 1449) |
        (input.value == 1138)
    ) {
        mapa.src = "img/zuia-gorbeialdea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-araba").show();
    }

    //_________Faltan de meter los generales____________//

    //_________CARGAR MAPAS DE NAFARROA____________//

    //CARGAR MAPA DE BIDASOA//
    else if (
        (input.value == 31891) |
        (input.value == 31754) |
        (input.value == 31790) |
        (input.value == 31876) |
        (input.value == 31700) |
        (input.value == 31753) |
        (input.value == 31780) |
        (input.value == 31720) |
        (input.value == 31890) |
        (input.value == 31750) |
        (input.value == 31740) |
        (input.value == 31744) |
        (input.value == 31748) |
        (input.value == 31760) |
        (input.value == 31749) |
        (input.value == 31754) |
        (input.value == 31790) |
        (input.value == 31877) |
        (input.value == 31880) |
        (input.value == 31870) |
        (input.value == 31751) |
        (input.value == 31747) |
        (input.value == 31791) |
        (input.value == 31711) |
        (input.value == 31752) |
        (input.value == 31746) |
        (input.value == 31710) |
        (input.value == 31713) |
        (input.value == 31781) |
        (input.value == 31792) |
        (input.value == 31794) |
        (input.value == 31878) |
        (input.value == 31789) |
        (input.value == 31712) |
        (input.value == 31714) |
        (input.value == 31793) |
        (input.value == 31879) |
        (input.value == 31715) |
        (input.value == 31891) |
        (input.value == 31720) |
        (input.value == 31730)
    ) {
        mapa.src = "img/bidasoa.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-nafarroa").show();
    }

    //CARGAR MAPA DE ERDIALDEA//
    else if (
        (input.value == 31280) |
        (input.value == 31178) |
        (input.value == 31264) |
        (input.value == 31523) |
        (input.value == 31228) |
        (input.value == 31460) |
        (input.value == 31241) |
        (input.value == 31262) |
        (input.value == 31272) |
        (input.value == 31280) |
        (input.value == 31261) |
        (input.value == 31271) |
        (input.value == 31239) |
        (input.value == 31210) |
        (input.value == 31263) |
        (input.value == 31513) |
        (input.value == 31228) |
        (input.value == 31243) |
        (input.value == 31140) |
        (input.value == 31229) |
        (input.value == 31511) |
        (input.value == 31227) |
        (input.value == 31515) |
        (input.value == 31380) |
        (input.value == 31579) |
        (input.value == 31310) |
        (input.value == 31520) |
        (input.value == 31490) |
        (input.value == 31590) |
        (input.value == 31592) |
        (input.value == 31131) |
        (input.value == 31591) |
        (input.value == 31530) |
        (input.value == 31229) |
        (input.value == 31263) |
        (input.value == 31153) |
        (input.value == 31494) |
        (input.value == 31228) |
        (input.value == 31200) |
        (input.value == 31281) |
        (input.value == 31271) |
        (input.value == 31491) |
        (input.value == 31593) |
        (input.value == 31360) |
        (input.value == 31510) |
        (input.value == 31493) |
        (input.value == 31491) |
        (input.value == 31395) |
        (input.value == 31227) |
        (input.value == 31175) |
        (input.value == 31174) |
        (input.value == 31241) |
        (input.value == 31283) |
        (input.value == 31227) |
        (input.value == 31251) |
        (input.value == 31270) |
        (input.value == 31588) |
        (input.value == 31460) |
        (input.value == 31133) |
        (input.value == 31281) |
        (input.value == 31494) |
        (input.value == 31260) |
        (input.value == 31177) |
        (input.value == 31580) |
        (input.value == 31243) |
        (input.value == 31130) |
        (input.value == 31227) |
        (input.value == 31340) |
        (input.value == 31382) |
        (input.value == 31587) |
        (input.value == 31219) |
        (input.value == 31150) |
        (input.value == 31241) |
        (input.value == 31320) |
        (input.value == 31219) |
        (input.value == 31523) |
        (input.value == 31522) |
        (input.value == 31219) |
        (input.value == 31521) |
        (input.value == 31280) |
        (input.value == 31315) |
        (input.value == 31313) |
        (input.value == 31152) |
        (input.value == 31282) |
        (input.value == 31151) |
        (input.value == 31281) |
        (input.value == 31390) |
        (input.value == 31395) |
        (input.value == 31650) |
        (input.value == 31250) |
        (input.value == 31350) |
        (input.value == 50686) |
        (input.value == 31219) |
        (input.value == 31392) |
        (input.value == 31100) |
        (input.value == 31394) |
        (input.value == 31550) |
        (input.value == 31454) |
        (input.value == 31491) |
        (input.value == 31175) |
        (input.value == 31570) |
        (input.value == 31400) |
        (input.value == 31495) |
        (input.value == 31220) |
        (input.value == 31314) |
        (input.value == 31589) |
        (input.value == 31293) |
        (input.value == 31219) |
        (input.value == 31300) |
        (input.value == 31219) |
        (input.value == 31229) |
        (input.value == 31500) |
        (input.value == 31522) |
        (input.value == 31154) |
        (input.value == 31496) |
        (input.value == 31133) |
        (input.value == 31176) |
        (input.value == 31514) |
        (input.value == 31230) |
        (input.value == 31330) |
        (input.value == 31242) |
        (input.value == 31292) |
        (input.value == 31809) |
        (input.value == 31284) |
        (input.value == 31292) |
        (input.value == 31290) |
        (input.value == 31281) |
        (input.value == 31240) |
        (input.value == 31381) |
        (input.value == 31311) |
        (input.value == 31312) |
        (input.value == 31492) |
        (input.value == 31176) |
        (input.value == 31291) |
        (input.value == 31243) |
        (input.value == 31395) |
        (input.value == 31282) |
        (input.value == 31253) |
        (input.value == 31383) |
        (input.value == 31396) |
        (input.value == 31177) |
        (input.value == 31132) |
        (input.value == 31291) |
        (input.value == 31391) |
        (input.value == 31179) |
        (input.value == 31290) |
        (input.value == 31292)
    ) {
        mapa.src = "img/erdialdea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-nafarroa").show();
    }

    //CARGAR MAPA DE MENDIALDEA//
    else if (
        (input.value == 31692) |
        (input.value == 31153) |
        (input.value == 31800) |
        (input.value == 31154) |
        (input.value == 31013) |
        (input.value == 31798) |
        (input.value == 31430) |
        (input.value == 31849) |
        (input.value == 31192) |
        (input.value == 31839) |
        (input.value == 31438) |
        (input.value == 31671) |
        (input.value == 31840) |
        (input.value == 31867) |
        (input.value == 31640) |
        (input.value == 31810) |
        (input.value == 31010) |
        (input.value == 31866) |
        (input.value == 31174) |
        (input.value == 31191) |
        (input.value == 31195) |
        (input.value == 31174) |
        (input.value == 31398) |
        (input.value == 31412) |
        (input.value == 31600) |
        (input.value == 31454) |
        (input.value == 31170) |
        (input.value == 31486) |
        (input.value == 31829) |
        (input.value == 31638) |
        (input.value == 31453) |
        (input.value == 31630) |
        (input.value == 31800) |
        (input.value == 31799) |
        (input.value == 31690) |
        (input.value == 31191) |
        (input.value == 31409) |
        (input.value == 31892) |
        (input.value == 31830) |
        (input.value == 31798) |
        (input.value == 31487) |
        (input.value == 31482) |
        (input.value == 31438) |
        (input.value == 31440) |
        (input.value == 31660) |
        (input.value == 31471) |
        (input.value == 31450) |
        (input.value == 31470) |
        (input.value == 31680) |
        (input.value == 31867) |
        (input.value == 31799) |
        (input.value == 31809) |
        (input.value == 31172) |
        (input.value == 31670) |
        (input.value == 31671) |
        (input.value == 31867) |
        (input.value == 31799) |
        (input.value == 31460) |
        (input.value == 31133) |
        (input.value == 31281) |
        (input.value == 31494) |
        (input.value == 31260) |
        (input.value == 31177) |
        (input.value == 31580) |
        (input.value == 31160) |
        (input.value == 31451) |
        (input.value == 31439) |
        (input.value == 31001) |
        (input.value == 31415) |
        (input.value == 31451) |
        (input.value == 31397) |
        (input.value == 31154) |
        (input.value == 31840) |
        (input.value == 31797) |
        (input.value == 31422) |
        (input.value == 31810) |
        (input.value == 31448) |
        (input.value == 31420) |
        (input.value == 31416) |
        (input.value == 31418) |
        (input.value == 31413) |
        (input.value == 31610) |
        (input.value == 31174) |
        (input.value == 31180) |
        (input.value == 31850) |
        (input.value == 31439) |
        (input.value == 31193) |
        (input.value == 31869) |
        (input.value == 31013) |
        (input.value == 31171) |
        (input.value == 31190) |
        (input.value == 31620) |
        (input.value == 31639) |
        (input.value == 31638) |
        (input.value == 31194) |
        (input.value == 31473) |
        (input.value == 31869) |
        (input.value == 31868) |
        (input.value == 31411) |
        (input.value == 31193) |
        (input.value == 31483) |
        (input.value == 31439) |
        (input.value == 31669) |
        (input.value == 31451) |
        (input.value == 31110) |
        (input.value == 31799) |
        (input.value == 31892) |
        (input.value == 31170) |
        (input.value == 31172) |
        (input.value == 31194) |
        (input.value == 31484) |
        (input.value == 31485) |
        (input.value == 31481) |
        (input.value == 31454) |
        (input.value == 31119) |
        (input.value == 31173) |
        (input.value == 31176) |
        (input.value == 31514) |
        (input.value == 31230) |
        (input.value == 31330) |
        (input.value == 31242) |
        (input.value == 31292) |
        (input.value == 31809) |
        (input.value == 31284) |
        (input.value == 31292) |
        (input.value == 31621) |
        (input.value == 31281) |
        (input.value == 31240) |
        (input.value == 31381) |
        (input.value == 31311) |
        (input.value == 31312) |
        (input.value == 31492) |
        (input.value == 31176) |
        (input.value == 31291) |
        (input.value == 31243) |
        (input.value == 31395) |
        (input.value == 31282) |
        (input.value == 31253) |
        (input.value == 31383) |
        (input.value == 31396) |
        (input.value == 31177) |
        (input.value == 31132) |
        (input.value == 31291) |
        (input.value == 31391) |
        (input.value == 31179) |
        (input.value == 31290) |
        (input.value == 31292)
    ) {
        mapa.src = "img/mendialdea.png";
        $(".boton").hide();
        $("#comarca").hide();
        $("#boton-nafarroa").show();
    }
    //__________________________________//

    //ALERT CÓDIGO INCORRECTO//
    else {
        if (euskera == false) {
            swal({
                title: "¡Ups!",
                text: "No hemos esencontrado ese código postal.",
                button: "Volver a probar",
                icon: "warning",
            });
        } else {
            swal({
                title: "¡Ups!",
                text: "Ez dugu posta kode hori aurkitu",
                button: "Berriro saiatu",
                icon: "warning",
            });
        }
    }
}

//INPUT TECLA ENTER//
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("boton").click();
    }
});

//OCULTAR HEADER//

/* ---HEADER ---*/

var lastScrollTop = 0;

window.addEventListener(
    "scroll",
    function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            $("header").css("top", "-100%");
        } else {
            $("header").css("top", "0");
        }
        lastScrollTop = st;
    },
    false
);

function slider() {
    new Splide(".splide", {
        type: "slide",
        rewind: true,
        height: "auto",
        trimSpace: false,
        autoWidth: true,
    }).mount();
}