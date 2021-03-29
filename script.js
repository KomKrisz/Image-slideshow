let imagesData = [

  {
    photo: '1.jpg',
    title: 'Zafir',
    description: 'Hi, my name is Zafir. I am half Siamese and half Oriental shorthair cat. Give me a high-paw! '
  },
  {
    photo: '2.jpg',
    title: 'Zafir',
    description: 'I think I was a bit extraordinary kitten'
  },
  {
    photo: '3.jpg',
    title: 'Zafir',
    description: 'Nothing is better than having a nap in the bed'
  },
  {
    photo: '4.jpg',
    title: 'Zafir',
    description: 'Enjoying the sun'
  },
  {
    photo: '5.jpg',
    title: 'Zafir',
    description: 'Mummy always says I am a little bit special lol'
  },
  {
    photo: '6.jpg',
    title: 'Zafir',
    description: 'We are inseparable'
  },
  {
    photo: '7.jpg',
    title: 'Zafir',
    description: 'Unconditional love'
  },
];

let currentPhoto = 0;



let loadImage = (ind) => {
  $('#photo').attr('src', imagesData[ind].photo);
  $('#photo-title').text(imagesData[ind].title);
  $('#photo-description').text(imagesData[ind].description);
}

loadImage(currentPhoto);


$('#ra').click(() => {
  if (currentPhoto < imagesData.length-1){
       currentPhoto++;

   loadImage(currentPhoto);
}});

$('#la').click(() => {
  if (currentPhoto > 0){
      currentPhoto--;

    loadImage(currentPhoto);   
}});

$('.small').on('click',  function() {
  $('#photo').prop('src', this.src);
});
