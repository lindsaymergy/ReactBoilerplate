import React, {Component} from 'react';

import './styles/App.css';

import Greeter from './components/Greeter';
import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar/Avatar';
import ArticleList from './components/Articles/ArticleList';
import { articles, authors } from './data/db.json';

class App extends Component {

    // https://facebook.github.io/react/docs/react-component.html#constructor
    constructor(props){
        super(props);
        this.data = {
            articles: articles,
            authors: authors,
            serviceUrl: 'http://localhost:3000/'
        };
    }

    // https://facebook.github.io/react/docs/react-component.html#componentdidmount
    componentDidMount(){
        fetch('http://localhost:3000/authors')
            .then((response) => response.json().then((data) => this.setState({ authors: data })));
        fetch('http://localhost:3000/articles')
            .then((response) => response.json().then((data) => this.setState({ articles: data })));
    }

    // https://facebook.github.io/react/docs/react-component.html#render
    render(){
        return (
            <div className='app'>
                <div className="avatars">
                    <Avatar user="github" />
                    <Avatar user="dfederspiel" />
                    <Avatar user="jonfazzaro" />
                    <Avatar user="matthewtruty" />
                </div>
                <div className="nametags">
                    <NameTag myClasses="big yellow" name="Rick James" />
                    <NameTag myClasses="big orange" name="David Federspiel" />
                </div>
                <div className="greeters" >
                    <Greeter />
                </div>
                <div className="articles">
                    <ArticleList {...this.data} />
                </div>
                <div className="counters">
                    <Counter />
                </div>
            </div>
        );
    }
}

export default App;