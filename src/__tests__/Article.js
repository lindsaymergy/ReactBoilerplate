import DataApi from '../services/DataApi';
import { data } from '../testData.json';

const api = new DataApi(data);

describe('Article', () =>{
    it('exposes articles as an object', () => {
        const articles = api.getArticles();
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    });
});