import React ,{useEffect, useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

import UserForm from './component/UserForm';

function Shop() {

    useEffect(()=>{
        fetchItems();
    },[]);
    // 컴포넌트가 마운트 될때 실행된다 [] <- 여기 옵션에 들어가는듯

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const SHOP_URL = "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get";
        const items = await fetch(SHOP_URL)
                            .then(response => response.json())
                            .catch(err => console.log(err));
        setItems(items.items);
        //setItems에 저장한다
        //useState이 뭘까??
    }

    return (
    <div className="App">
        {items.map( item => (
            <h1 key={item.itemid}>
                <Link to={`shop/${item.itemid}`}>
                {/* url Param을 사용하기 위해서 링크 뒤에 식별 가능한 값을 출력하게 한다 */}
                    {item.name}
                </Link>
            </h1>
        ))}

    </div>
  );
}

export default Shop;
