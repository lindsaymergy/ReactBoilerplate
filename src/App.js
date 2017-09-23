import React, {Component} from 'react';
// NUGET PACKAGE DEPLOYMENT ()  
//  auto-generated model
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar/Avatar';
import ArticleList from './components/Articles/ArticleList';

import { data } from './data.json';

class App extends Component {

    render(){
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <Avatar user="afc163" />
                    <Avatar user="github" />
                    <Avatar user="dfederspiel" />
                    <Avatar user="jonfazzaro" />
                </div>
                <div>
                    <NameTag name="Rick James" />
                </div>
                <Greeter />
                <div>
                    <ArticleList data={data} />
                </div>
                <Counter />
            </div>
        );
    }
}

export default App;