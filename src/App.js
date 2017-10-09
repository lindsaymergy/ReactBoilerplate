import React, {Component} from 'react';

//import './styles/app.css';
import './styles/app.scss';

import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar/Avatar';
import ArticleList from './components/Articles/ArticleList';
import Greeter from './components/Greeter';
import Button from './components/Button/Button';
import ProgressBar from './components/ProgressBar/ProgressBar';

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
                    <ProgressBar maxValue={100} value={45} color="blue" />
                    <ProgressBar maxValue={1000} value={654} color="cyan" />
                    <ProgressBar maxValue={10000} value={3532} color="magenta"/>
                </div>
                <div className="counters" style={{textAlign: 'center', textTransform: 'uppercase'}}>
                    <Counter />
                </div>
                <ProgressBar maxValue={10000} value={3532} color="yellow" />
                <ProgressBar maxValue={1} value={.75}  color="orange" />
                <ProgressBar maxValue={1000} value={300} color="#cc0" />
                <div>
                    <Button text="Hello, I am a button!" />
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