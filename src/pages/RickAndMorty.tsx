import React from "react";

export default class RickAndMorty extends React.Component{
    render() {
        return <div>RickAndMorty</div>
    }
    
}

// export default class RickAndMorty extends React.Component {
//   state = {
//     loading: true,
//     character: null,
//   };

//   async componentDidMount() {
//     const url = "https://rickandmortyapi.com/api/character";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ character: data.results[0], loading: false });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.loading || !this.state.character ? (
//           <div>loading...</div>
//         ) : (
//           <div>???</div>
//         )}
//       </div>
//     );
//   }
// }
