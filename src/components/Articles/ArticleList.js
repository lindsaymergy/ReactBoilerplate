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

        this.refreshArticles = this.refreshArticles.bind(this);
    }
    
    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    }

    refreshArticles(){
        let updatedData = {};
        fetch('http://localhost:3000/authors')
            .then((response) => response.json()
                .then((data) => 
                { 
                    updatedData.authors = data;
                    //this.setState({ authors: data });
                    return fetch('http://localhost:3000/articles');
                })
                .then((response) => response.json()
                    .then((data) => 
                    {   
                        updatedData.articles = data; 
                        this.setState({ articles: updatedData.articles, authors: updatedData.authors });
                    })
                )
            );
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
                <button onClick={this.refreshArticles} type="button">Update</button>
            </div>
        );
    } 
}

export default ArticleList;