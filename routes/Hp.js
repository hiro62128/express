/*<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/bluu" type="text/css"/>
    <style type="text/css">
        body { font-size: 1em; background: #221E4E; padding: 2em; font-family: 'BluuNextBoldItalic', serif;}
        .card { border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,.15); -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.15); -moz-box-shadow: 0 4px 10px rgba(0,0,0,.15); background-color: #F1E6BA;}
        .card-topper { border-top-right-radius: 8px; border-top-left-radius: 8px; padding: 8px 16px; font-size: 2em; font-weight: 600; text-align: center; background-color: #312823; color: #ffffff;}
        .pic { max-width: 270px; max-height: 200px; padding-bottom: 1em; width: auto; height: auto;}
        .titles {font-family: serif;}
        #test { border: 2px solid black;}
        #test td { border: 1px solid black;}
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            {{#each response}}
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-5">
                <div class="card">
                    <div class="card-topper card-img-top">{{name}}</div>
                    <div class="card-body">
                        <img class="rounded mx-auto d-block pic" src="{{image}}">
                        <div class="table-responsive">
                        <table id="test" class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <td class="titles">Alternate Names</td>
                                    <td class="text-center" id ="alt_names">{{alternate_names}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Species</td>
                                    <td class="text-center">{{species}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Gender</td>

                                    <td class="gender text-center">{{gender}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">House</td>
                                    <td class="house text-center">{{house}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Date of Birth</td>
                                    <td class="text-center">{{dateOfBirth}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Year of Birth</td>
                                    <td class="text-center">{{yearOfBirth}}</td>
                                </tr>
                                {{#if wizard}}
                                <tr>
                                    <td class="titles">Wizard</td>
                                    <td class="text-center">{{wizard}}</td>
                                </tr>
                                {{/if}}
                                <tr>
                                    <td class="titles">Ancestry</td>
                                    <td class="text-center">{{ancestry}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Eye colour</td>
                                    <td class="eyeColor text-center">{{eyeColour}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Hair colour</td>
                                    <td class="hairColor text-center">{{hairColour}}</td>
                                </tr>
                                {{#with wand}}
                                    <tr>
                                        <td class="titles" style="padding-top: 2em; padding-bottom: 2em;">Wand</td>
                                        <td class="text-center">
                                            {{#if wood}}{{wood}}
                                            {{else}}(unknown wood){{/if}}
                                            <br>
                                            {{#if core}}{{core}}
                                            {{else}}(unknown core){{/if}}
                                            <br>
                                            {{#if length}}{{length}} inches
                                            {{else}}(unknown length){{/if}}
                                        </td>
                                    </tr>
                                {{/with}}

                                <tr>
                                    <td class="titles">Patronus</td>
                                    <td class="text-center">{{patronus}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Hogwarts Student</td>
                                    <td class="isStudent text-center">{{hogwartsStudent}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Hogwarts Staff</td>
                                    <td class="isStaff text-center">{{hogwartsStaff}}</td>
                                </tr>
                                <tr>
                                    <td class="titles">Actor</td>
                                    <td class="text-center">{{actor}}</td>
                                </tr>
                                {{#if alternate_actors}}
                                <tr>
                                    <td class="titles">Alternate Actors</td>
                                    <td class="text-center">{{alternate_actors}}</td>
                                </tr>
                                {{/if}}
                                <tr>
                                    <td class="titles">Alive</td>
                                    <td class="isAlive text-center">{{alive}}</td>
                                </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
<script>
var genders = document.getElementsByClassName("gender");
for(var i = 0; i < genders.length; i++)
{
    if (genders[i].innerHTML === 'male')
    {
        
        genders[i].innerHTML = '&#x2642';
        genders[i].style.color = '#0000ff';
        genders[i].style.fontSize = '1.2em';

    }
    else
    {
        genders[i].innerHTML = '&#9792';
        genders[i].style.color = '#ff3399';
        genders[i].style.fontSize = '1.2em';
    }
}
var houses = document.getElementsByClassName("house");
for(var i = 0; i < houses.length; i++)
{
    if (houses[i].innerHTML == "Gryffindor")
    {
        houses[i].style.backgroundColor = '#7F0909';
        houses[i].style.color = '#FFC500';
    }
    else if (houses[i].innerHTML == "Ravenclaw")
    {
        houses[i].style.backgroundColor = '#946B2D';
        houses[i].style.color = '#000A90';
    }
    else if (houses[i].innerHTML == "Hufflepuff")
    {
        houses[i].style.backgroundColor = '#000000';
        houses[i].style.color = '#EEE117';
    }
    else if (houses[i].innerHTML == "Slytherin")
    {
        houses[i].style.backgroundColor = '#AAAAAA';
        houses[i].style.color = '#0D6217';
    }
}
var eyes = document.getElementsByClassName("eyeColor");
for(var i = 0; i < eyes.length; i++)
{
    if (eyes[i].innerHTML == "green")
    {
        eyes[i].style.color = 'green';
    }
    else if (eyes[i].innerHTML == "brown")
    {
        eyes[i].style.color = 'brown';
    }
    else if (eyes[i].innerHTML == "blue")
    {
        eyes[i].style.color = 'blue';
    }
    else if (eyes[i].innerHTML == "grey")
    {
        eyes[i].style.color = 'grey';
    }
    else if (eyes[i].innerHTML == "red")
    {
        eyes[i].style.color = 'red';
    }
    else if (eyes[i].innerHTML == "yellow")
    {
        eyes[i].style.color = '#b3b300';
    }
    else
    {
        eyes[i].style.color = 'black';
    }
}
var hair = document.getElementsByClassName("hairColor");
for(var i = 0; i < hair.length; i++)
{
    if (hair[i].innerHTML == "green")
    {
        hair[i].style.color = 'green';
    }
    else if (hair[i].innerHTML == "brown")
    {
        hair[i].style.color = 'brown';
    }
    else if (hair[i].innerHTML == "blue")
    {
        hair[i].style.color = 'blue';
    }
    else if (hair[i].innerHTML == "grey")
    {
        hair[i].style.color = 'grey';
    }
    else if (hair[i].innerHTML == "red")
    {
        hair[i].style.color = '#e68a00';
    }
    else if (hair[i].innerHTML == "blonde")
    {
        hair[i].style.color = '#b3b300';
    }
    else
    {
        hair[i].style.color = 'black';
    }
}
var students = document.getElementsByClassName("isStudent");
for(var i = 0; i < students.length; i++)
{
    if (students[i].innerHTML === 'true')
    {
        students[i].innerHTML = '&#10004';
        students[i].style.color = 'green';
    }
    else
    {
        students[i].innerHTML = '&#10006';
        students[i].style.color = 'red';
    }
}
var staff = document.getElementsByClassName("isStaff");
for(var i = 0; i < staff.length; i++)
{
    if (staff[i].innerHTML === 'true')
    {
        staff[i].innerHTML = '&#10004';
        staff[i].style.color = 'green';
    }
    else
    {
        staff[i].innerHTML = '&#10006';
        staff[i].style.color = 'red';
    }
}
var alive = document.getElementsByClassName("isAlive");
for(var i = 0; i < alive.length; i++)
{
    if (alive[i].innerHTML === 'true')
    {
        alive[i].innerHTML = '&#10004';
        alive[i].style.color = 'green';
    }
    else
    {
        alive[i].innerHTML = '&#10006';
        alive[i].style.color = 'red';
    }
}
</script>
</body>
</html>
*/

//pm.visualizer.set(template, {
//    response: pm.response.json()
//});


var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/',async(req,res)=>{
    request("https://hp-api.onrender.com/api/characters",function(error,response,body){
        if(!error && response.statusCode == 200){
            const dates= JSON.parse(body);
                res.render('Hp', {dates:dates[0].length,name:dates[0].name,image:dates[0].image.toString(),alternate_names:dates[0].alternate_names,species:dates[0].species,
                    gender:dates[0].gender,house:dates[0].house,dateOfBirth:dates[0].dateOfBirth,yearOfBirth:dates[0].yearOfBirth,wizard:dates[0].wizard,
                    ancestry:dates[0].ancestry,eyeColour:dates[0].eyeColour,hairColour:dates[0].hairColour,wood:dates[0].wand.wood,core:dates[0].wand.core,
                    length:dates[0].wand.length,patronus:dates[0].patronus,hogwartsStudent:dates[0].hogwartsStudent,hogwartsStaff:dates[0].hogwartsStaff,actor:dates[0].actor,
                    alternate_actors:dates[0].alternate_actors,alive:dates[0].alive
                });
            }
        });    
});

module.exports = router;