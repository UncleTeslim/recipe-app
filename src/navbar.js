import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe(){}
    }

    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    render(){
        return(
            <header>
                <h2><a href="#">Recipe App</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar