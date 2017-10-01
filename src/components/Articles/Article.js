import React from 'react';
import './styles/article.scss';

const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div className="article">
            <div className="h2">{article.title}</div>
            <div className="date">{article.date}</div>
            <div>
                <a className="website" href={author.website}>
                    {author.firstName} {author.lastName} GitHub Account
                </a>
            </div>
            <div className="body">{article.body}</div>
        </div>
    );
};

export default Article;