$(document).ready(function(){

    $('#buscar_ciudad').click(function(){
        $('#my_form').submit();
    });

    $('form').submit(function() {
        var ciudad = $('#ciudad_buscada').val();
        if (ciudad.trim().length > 0)
        {
            var units = 'metric';
            var appid ='apikey';
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&language=es&&units=${units}&appid=${appid}`;
                    
            $.get(url, function(data) {
                var html = `<h4 id="ciudad" class="fw-bold text-capitalize">${data.name}: ${data.weather[0].description}</h4>
                            <h4 id="temperatura">Temperatura: ${data.main.temp}°C</h4>
                            <h4 id="coordenadas">Coordenadas: ${data.coord.lon},${data.coord.lat}</h4>`;
                $('.card-body').removeClass('alert alert-danger').html(html);
            },'json').fail(function(){
                $('.card-body').addClass('alert alert-danger').html("No se encuentra la ciudad buscada");
            });
            // don't forget to return false so the page doesn't refresh
            return false;
        }
        else
        {
            alert("Debes ingresar una ciudad para buscar...");
        }
    });

});
 
