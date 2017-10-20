import React, {Component} from 'react';

//import './styles/app.css';
import './styles/app.scss';

import Counter from './components/Counter/Counter';
import NameTag from './components/NameTag/NameTag';
import Avatar from './components/Avatar/Avatar';
import ArticleList from './components/Articles/ArticleList';
import Greeter from './components/Greeter/Greeter';
import Button from './components/Button/Button';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Salutation from './components/Salutation/Salutation';


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
                <div>
                    <Salutation words="hi, hello, hey, yep"/>
                    <Salutation words=" , "/>
                    <Salutation words="56"/>
                    
                    <Counter />

                </div>
                <div>
                    <ProgressBar maxValue={10000} value={3532} color="magenta"/>
                </div>
                <div className="counters" style={{textAlign: 'center', textTransform: 'uppercase'}}>
                    <Counter />
                </div>
                <div>
                    <ProgressBar maxValue={10000} value={3532} color="yellow" />

                </div>
                <div>
                    <Button text="Hello, I am a button!" />
                </div>
                <div className="avatars">
                    <Avatar user="jhaagen" />
                </div>
                <div className="nametags">
                    <NameTag myClasses="big yellow" name="Rick James" />
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