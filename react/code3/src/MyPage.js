import React from 'react';
import {Redirect} from 'react-router-dom';

const logged = false;
//가짜 데이터

const MyPage = () =>{
    return (
        <div>
            {
                !logged && <Redirect path="/" />
            }
            My Page
        </div>
    )
}

export default MyPage;