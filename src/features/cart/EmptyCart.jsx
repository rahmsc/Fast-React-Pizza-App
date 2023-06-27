import LinkButton from '../../LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Go back to the menu and start adding some
        pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
