let gallery = ["https://cdn.britannica.com/51/93451-050-4C57C2D5/Shrek-sidekick-Donkey.jpg",
              "https://media.timeout.com/images/62555/630/472/image.jpg",
               "https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo="
              ];

let quotes =["Not a rick roll",
            "Not a rick roll",
            "get rick rolled"]

function addThings(){
  let b = 0;
  
  for(let a of gallery){
    $(".gallery").append("<div><a target='_blank' href ='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src="+a+"></a></div>")
    $(".gallery").append("<div>"+quotes[b]+"</div>")
    b = b + 1;
  }
}

addThings();

$(".add").click(function(){
    
  let i = $(".picture-url").val();
  let q = $(".quote").val();
  
  $(".gallery").empty();
  gallery.push(i);
  quotes.push(q);
  addThings();
  
});

