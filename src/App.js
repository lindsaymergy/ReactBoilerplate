import React, {Component} from 'react';

import './styles/App.css';

import Greeter from './components/Greeter';
import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar/Avatar';
import ArticleList from './components/Articles/ArticleList';

import DataApi from './services/DataApi';
import { data } from './services/data.json';

class App extends Component {

    // https://facebook.github.io/react/docs/react-component.html#constructor
    constructor(props){
        super(props);
        const api = new DataApi(data);
        this.data = {
            articles: api.getArticles(),
            authors: api.getAuthors(),
            serviceUrl: 'http://localhost:3000/'
        };
    }

    // https://facebook.github.io/react/docs/react-component.html#render
    render(){
        return (
            <div className='app'>
                <div className="counters" style={{textAlign: 'center', textTransform: 'uppercase'}}>
                    <Counter />
                </div>
                <div className="avatars">
                    <Avatar user="jhaagen" />
                    <Avatar user="dfederspiel" />
                    <Avatar user="andyglassley" />
                    <Avatar user="robertmccoy" />
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
                
            </div>
        );
    }
}

export default App;