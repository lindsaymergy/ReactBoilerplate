import React from 'react';
import Article from './Article';
import values from 'object.values';

const ArticleList = (props) => {
    return (
        <div>
            {values(props.articles).map((article) => 
                <Article
                    key={article.id}
                    article={article}
                    actions={props.articleActions}
                />
            )}
        </div>
    );
};

export default ArticleList;