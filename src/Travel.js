import React from "react";
  const travels = [
    {
      country: "Bengladesh",
      destination: "Random temple",
      photo: "https://media-cdn.tripadvisor.com/media/photo-s/06/e3/5e/5c/dhakeshwari-temple.jpg",
      distance: "1000km"
    },
    {
      destination:"Wonders beach",
      country:"Dreamland",
      photo:"https://i.ytimg.com/vi/3gkk0hsxAqo/maxresdefault.jpg",
      distance:"Not far enough"
    },
    {
      destination:"Crusty ridge",
      country:"Candy Mountain",
      photo:'https://world.wng.org/sites/default/files/styles/article_hero/public/migrated_images/slabcity_1.jpg?itok=dcy9y-EQ',
      distance:"Far enough from you "
    },
    {
      destination:"Tranquility Sea",
      country:"Moon ?",
      photo:'https://media-cdn.tripadvisor.com/media/photo-s/01/5d/e2/91/moon-landscape.jpg',
      distance:"Really really far away "
    },
    {
      destination:"Kowloon",
      country:"Hong-Kong",
      photo:'http://www.fredzone.org/wp-content/uploads/2016/05/knowloon-640x463.jpg',
      distance: "8000km"
    }
  ];

const Travel = (Travel) => {
  return (
    <figure>
      <img src={Travel.photo} alt={Travel.destination} />
      <figcaption>
        <h2>{Travel.country}</h2>
        <blockquote>{Travel.destination}</blockquote>
        <cite>{Travel.distance}</cite>
      </figcaption>
    </figure>
    )
}

const Travels = () => {
  const TravelList = travels.map((travel) =>
    <Travel key={travel.destination}
      {...travel} />
  )
  return (
    <div>
      {TravelList}
    </div>
  )
}

export default Travels;