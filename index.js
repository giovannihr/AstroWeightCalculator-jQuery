$(document).ready(function() {

    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];


    var sortedPlanets = planets.sort(function(a, b) {

        return a[1] - b[1];
    });



    $.each(sortedPlanets, function(index, value) {

        $('#tableBody').append(`<tr><td>${value[0]} </td> <td>${value[1]} </td></tr>`);



    });

    //----------------------------------













    $.each(planets.reverse(), function(index, value) {


        /* 
         var message = "<option value=' ";
         message += miniArray[1];
         message += " '> ";
         message += miniArray[0];
         message += "</option>";
         $('select').append(message);
         */

        // $('select').append(`<option value = '${value[1]}'> ${ value[0] } </option>`)




        $('select').append('<option value="' + value[1] + '">' + value[0] + '</option>');


        //console.log(index + ":" + value[0])


        //------------------------------------------------
        //------------------------------------------------
        //----     Extra credit  Table code
        //------------------------------------------------


        //$('#table-id').append();






        //------------------------------------------------
        //------------------------------------------------


    });








    $('button').on('click', function() {

        var inputValue = $('#inputElement').val();
        var selectOptionValue = $('#selectElement option:selected').val();

        var newGravityWeight = inputValue * selectOptionValue;


        var resultsMessage = "Your weight in space would be " + newGravityWeight;

        $('#resultsParagraph').text(resultsMessage);
        console.log(newGravityWeight);

    })

    //-------------------
    //-------------------
    //End of document ready function
});
