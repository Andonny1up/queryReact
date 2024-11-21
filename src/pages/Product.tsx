import { Link } from "react-router-dom"

type Props = {}

const Product = ({}: Props) => {
  const products = [
    {id: 1, name: "iPhone"},
    {id: 2, name: "Android"}
  ];
  return (
    <>
      <div>Página de productos</div>
      <Link to="/">Inicio</Link>
      <ul>
        {products.map(p => <li key={p.id}>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
        </li>)}
      </ul>
    </>
  )
}

export default Product