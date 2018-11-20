import React,{Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://img13.360buyimg.com/da/jfs/t25744/104/2540083774/179925/57ff6f4c/5be8172dN94243dd8.jpg!q90.jpg"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;