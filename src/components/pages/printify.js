import Printify from 'printify-api';

const API_KEY = 'your-printify-api-key-here';
const printifyClient = new Printify(API_KEY);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    printifyClient.products.list().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;