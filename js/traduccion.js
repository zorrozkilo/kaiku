var euskera = false;

function botonEus() {
    $(".baserris-km0").text("KM0 BASERRIAK");
    $(".juega-y-gana").text("JOKATU ETA IRABASI");
    $(".la-leche").text("GURE BASERRIETAKO ESNEA");
    $(".recogemos").html(
        "Esnea egunero biltzen dugu gure baserrietan, eta kilometro gutxitan ibiltzen da ontziratze-plantaraino, non bere propietate eta zapore guztiekin iristen baita. <span> Ikusi non dagoen zure baserri hurbilena, eta jokatu eta irabazi gure tribialearekin.</span>"
    );
    $(".cta-1").text("Ikusi hurbilen daukazun baserria");
    $(".cta-2").text("Tribiala jokatu");
    $(".nuestros").text("GURE BASERRIAK ZUGANDIK OSO GERTU DAUDE");

    $(".de-proximidad").text(
        "Esnea egunero biltzen dugu gure baserrietan, eta kilometro gutxitan ibiltzen da ontziratze-plantaraino, non bere propietate eta zapore guztiekin iristen baita."
    );
    $(".introduce").attr("placeholder", "Sartu hemen zure posta kodea"),
        $(".boton-formulario").text("Ezagutu");
    $(".boton-atras").text("Ezagutu");
    $("#boton-bizkaia").text("Bizkaiko mapa ikusi");
    $("#boton-gipuzkoa").text("Gipuzkoako mapa ikusi");
    $("#boton-araba").text("Arabako mapa ikusi");
    $("#boton-nafarroa").text("Nafarroako mapa ikusi");
    $(".juega").text("URTEBETEKO ESNEA DOAN IRABAZI");
    $(".participa").text(
        "Hartu parte gure tribialean eta irabazi urtebeteko esnea doan."
    );
    $(".lecheSostenible").text("EKOIZPEN JASANGARRIKO ESNEA");
    $(".compromiso").text("Horixe da gure konpromisoa");
    $(".bienestar").text("1. Animalien ongizatea");
    $(".cuidamos").text(
        "Mimo handiz zaintzen ditugu gure behiak, eta arduratu egiten gara haien ongizateaz."
    );
    $(".cercania").text("2. Gertutasuna");
    $(".diario").text(
        "Egunero biltzen dugu esnea, eta 8 ordu baino lehenago iristen da ontziratzeko plantara."
    );
    $(".entorno").text("3. Gure ingurua zaintzen dugu");
    $(".gracias").text(
        "Egiten dugun lanari esker, ezagutzen ditugun bezala eusten diegu gure bazterrei."
    );
    $(".trato").text("4. Tratu berdinzalea");
    $(".ademas").text(
        "Gainera, Kaiku kooperatiban abeltzain guztiek dute balio berbera, handiek zein txikiek."
    );
    $(".copyright").text(
        "©2021. Kaiku elikadura Korporazioa. Erreserbatutako eskubide guztiak"
    );
    $(".politicaPrivacidad").html('<a class="legal" key="legal" href="https://kaikukm0.eus/eu/lege-oharra" target="_blank">Lege oharra</a><a class="privacidad" key="privacidad" href="https://kaikukm0.eus/eu/pribatutasun-politika" target="_blank">Pribatasun politika</a><a class="cookies" key="cookies" href="https://kaikukm0.eus/eu/cookie-politika" target="_blank">Cookie politika</a>');

    $(".texto-urolakosta").text(
        "Urola Kostan 51 ustiategi baino gehiago daude, non 105 familia baino gehiagok lan egiten dute. Biltzen dugun esneak ordu erdi baino gutxiago egiten du ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
    );
    $(".texto-tolosaldea").text(
        "Tolosaldean 34 ustiategi baino gehiago daude , non 60 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 20 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
    );
    $(".texto-debabarrena").text(
        "Debabarrenan 7 ustiategi baino gehiago daude , non 20 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 60 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
    );
    $(".texto-goierri").text(
        "Goierrin 10 ustiategi baino gehiago daude , non 15 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 40 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
    );

    $("#es").removeClass("bold");
    $("#es").addClass("light");
    $("#eu").removeClass("light");
    $("#eu").addClass("bold");
    euskera = true;
}

