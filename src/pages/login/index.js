import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Body,Title,NormalTitle,Denglu, Dian} from './style';
import {connect}from 'react-redux';
import  {actionCreators }from './store';



class Login extends Component{

    render(){
        return(
                <Body>
                    <Title>
                       <NormalTitle>
                           <Denglu>登录</Denglu><Dian>·</Dian><Denglu>注册</Denglu>
                           </NormalTitle> 
                    </Title>
                </Body>
        )
    }
}
export default Login;