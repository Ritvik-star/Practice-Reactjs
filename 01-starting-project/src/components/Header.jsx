import image from "../assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){

    const description = reactDescriptions[genRandomInt(0)];
  
    return(
      <header>
          {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
          {/* instead of passing direct image file path in src , we can pass it dynamically
           so while deplying it won't lost in bunddle*/}
          <img src={image}/>  
          {/* here we are doing dynamically rendering of image */}
          <h1>React Essentials</h1>
          <p>
            {description}{" "}
            React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }