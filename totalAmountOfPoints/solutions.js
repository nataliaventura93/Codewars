function points(games) {
    var puntostotales = 0;

    for (var i = 0; i < games.length; i++) {
        var partido = games[i];

        var golesx = Number(partido.charAt(0));
        var golesy = Number(partido.slice(-1));

        if (golesx === golesy) {
            puntostotales++;
        } else if (golesx > golesy) {
            puntostotales = puntostotales + 3;
        }
    }
    return puntostotales;
}
