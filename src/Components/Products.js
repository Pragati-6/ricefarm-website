import styles from "./css/Products.module.css";

function Products({ products }) {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map((item, index) => (
            <div className={styles.productItem} tabindex="0" id={index}>
              <div className={styles.image}>
                <img src={item.image} height="350px" width="350px" />
              </div>
              <div className={styles.details}>
                <table>
                  <tr>
                    <td>Name</td>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{item.category}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{item.type}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>{item.quantity}</td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
