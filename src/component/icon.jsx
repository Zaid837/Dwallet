import React from 'react';


export default class Icon extends React.Component{
    render(){
        if(this.props.icon === 'menu' ){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 18 12">
                    <path id="menu" d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z" transform="translate(-3 -6)" fill="#29d311"/>
                </svg>

            )
        }else if( this.props.icon === 'accountBal') {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="15.833" height="15" viewBox="0 0 15.833 15">
                    <path id="ic_account_balance_wallet_24px" d="M18,15.5v.833A1.672,1.672,0,0,1,16.333,18H4.667A1.666,1.666,0,0,1,3,16.333V4.667A1.666,1.666,0,0,1,4.667,3H16.333A1.672,1.672,0,0,1,18,4.667V5.5H10.5A1.666,1.666,0,0,0,8.833,7.167v6.667A1.666,1.666,0,0,0,10.5,15.5Zm-7.5-1.667h8.333V7.167H10.5Zm3.333-2.083a1.25,1.25,0,1,1,1.25-1.25A1.248,1.248,0,0,1,13.833,11.75Z" transform="translate(-3 -3)" fill="#bcbcbc"/>
                </svg>
             )
        }else if( this.props.icon === 'arrow') {
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="10.635" height="6.567" className="arrow" viewBox="0 0 10.635 6.567">
                    <path id="ic_keyboard_arrow_right_24px" d="M8.59,15.135l4.059-4.068L8.59,7,9.84,5.75l5.318,5.318L9.84,16.385Z" transform="translate(16.385 -8.59) rotate(90)" fill="#707070"/>
                </svg>
             )
        }
        else {
            return '';
        }
    }
}