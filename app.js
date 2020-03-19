
let url= "https://docs.google.com/spreadsheets/d/1Ox49O2OQueIyS5QUvW0Jp1bW7SDUO1Rge2cf-b_2LfU/edit#gid=0"

let id = '1Ox49O2OQueIyS5QUvW0Jp1bW7SDUO1Rge2cf-b_2LfU'

// let source = `https://spreadsheets.google.com/feeds/list/1Ox49O2OQueIyS5QUvW0Jp1bW7SDUO1Rge2cf-b_2LfU/od6/public/values?alt=json`
let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
  .then( response => response.json() ) 
  .then( data =>  {
      console.log('data', data)

      let projects = data.feed.entry.map( project => {
       
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      app(projects)
  }) 

  let $sectionContainer = $('.projects')

function app(projects) {
   projects.forEach(function(element) {
     let $cardContainer = $('<div>').addClass('card')
     let $imgContainer = $('<div>').addClass('cardBackground')
     let $infoBody = $('<div>').addClass('cardBody')
     $cardContainer.append($imgContainer)
     $cardContainer.append($infoBody)
     let $cardHead = $('<h4>').addClass('card-title')
     let $cardParagraph = $('<p>').addClass('card-text')
     $cardHead.append(element['title'])
     $cardParagraph.append(element['description'])
     $infoBody.append($cardHead)
     $infoBody.append($cardParagraph)
     $imgContainer.css('background-image', 'url("'+ element['image'] +'")')
     let $buttonPrimary = $('<button>').addClass('projectBtn').html('See the app')
     $infoBody.append($buttonPrimary)
    $sectionContainer.append($cardContainer)
    $buttonPrimary.on('click', function() {
        window.open(element['url'])
        return false
    })
   })
};

// Marshal walked me through how to do this then looked at card css together



ScrollReveal().reveal('.scrollAbout',  { delay: 450 });
ScrollReveal().reveal('.scrollProj',  { delay: 450 });
ScrollReveal().reveal('.scrollSkills',  { delay: 450 });
ScrollReveal().reveal('.scrollResume',  { delay: 450 });
ScrollReveal().reveal('.scrollContact',  { delay: 450 }); 