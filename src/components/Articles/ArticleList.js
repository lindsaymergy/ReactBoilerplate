import React, {Component} from 'react';
import Article from './Article';
import values from 'object.values';



class ArticleList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            articles: props.articles,
            authors: props.authors
        };
    }
    
    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    }

    render(){
        return (
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <div className="articles">
                    {values(this.state.articles).map((article) => 
                        <Article
                            key={article.id}
                            article={article}
                            actions={this.articleActions}
                        />
                    )}
                </div>
            </div>
        );
    } 
}

export default ArticleList;