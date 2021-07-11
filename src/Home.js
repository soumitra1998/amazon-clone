import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/home.jpg?alt=media&token=bfcb8647-46c5-4126-8ab6-1a1ca6d961b6"
                alt="amazon banner" 
            />
            <div className="home__row">
                <Product
                    id="12345" 
                    title="Women Navy Green Printed Kurti with Red Sharara Set"
                    price={299}
                    rating={5}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/jeans.jpg?alt=media&token=839d5657-66e5-4721-b9f9-5c59883660f0"
                />
                <Product
                    id="12346" 
                    title="ANNI DESIGNER Women's Pure Cotton Flower Print Kurta and Palazzo"
                    price={559}
                    rating={4}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/anni%20dress.jpg?alt=media&token=2c60dce3-0995-4531-8633-be01837bdcd3"
                />
                <Product
                    id="12347" 
                    title="anant designer studio Women's Woven Satin Saree with Blouse Piece"
                    price={585}
                    rating={4}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/blue%20saree.jpg?alt=media&token=4cc7d153-256a-47de-a354-45ac58bdfa59"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12348" 
                    title="YAZANA Women's Kanjivaram Banarasi Silk Saree With Blouse Piece"
                    price={999}
                    rating={5}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/bridal-saree.jpg?alt=media&token=4d661c01-b5a8-4dfd-90ff-5064f037ad1f"
                />
                <Product
                    id="12349" 
                    title="Florence Women's Net Semi-stitched Lehenga Choli"
                    price={599}
                    rating={5}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/lehenga.jpg?alt=media&token=551a35d9-5c31-4bf9-aa97-1a3dd5e19620"
                />
               
            </div>
            <div className="home__row">
                <Product
                    id="12343" 
                    title="Women Blue Kurti Long Dress Printed Gown Anarkali Kurti Sleevless Kurti for Women & Girls"
                    price={799}
                    rating={5}
                    image="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/xxx.jpg?alt=media&token=7dce9d69-33f9-4ca3-b09d-79ab449c1faa"
                />
            </div>
            
           
            
        </div>
    )
}

export default Home