function botonEs() {
    $(".baserris-km0").text("BASERRIS KM0");
    $(".juega-y-gana").text("JUEGA Y GANA");
    $(".la-leche").text("LA LECHE DE NUESTROS BASERRIS");
    $(".recogemos").html(
        "Recogemos la leche cada día en nuestros baserris y recorre tan pocos KM hasta la planta de envasado que llega con todas sus propiedades y todo su sabor. <span> Descubre donde está tu baserri más cercano y juega y gana con nuestro quizz.</span>"
    );
    $(".cta-1").text("Ver baserri más cercano");
    $(".cta-2").text("Hacer quizz");
    $(".nuestros").text("NUESTROS BASERRIS ESTÁN MUY CERCA DE TI");
    $(".de-proximidad").text(
        "La leche Kaiku Km0 es de proximidad: en tu comarca, se recoge en estos baserris que ves en este mapa y proviene de vacas que se alimentan de nuestros pastos. ¡Descubre tu baserri más cercano!"
    );
    $(".introduce").attr("placeholder", "Introduce aquí tu código postal"),
        $(".boton-formulario").text("Descubre");
    $("#boton-bizkaia").text("Ver mapa de Bizkaia");
    $("#boton-gipuzkoa").text("Ver mapa de Gipuzkoa");
    $("#boton-araba").text("Ver mapa de Araba");
    $("#boton-nafarroa").text("Ver mapa de Nafarroa");
    $(".juega").text("GANA UN AÑO DE LECHE GRATIS");
    $(".participa").text(
        "Participa en nuestro juego y gana un año de leche gratis."
    );
    $(".lecheSostenible").text("LECHE DE PRODUCCIÓN SOSTENIBLE");
    $(".compromiso").text("Este es nuestro compromiso");
    $(".bienestar").text("1. Bienestar animal");
    $(".cuidamos").text(
        "Cuidamos a nuestras vacas con mimo y nos preocupamos por su bienestar."
    );
    $(".cercania").text("2. Cercanía");
    $(".diario").text(
        "Recogemos la leche a diario y en menos de 8h está en la planta de envasado."
    );
    $(".entorno").text("3. Cuidamos nuestro entorno");
    $(".gracias").text(
        "Gracias al trabajo que realizamos conseguimos mantener los paisajes tal y como los conocemos."
    );
    $(".trato").text("4. Trato igualitario");
    $(".ademas").text(
        "Además, en la cooperativa Kaiku todos los ganaderos contamos por igual, grandes y pequeños."
    );
    $(".copyright").text(
        "©Kaiku Corporación Alimentaria. Todos los derechos reservados"
    );
    $(".politicaPrivacidad").html('<a class="legal" key="legal" href="https://kaikukm0.eus/aviso-legal" target="_blank">Aviso legal</a><a class="privacidad" key="privacidad" href="https://kaikukm0.eus/politica-de-privacidad" target="_blank">Política de privacidad</a><a class="cookies" key="cookies" href="https://kaikukm0.eus/cookies" target="_blank">Política de cookies</a>');

    $(".texto-urolakosta").text(
        "En Urola Kosta hay más de 51 ganaderías de la cooperativa Kaiku donde trabajan más de 105 familias. La leche que recogemos, llega en menos de media hora hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor."
    );
    $(".texto-tolosaldea").text(
        "En Tolosaldea hay más de 34 ganaderías de la cooperativa Kaiku donde trabajan más de 60 familias. La leche que recogemos, únicamente recorre alrededor de 20 kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor."
    );
    $(".texto-debabarrena").text(
        "En Debabarrena hay más de 7 ganaderías de la cooperativa Kaiku donde trabajan más de 20 familias. La leche que recogemos, únicamente recorre alrededor de 60 kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor."
    );
    $(".texto-goierri").text(
        "En Goierri hay más de 10 ganaderías de la cooperativa Kaiku donde trabajan más de 15 familias. La leche que recogemos, únicamente recorre alrededor de 40  kilómetros de distancia hasta la planta de envasado. Por eso, debido a la cercanía, conseguimos una leche más fresca, de alta calidad y sabor."
    );

    $("#eu").removeClass("bold");
    $("#eu").addClass("light");
    $("#es").removeClass("light");
    $("#es").addClass("bold");
    euskera = false;
}