import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ListCategory = (props) => {
    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.image', {
            duration: 2200,
            distance: '50px',
            origin: 'right',
            easing: 'ease-in-out',
        });

       
    }, []);
    return (
        <div className='imageCircle' style={{ width: '10%',height:'20vh',backgroundColor: '#ECEBEB', borderRadius: '50%',padding:'1%'}}>
            <img className=' w-100 imageCircle2' style={{ width: '100%' ,height:'100%', objectFit: 'fill', objectPosition: 'center', borderRadius: '50%'}} src={props.categoryImage} alt="Category" />
        </div>
    );
};

export default ListCategory;