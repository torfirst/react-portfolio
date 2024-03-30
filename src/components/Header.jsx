export default function Header({headerStyle, headerText}) {
 
  return (
   <header>
    <h2 style={{headerStyle}}>{headerText}</h2>
   </header>
  );
}




// export default function Header({className, headerStyle, headerText, subheader}) {
 
//     return (
//      <header className={className}>
//       <h1 style={{headerStyle}}>{headerText}</h1>
//       {subheader && <h3>Hello world!</h3>}
//      </header>
//     );
//   }
  