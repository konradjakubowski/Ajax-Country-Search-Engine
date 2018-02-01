$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries-add');
    
	$('#search').click(searchCountries);
	function searchCountries() {
		var countryName = $('#country-name').val();
		if (!countryName.length) countryName = 'Poland'; 
        
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}
    
	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
            var twoLetters = item.alpha2Code.toLowerCase();
            var tableRow = $('<tr>');
            
			$('<td>').text(item.name).appendTo(tableRow);
            $('<td>').text(item.capital).appendTo(tableRow);
            $('<td>').html( '<img src="http://www.countryflags.io/' + twoLetters + '/flat/64.png">').appendTo(tableRow);
            $('<td>').text(item.population + ' people').appendTo(tableRow);
            tableRow.appendTo(countriesList); 
		});
	}
});
  