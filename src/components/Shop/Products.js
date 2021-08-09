import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    { id: 'p1', title: 'My Book' , price: 5 , description:'My first Book', total: 5, quantity: 1},
    { id: 'p2', title: 'My Course', price: 10, description: 'My First Course', total: 10, quantity: 1},
    { id: 'p3', title: 'My Language', price: 8, description: 'My first Language', total: 8, quantity: 1}
  ];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      { 
        DUMMY_PRODUCTS.map((product) =>
          <ProductItem
            key= {product.id}
            id= {product.id}
            title= {product.title}
            price= {product.price}
            total= {product.total}
            quantity= {product.quantity}
            description= {product.description}
          />
        )
      }
      </ul>
    </section>
  );
};

export default Products;
