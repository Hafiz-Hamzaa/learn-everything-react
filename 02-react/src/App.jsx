import Card from "./components/Card";
function App() {
  const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Laiba Ahmed",
      title: "Frontend Developer",
      desc: "Passionate about UI/UX, React, and modern JavaScript.",
      rating: 4.9,
      location: "Karachi, Pakistan",
      btnLabel: "View Profile",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      name: "Ali Raza",
      title: "Full Stack MERN Developer",
      desc: "Experienced in building scalable and fast web apps.",
      rating: 4.8,
      location: "Lahore, Pakistan",
      btnLabel: "Hire Now",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Ahmed",
      title: "UI/UX Designer",
      desc: "I design beautiful and minimal interfaces for modern apps.",
      rating: 5.0,
      location: "Islamabad, Pakistan",
      btnLabel: "Contact",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      name: "Bilal Qureshi",
      title: "Backend Engineer",
      desc: "Node.js, APIs, databases and scalable server systems.",
      rating: 4.7,
      location: "Rawalpindi, Pakistan",
      btnLabel: "Message",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "Hina Noor",
      title: "React Native Developer",
      desc: "Building fast and modern apps for Android & iOS.",
      rating: 4.9,
      location: "Faisalabad, Pakistan",
      btnLabel: "View Work",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      name: "Usman Tariq",
      title: "JavaScript Developer",
      desc: "Specialized in ES6+, SPA, and performance optimization.",
      rating: 4.8,
      location: "Multan, Pakistan",
      btnLabel: "See Details",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Ayesha Khan",
      title: "UI/UX Designer",
      desc: "Crafting clean, user-friendly and modern interface designs.",
      rating: 4.8,
      location: "Islamabad, Pakistan",
      btnLabel: "View Work",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Hassan Raza",
      title: "Full Stack Developer",
      desc: "Expert in MERN stack with real-world project experience.",
      rating: 5.0,
      location: "Lahore, Pakistan",
      btnLabel: "View Work",
    },
  ];

  return (
    <>
      <div className="cardsContainer">
        {users.map((user,key) => {
          return (
            <Card key={key}
              image={user.img}
              name={user.name}
              title={user.title}
              desc={user.title}
              rating={user.rating}
              location={user.location}
              lable={user.btnLabel}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
