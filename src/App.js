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
                <Salutation words="Hello, Hola, Bien Venudo, Hey, Salve, Salu, Gutentag" />
                <Salutation />
                <Salutation words="Goodbye, Red, Blue, Yeti" />
                <div>
                    <Counter />
                </div>
                <div>
                    <ProgressBar maxValue={1000} value={300} color="#cc0" />
                </div>
                <div>
                    <Button text="Hello, I am a button!" />
                </div>
                <div className="avatars">
                    <Avatar user="dfederspiel" />
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