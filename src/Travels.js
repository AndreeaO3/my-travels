import React from 'react';


const travels = [
  { destination: "Barcelona",
   country: "Spain",
   distance: "2.757,3 km",
   photo: "http://iaufrance.org/Content/Uploads/CMS/Images/barcelona-spain.jpg"},
   
  { destination: "Tel Aviv",
   country: "Israel",
   distance: "2.461,3 km",
   photo: "https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/017/Tel_Aviv_Adobe.jpg"},
   
   {destination: "Ubud",
   country: "Bali",
   distance: "10602.4 km",
   photo: "https://somethingoffreedom.com/wp-content/uploads/2018/06/Pura-Taman-Saraswati-temple-Ubud-guide.jpg"},
   
  {destination: "Rome",
   country: "Italy",
   distance: "1137 km",
   photo: "https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200"},
   
   {destination: "San Francisco",
   country: "USA",
   distance: "10344.86",
   photo: "https://cdn.wonderfulengineering.com/wp-content/uploads/2015/05/San-Francisco-Wallpaper-26.jpg"}
]
   const Travels = () => (
    <div>
      {travels.map(quote => (
        <div className="container">
        <img className='photo' src= {quote.photo}/>
        <blockquote> {quote.destination} </blockquote>
        <cite> {quote.country} </cite>
        <blockquote> {quote.distance} </blockquote>
        </div>
        
        
        ))}
    </div>
  );
 export default Travels