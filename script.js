// npx tailwindcss -i style.css -o output.css --watch

//get the data
var users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1671863367346-8f84adcd341f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTAzOTA2NHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1671863367346-8f84adcd341f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTAzOTA2NHx8ZW58MHx8fHx8",
    pendingMessage: 4,
    location: "Delhi,India",
    name: "Harshita",
    age: 23,
    interests: [
      { icon: `<i class="ri-music-2-fill text-sm"></i>`, interest: "music" },
      { icon: `<i class="ri-quill-pen-fill text-sm"></i>`, interest: "painting" },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, neque non sed cum illo ea!",
    isFriends: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1701083266430-c9b2a5ab1353?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1701083266430-c9b2a5ab1353?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Bhopal,India",
    name: "Shivangi",
    age: 35,
    interests: [
        { icon: `<i class="ri-music-2-fill text-sm"></i>`, interest: "music" },
        { icon: `<i class="ri-quill-pen-fill text-sm"></i>`, interest: "painting" },
      ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, neque non sed cum illo ea!",
    isFriends: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1700642424302-e0ab9407e3c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1700642424302-e0ab9407e3c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Noida,India",
    name: "Neha",
    age: 27,
    interests: [
        { icon: `<i class="ri-music-2-fill text-sm"></i>`, interest: "music" },
        { icon: `<i class="ri-quill-pen-fill text-sm"></i>`, interest: "painting" },
      ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, neque non sed cum illo ea!",
    isFriends: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1696416748833-0407ebea6047?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1696416748833-0407ebea6047?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMDM5MDY0fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Dehradun,India",
    name: "Aditi",
    age: 26,
    interests: [
        { icon: `<i class="ri-music-2-fill text-sm"></i>`, interest: "music" },
        { icon: `<i class="ri-quill-pen-fill text-sm"></i>`, interest: "painting" },
      ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, neque non sed cum illo ea!",
    isFriends: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

var curr = 0;

(function setInitial() {
  select(".main-card img").src = users[curr].displayPic;

  select(".incoming-card img").src = users[curr + 1].displayPic;

  select(".prflimg img").src = users[curr].profilePic;

  select(".badge h5").textContent = users[curr].pendingMessage;

  select(".location h3").textContent = users[curr].location;

  select(".name h1:nth-child(1)").textContent = users[curr].name;
  select(".name h1:nth-child(2)").textContent = users[curr].age;

  var clutter = "";
  users[curr].interests.forEach(function (interest) {
    clutter += `
        <div
                    class="tag flex gap-3 items-center bg-white/30 px-5 py-2 rounded-full"
                  >
                    ${interest.icon}
                    <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                  </div>
        `;
  });

  select(".tags").innerHTML = clutter;

  select(".bio p").textContent=users[curr].bio

  curr = 2;
})();
