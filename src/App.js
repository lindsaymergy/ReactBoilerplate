import React, {Component} from 'react';

import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar';
//import Greeter from './components/Greeter';
import ArticleList from './components/Articles/ArticleList';

import DataApi from './services/DataApi';
import { data } from './testData';

const api = new DataApi(data);

class App extends Component {

    constructor(){
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    };

    render(){
        return (
            <div>
                <div style={{
                    display: 'flex'
                }}>
                    <Avatar user="benbakle" />
                    <Avatar user="andyglassley" />
                    <Avatar user="dfederspiel" />
                </div>
                <div>
                    <Counter />
                    <NameTag name="Rick James" />
                </div>
                <div>
                    <ArticleList 
                        articles={this.state.articles}
                        articleActions={this.articleActions} 
                    />
                </div>
            </div>
        );
    }
}

export default App;