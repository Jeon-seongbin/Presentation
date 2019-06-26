import React ,{useEffect, useState} from 'react';
import './App.css';

function Item({ match }) {
// match url 에 매치된 param정보를 가지고 온다

    useEffect(()=>{
        fetchItem();
    },[]);
    // 컴포넌트가 마운트 될때 실행된다 [] <- 여기 옵션에 들어가는듯

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () =>{
        const ITEM_URL = `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`;
        //api생겨먹은게 이렇게 되어 있어서 이렇게 쓴 것
        //
        const item  = await fetch(ITEM_URL)
                                .then(response => response.json())
                                .catch(err => console.log(err))
        console.log(item);
        setItem(item);
    }



    return (
    <div className="App">
        <h1>{item.name}</h1>
        <img src={item.images.transparent} alt=""/>
    </div>
  );
}

export default Item;
