const currentDate = new Date().toISOString();

const instructors = [
    {
      id: 1,
      name: "John Doe",
      subject: "Introduction to JavaScript",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=1",
      date: "2024-07-01T10:00:00Z",
      live: false
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "User Interface (UI) Design Principles",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=2",
      date: "2024-07-02T12:00:00Z",
      live: false
    },
    {
      id: 3,
      name: "Michael Johnson",
      subject: "Node.js and Express.js Basics",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=3",
      date: currentDate,
      live: true
    },
    {
      id: 4,
      name: "Emily Davis",
      subject: "Introduction to Python for Data Science",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=4",
      date: "2024-07-04T08:00:00Z",
      live: false
    },
    {
      id: 5,
      name: "William Brown",
      subject: "React.js for Beginners",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=5",
      date: currentDate,
      live: true
    },
    {
      id: 6,
      name: "Sarah Wilson",
      subject: "Advanced CSS with TailwindCSS",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=6",
      date: "2024-07-06T14:00:00Z",
      live: false
    },
    {
      id: 7,
      name: "David Clark",
      subject: "Django Framework for Beginners",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=7",
      date: currentDate,
      live: true
    },
    {
      id: 8,
      name: "Laura Martinez",
      subject: "Machine Learning with Scikit-Learn",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=8",
      date: "2024-07-08T15:00:00Z",
      live: false
    },
    {
      id: 9,
      name: "James Taylor",
      subject: "Introduction to Docker and Containers",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=9",
      date: currentDate, 
      live: true
    },
    {
      id: 10,
      name: "Linda Anderson",
      subject: "Ethical Hacking and Penetration Testing",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=10",
      date: "2024-07-10T09:00:00Z",
      live: false
    },
    {
      id: 11,
      name: "Peter Parker",
      subject: "HTML & CSS Basics",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=11",
      date: currentDate,
      live: true
    },
    {
      id: 12,
      name: "Mary Jane",
      subject: "Responsive Web Design",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=12",
      date: "2024-07-12T11:00:00Z",
      live: false
    },
    {
      id: 13,
      name: "Bruce Wayne",
      subject: "PHP and MySQL for Web Development",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=13",
      date: currentDate,
      live: true
    },
    {
      id: 14,
      name: "Clark Kent",
      subject: "Google Cloud Fundamentals",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=14",
      date: "2024-07-14T09:00:00Z",
      live: false
    },
    {
      id: 15,
      name: "Diana Prince",
      subject: "Adobe Photoshop Basics",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=15",
      date: currentDate,
      live: true
    },
    {
      id: 16,
      name: "Steve Rogers",
      subject: "Cybersecurity Essentials",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=16",
      date: "2024-07-16T12:00:00Z",
      live: false
    },
    {
      id: 17,
      name: "Tony Stark",
      subject: "DevOps with Docker",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=17",
      date: currentDate,
      live: true
    },
    {
      id: 18,
      name: "Natasha Romanoff",
      subject: "React Native for Cross-Platform Mobile Apps",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=18",
      date: "2024-07-18T11:00:00Z",
      live: false
    },
    {
      id: 19,
      name: "Wanda Maximoff",
      subject: "Flutter for Mobile App Development",
      isBooked: true,
      image: "https://i.pravatar.cc/200?img=19",
      date: "2024-07-19T13:00:00Z",
      live: true
    },
    {
      id: 20,
      name: "Vision",
      subject: "Security in Cloud Computing",
      isBooked: false,
      image: "https://i.pravatar.cc/200?img=20",
      date: "2024-07-20T15:00:00Z",
      live: false
    }
];

export default instructors;
