import React, {Component} from 'react';
// import Recipe from './Recipe';
import Navbar from './navbar'
import RecipeList from './Recipelist';
import RecipeInput from './RecipeInput';
// import logo from './logo.svg';
import './RecipeApp.css';
// import propTypes from 'prop-types';
import spaghetti from './spaghetti.jpg';
import yam from './yam.jpg';
import poundedyam from './poundedyam.jpg';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes:[
        {

           
          id: 0,
          title: "Spaghetti",
          instructions: "Boil water.  Cook pasta until done.  Serve with stew",
          ingredients: ["pasta", "8 cups of water", "salt"],
          img: spaghetti
        },
        {
          id: 1,
          title: "Yam and Egg",
          instructions: "Peel yam. Cook yam until done.  Fry eggs",
          ingredients: ["yam", "eggs", "vegetable oil"],
          img: yam
        },
        {
          id: 2,
          title: "Pounded Yam",
          instructions: "Peel yam. Cook yam until done.  Pound to fine texture. Serve with favourite soup",
          ingredients: ["yam", "2 cups water"],
          img: poundedyam
        }
      ],
      nextRecipeId: 3,
      showForm: false,
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

handleSave(recipe){
  this.setState((prevState, props) => {
    const newRecipe = {...recipe, id: this.state.nextRecipeId};
    return {
      nextRecipeId: prevState.nextrecipeId + 1,
      recipes: [...this.state.recipes, newRecipe],
      showForm: false
    }
  });
}

onDelete(id) {
  const recipes = this.state.recipes.filter(r => r.id !== id);
  this.setState({recipes});
}
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({ showForm: false })}
             /> : 
             null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
  
}

export default RecipeApp;