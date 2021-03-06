import styled from 'styled-components';
import logoPic from '../../statics/jianshu.png';
export const HeaderWrapper=styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:raletive;
    
`
export const Logo=styled.a.attrs({herf:'/'})`
    height:60px;
    
    position:absolute;
    top:10;
    left:20px;
    display:block;
    width:36px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
    padding-right:20px;
    
`
export const Nav=styled.div`
width:960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;

`
export const NavItem=styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
&.slide-enter {
    transition: all .2s ease-out;
}
&.slide-enter-active {
    width: 240px;
}
&.slide-exit {
    transition: all .2s ease-out;
}
&.slide-exit-active {
    width: 160px;
}
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
margin-top:9px;
padding:0 35px 0 20px;
margin-left:20px;
box-sizing:border-box;
background:#eee;
font-size:14px;
&::placeholder{
    color:#999;
}
&.focused{
    width:240px;

}
`
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button=styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;

&.reg{
    color:#ec6149
}
&.writting{
    color:#fff;
    background:#ec6149;
}
`
export const SearchWrapper=styled.div`

float:left;
position:relative;

.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    
    &.focused{
        background:#777;
    }

}
`

 
 
 
 
 
