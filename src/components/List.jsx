import Employee from "./Employee";
const List = ()=>{
    const employees = [
    { name: "Quam", role: "Product Manager", salary: "$12k", content: "he is a skilled product manager" },
    { name: "Ezinne", role: "Frontend engineer", salary: "$42k" },
    { name: "Uche", role: "Backend engineer", salary: "$12k" },
    { name: "Yummy", role: "UI?UX engineer", salary: "$17k" },
  ];


const users = ["Ade", "Wale", "John"];

const contents = [
  {
    image:
      "https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/learning-enviroment.webp",
    heading: "Great Learning environment",
    para: "We provide you with the best learning facility you can lay your eyes on. All our classes are conducive, en-suite and equipped with high-speed internet and the latest technologies for learning.",
  },
  {
    image:
      "https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/expirenced-tutors.webp",
    heading: "Experienced Tutors",
    para: "We provide you with the best learning facility you can lay your eyes on. All our classes are conducive, en-suite and equipped with high-speed internet and the latest technologies for learning.",
  },
  {
    image:
      "https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/career-support.webp",
    heading: "Career Support",
    para: "We provide you with the best learning facility you can lay your eyes on. All our classes are conducive, en-suite and equipped with high-speed internet and the latest technologies for learning.",
  },
];

const nums = [1, 2, 4, 6, 8];

const data = [
  { id: 1, fullName: "John Doe", age: 67 },
  { id: 2, fullName: "Peter Pan", age: 98 },
];
return (
  <div>
    <h2>List of employees</h2>
    {data.map((item) => {
      const { id, fullName, age } = item;
      return (
        <div key={id}>
          <h2>
            {" "}
            {fullName} {age}{" "}
          </h2>
        </div>
      );
    })}
    {employees.map((item, i) => {
      return (
        <div key={i}>
          <Employee {...item} />
        </div>
      );
    })} 

     {contents.map((item, i) => {
      const { image, heading, para } = item;
      return (
        <div key={i} className="content-card">
          <img src={image} alt="" />
          <h2> {heading} </h2>
          <p> {para} </p>
        </div>
      );
    })};

 
  </div>
);
}


export default List;