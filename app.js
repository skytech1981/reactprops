
class App extends React.Component {
    render() {
      return (
        <div>
           <Title text="If I Rule the DOM" font="cursive" />
           <Title text="Talk is cheap. Show me the code" font="fantasy" />
         </div>
      );
    }
  }





  class Title extends React.Component {
    constructor(props) {
         super(props);

       }
   
    render() {
         var style = {
           "fontFamily": this.props.font
         };
         return (
           <h2 style={style}></h2>
   
      );
   
    }
   
   }
   
    




  ReactDOM.render(<App />, document.getElementById('root'));