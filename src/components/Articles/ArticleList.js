import React, {Component} from 'react';
import Article from './Article';
import values from 'object.values';
import DataApi from './services/DataApi';
import { data } from './testData';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        const api = new DataApi(data);
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }
    
    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    }

    render(){
        return (
            <div>
                {values(this.state.articles).map((article) => 
                    <Article
                        key={article.id}
                        article={article}
                        actions={this.articleActions}
                    />
                )}
            </div>
        );
    } 
}

export default ArticleList;