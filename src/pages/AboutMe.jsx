import Photo from '../assets/headshot.png'
// import Header from '../components/Header'

export default function AboutMe() {
    return (
        <div className="reset">
            {/* <Header headerText="About Me" headerStyle={{backgroundColor: "var(--bgcolor)", color:"white"}}/> */}
            <h2>about me</h2>
            <div className="about-me">
                <img id="headshot" className='mobile-hide' src={Photo}></img>
                <p className="bio">Hello there! Thanks for checking out my website.
                    <br /><br />
                    As a philomath, I am wholly dedicated to contiunuous learning and excellence.  
                    I require an environment that encourages both personal and professional growth, with people who are respectful 
                    Partnered with corporate to roll out RFID technology at UNIQLO 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies. Neque viverra justo nec ultrices dui sapien eget mi proin. Amet est placerat in egestas. Egestas quis ipsum suspendisse ultrices gravida. Neque egestas congue quisque egestas diam in arcu cursus euismod. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Cras sed felis eget velit aliquet. Varius sit amet mattis vulputate enim. Viverra nibh cras pulvinar mattis nunc sed blandit.
                    <br /><br />
                    Sed viverra tellus in hac habitasse platea dictumst vestibulum. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Egestas congue quisque egestas diam in arcu. Arcu dictum varius duis at consectetur lorem donec massa. Purus ut faucibus pulvinar elementum integer enim. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tellus rutrum tellus pellentesque eu tincidunt. Euismod lacinia at quis risus sed vulputate odio. Turpis massa sed elementum tempus egestas sed sed risus pretium. Turpis cursus in hac habitasse platea. Tempus imperdiet nulla malesuada pellentesque.
                </p>
            </div>
        </div>
    )
}


// import Example from '../assets/react.svg'
// import Header from '../components/Header'

// export default function AboutMe(){
//     return (
//         <div>
//         <Header className=" "   headerText="About Me" headerStyle="white" subheader={true}/>
//         <Header headerText="About Me!!" headerStyle="red"/>
//         <img src={Example}></img>
//         <p>Hello! This is where my bio will go.</p>
//         </div>
//     )
// }