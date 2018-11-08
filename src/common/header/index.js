import React , {Component} from 'react';
import { HeaderWrapper,Logo ,Nav,NavItem,Addition,Button,NavSearch,SearchWrapper} from './style';

class Header extends Component{
    constructor(props){
        super(props);
        this.state
    }
    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'> <i  className='iconfont'>&#xe636;</i></NavItem>
                   <SearchWrapper>
                   <NavSearch>  
                    </NavSearch>
                    <i  className='iconfont'>&#xe62a;</i>
                   </SearchWrapper>
                   
                    <Addition>
                    <Button className='writting'>
                    <i  className='iconfont'>&#xe753;</i>
                    写文章</Button>
                    <Button className='reg'>注册</Button>
                    
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}
export default Header;