//Fixed banner shadow
$(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
        $('#banner').css({'box-shadow':'none'});
    } else {
        $('#banner').css({'box-shadow':'0px 5px 10px #888'});
    }
});

//Variables for Appended Materials
var $overlay = $('<div id="overlay"></div>');
var $escape = $('<div id="escape">x</div>');
var $flex = $('<div id="flex"></div>');
var $prev = $('<div id="prev">&lsaquo;</div>');
var $info = $('<div id="info"></div>');
var $screenShot = $('<img alt="">');
var $caption = $('<p></p>');
var $link = $('<a></a>');
var $next = $('<div id="next">&rsaquo;</div>');

//Variables for Lightbox Content
var currentIndex;
var overlayVisibility = false;

//Append Materials
$overlay.append($escape);
$overlay.append($flex);

$info.append($screenShot);
$info.append($caption);
$info.append($link);

$flex.append($prev);
$flex.append($info);
$flex.append($next);

$('body').append($overlay);

//Project details
var page = "Visit Page";
var repo = "Visit Repository";

var projectArray = [
    {
        project: 'videoPlayer',
        screenShot: 'img/videoPlayerP.jpg',
        caption: 'A video player with custom skin and navigable transcript',
        link: 'http://jhuppi.github.io/InteractiveVideoPlayer/',
        linkText: page
    },
    {
        project: 'apiGallery',
        screenShot: 'img/apiGalleryP.jpg',
        caption: 'A gallery of horror movies created with the Open Movie Database API',
        link: 'http://jhuppi.github.io/APIGallery/',
        linkText: page   
    },
    {
        project: 'dashBoard',
        screenShot: 'img/dashBoardP.jpg',
        caption: 'A mockup of a web app dashboard with charts created with Chart.js',
        link: 'https://github.com/JHuppi/WebAppDashboard',
        linkText: repo
    },
    {
        project: 'photoGallery',
        screenShot: 'img/photoGalleryP.jpg',
        caption: 'A gallery of photos with a key navigation lightbox and searchable by tags',
        link: 'https://github.com/JHuppi/InteractivePhotoGallery',
        linkText: repo   
    },
    {
        project: 'optimizationFix',
        screenShot: 'img/optimizationFixP.jpg',
        caption: 'A refactor of a photo gallery with the goal of decreasing load time',
        link: 'https://github.com/JHuppi/PerformanceOptimization',
        linkText: repo 
    },
    {
        project: 'accessibilityFix',
        screenShot: 'img/accessibilityFixP.jpg',
        caption: 'A refactor of a website with the goal of improving accessibility for individuals with visual and motor impairments',
        link: 'https://github.com/JHuppi/AccessibilityRefactor',
        linkText: repo   
    }
];

//Display Lightbox for Individual Projects
(function($) { 
$.fn.display = function(index) {
    $screenShot.attr('src',projectArray[index].screenShot);
    $caption.text(projectArray[index].caption);
    $link.attr('href', projectArray[index].link);
    $link.text(projectArray[index].linkText);
    $overlay.show();
    overlayVisibility = true;
};
}(jQuery));

$('.project').click(function() {
    currentIndex = $('.project').index(this);
    $(this).display(currentIndex);
});

(function($) { 
$.fn.prevProject = function(index) {
    currentIndex -= 1;
    $(this).display(currentIndex);
};
}(jQuery));

$('#prev').click(function() {
    if (currentIndex > 0) {
        $('.project').prevProject(currentIndex);
    }
});

(function($) { 
$.fn.nextProject = function(index) {
    currentIndex += 1;
    $(this).display(currentIndex);
};
}(jQuery));

$('#next').click(function() {
    if (currentIndex < (projectArray.length-1)) {
        $('.project').nextProject(currentIndex); 
    }
});

$('#escape').click(function() {
    overlayVisibility = false;
    $('#overlay').hide();
});