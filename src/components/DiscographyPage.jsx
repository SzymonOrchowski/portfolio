import React, { useEffect } from 'react';
import ItemCard from './discographyPageComponents/ItemCard';

const DiscographyPage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('DiscographyPage')
    },[])

    return (
        <div>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    );
};

export default DiscographyPage;