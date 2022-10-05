
// function Header({titulo, descripcion}) {
//     console.log(titulo, descripcion)
//     return (
//       <>
//         <h1 className="text-5xl text-center text-blue-200">{titulo}</h1>
//         <p className="text-lg text-white text-center mt-2 font-semibold">{descripcion}</p>
//       </>
//     );
//   }

const Header = ({titulo, descripcion}) => (
  <>
    <h1 className="text-5xl text-center text-blue-200">{titulo}</h1>
    <p className="text-lg text-white text-center mt-2 font-semibold">{descripcion}</p>
  </>
);

export default Header;