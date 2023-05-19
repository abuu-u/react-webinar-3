import React, { useCallback } from "react";
import Cart from "./components/cart";
import CartPreview from "./components/cart-preview";
import Head from "./components/head";
import List from "./components/list";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const { list, isCartModalOpen } = store.getState();
  const itemsInCart = list.filter((item) => item.countInCart > 0);

  const callbacks = {
    onAdd: useCallback((code) => store.addItemToCart(code), [store]),
    onCartOpenClick: useCallback(() => store.toggleCartModal(), [store]),
  };

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" />

      <CartPreview
        itemsCount={itemsInCart.length}
        itemsSum={itemsInCart.reduce(
          (sum, item) => sum + item.price * item.countInCart,
          0
        )}
        onCartOpenClick={callbacks.onCartOpenClick}
      />

      {isCartModalOpen && (
        <Cart
          items={list.filter((item) => item.countInCart > 0)}
          onClose={callbacks.onCartOpenClick}
        />
      )}

      <List list={list} onAdd={callbacks.onAdd} />
    </PageLayout>
  );
}

export default App;
