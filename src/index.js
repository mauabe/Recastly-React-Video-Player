// TODO: Render the `App` component to the DOM

// var App = () => (
    
//     <div>
//       <VideoList videos={exampleVideoData}/>
//     </div>

// );

// var VideoList = (props) => {
//     return (
//       <ul>  
//         <li>{props.videos[0]}</li>
//         <li>{props.videos[1]}</li>
//         <li>{props.videos[2]}</li>
//         <li>{props.videos[3]}</li>
//         <li>{props.videos[4]}</li>
//       </ul>
//     )
// }

// class VideoList extends React.Component{
//     constructor(props){
//       super(props);
//     }
  
//     render(){
//         return (
//             <div>{this.props.exampleVideoData}</div>
//         )
//     }
//   }


ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById("app"));