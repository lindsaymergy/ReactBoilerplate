import React from 'react';
import './styles/article.css';

const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div className="article">
            <h2>{article.title}</h2>
            <div className="date">{article.date}</div>
            <div>
                <a className="website" href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div className="body">{article.body}</div>
        </div>
    );
};

export default Article;