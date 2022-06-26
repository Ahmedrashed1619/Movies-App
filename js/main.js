
// loading to init...........

$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('body').css('overflow','visible')
    })
})

// Ready..

$(document).ready(()=>{
    $('aside').css('left' , -navWidth);
    $('.list .anchors li').css({'position' : 'relative' , 'top' : '100%'});
    $('.list .anchors li a').first().addClass('active');
    getMovies('now_playing');
    $('#submit').attr('disabled' , 'disabled');
    $('.alert').css('display' , 'none');
})


// when scroll event...

$(window).scroll(function(){

    let filmOffset = $('#film').offset().top;

    if($(window).scrollTop() > filmOffset)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})


$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 250);
})


// change active link when click on it 

$('.list .anchors li a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
})


// when click event on toggle icon 

let navWidth = $('.col-9').outerWidth();

$('#toggle').click(()=>{
    $('#toggle').toggleClass('convert');
    if($('aside').css('left') == '0px')
    {
        $('aside').css({'left' : -navWidth , 'transition' : '0.75s'});
        $('.list .anchors li').css({'top' : '100%' , 'transition' : '1.25s'});
    }
    else
    {
        $('aside').css({'left' : '0px' , 'transition' : '0.75s'});
        $('.list .anchors li').css({'top' : '0px' , 'transition' : '1.25s'});
    }
})


// click events to view results..

$('.anchors .anchor').click(function(){
    let currentLink = ($(this).html()).toLowerCase();
    if(currentLink == 'now playing'){
        getMovies('now_playing');
    }
    if(currentLink == 'top rated'){
        getMovies('top_rated');
    }
    else{
        currentLink = ($(this).html()).toLowerCase();
        getMovies(currentLink);
    }
})

$('.anchors .trending').click(function(){
    getTrendingMovies();
})


// get movie by name..

$('#searchName').on('input' , function(){
    currentName = ($('#searchName').val()).toLowerCase();
    if(currentName != '' || currentName == null){
        searchNameMovies(currentName);
    }
    else{
        getMovies('now_playing');
    }
})

async function searchNameMovies(index){
    try {
        url =  await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${index}`)).json();
        movies = await url.results;
        displayMovies();
    }
    catch (error) {
        onerror = true;
    }
}


// get all movies except trending movies..

let url;
let movies = [];
let row;
let currentName;

async function getMovies(index){
    try {
        url =  await (await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)).json();
        movies = await url.results;
        displayMovies();
    }
    catch (error) {
        onerror = true;
    }
}

// get trending movies..

async function getTrendingMovies(){
    try {
        url =  await (await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)).json();
        movies = await url.results;
        displayMovies();
    }
    catch (error) {
        onerror = true;
    }
}

// view all movies..

function displayMovies(){
    row = ``;
    for(let i = 0; i < movies.length; i++){
        row += 
        `
        <div class="col-md-6 col-lg-4">
            <div class="movie text-center">
                <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="w-100" alt="">
                <div class="movTitle w-100 mx-auto d-flex justify-content-center align-items-center flex-column p-2">
                    <h2 class="mb-3">${movies[i].title}</h2>
                    <p class="mb-3">${movies[i].overview}</p>
                    <h5>Rate..</h5>
                    <h6 class="active nb-3">${movies[i].vote_average}</h6>
                    <h5>First Show..</h5>
                    <h6 class="active">${movies[i].release_date}</h6>
                </div>
            </div>
        </div>
        `
    }
    $('#film').html(row);
}

// search in that list by title

$('#searchAtList').on('input' , function(){
    currentName = ($('#searchAtList').val()).toLowerCase();
    row = ``;
    for(let i = 0; i< movies.length; i++){
        if(movies[i].title.toLowerCase().includes(currentName))
        {
            row += 
            `
            <div class="col-md-6 col-lg-4">
                <div class="movie text-center">
                    <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="w-100" alt="">
                    <div class="movTitle w-100 mx-auto d-flex justify-content-center align-items-center flex-column p-2">
                        <h2 class="mb-3">${movies[i].title}</h2>
                        <p class="mb-3">${movies[i].overview}</p>
                        <h5>Rate..</h5>
                        <h6 class="active nb-3">${movies[i].vote_average}</h6>
                        <h5>First Show..</h5>
                        <h6 class="active">${movies[i].release_date}</h6>
                    </div>
                </div>
            </div>
            `
        }
        $('#film').html(row);
    }
})


// module from (validation.js)

import * as item from './validation.js';


// check form submit


// for remove disabled attr from on submit button

let inputs = Array.from($('#contact .form-control'));

function checked(){
    for(let i = 0; i < inputs.length; i++){
        if( item.checkName
            && item.checkEmail
            && item.checkPhone
            && item.checkAge
            && item.checkPass
            && item.checkRepass)
        {
            item.validReg();
        }
        else
        {
            item.notValid();
        }
    }
}


// when user want to send a message...

    $('#userName').on('input' , function(){
        item.validUserName();
        checked();
    })

    $('#userEmail').on('input' , function(){
        item.validUserEmail();
        checked();
    })

    $('#userPhone').on('input' , function(){
        item.validUserPhone();
        checked();
    })

    $('#userAge').on('input' , function(){
        item.validUserAge();
        checked();
    })

    $('#userPass').on('input' , function(){
        item.validUserPass();
        checked();
    })

    $('#userRepass').on('input' , function(){
        item.validUserRepass();
        checked();
    })


// when user want to reset message form..

$('#reset').click(function(){
    resetForm();
})

//... reset Messages form...

function resetForm(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
        $('#alertName').css('display' , 'none');
        $('#alertEmail').css('display' , 'none');
        $('#alertPhone').css('display' , 'none');
        $('#alertAge').css('display' , 'none');
        $('#alertPass').css('display' , 'none');
        $('#alertRepass').css('display' , 'none');
    }
}

// when click on submit button after reg validation

$('#submit').click(function(){
        $('#alertSend').html('The message was sent Successfully');
        $('#alertSend').css({'display':'block' , 'color':'green'});
        resetForm();
        setTimeout(() => {
            $('#submit').attr('disabled' , 'disabled');
            location.reload();
        }, 500);
})
