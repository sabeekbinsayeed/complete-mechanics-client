import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, next, prev } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image '>
                <img src={image} className="w-full rounded-xl " style={{ height: '800px' }} />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 right-15  top-1/4 ">
                <h1 className='text-6xl text-white font-bold'>Affortable price <br></br> for car<br></br> services </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 right-15  top-1/2 w-1/2 ">
                <p className='text-xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nam neque laborum dolore, laudantium magni, psum quaerat itaque.</p>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-15  top-3/4 ">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${next}`} className="btn btn-circle">❮</a>
                <a href={`#slide${prev}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;