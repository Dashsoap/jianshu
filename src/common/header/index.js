import React  from 'react';
import {CSSTransition} from 'react-transition-group';
import { HeaderWrapper,Logo ,Nav,NavItem,Addition,Button,NavSearch,SearchWrapper} from './style';
import {connect}from 'react-redux';

const Header =(props)=>{
    return(
<HeaderWrapper>
    <Logo></Logo>
    <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'> <i  className='iconfont'>&#xe636;</i></NavItem>
       <SearchWrapper>
           <CSSTransition
           in={props.focused}
           timeout={200}
           classNames='slide' 
           >
       <NavSearch
        className={props.focused ? 'focused':''}   
        onFocus={props.handleInputFocus}
        onBlur={props.handleInputBlur}
       >  
        </NavSearch>
        </CSSTransition>
        <i  className={props.focused ? 'focused iconfont':'iconfont'}>&#xe62a;</i>
        
       </SearchWrapper>
       
        <Addition>
        <Button className='writting'>
        <i  className='iconfont'>&#xe753;</i>
        写文章</Button>
        <Button className='reg'>注册</Button>
        
        </Addition>
    </Nav>
</HeaderWrapper>
    )

}
    
   
 const mapDispathToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            const action={
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            };
            dispatch(action)
        }
    }
}
 const mapStateToProps=(state)=>{
    return{
        focused:state.focused
    }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);