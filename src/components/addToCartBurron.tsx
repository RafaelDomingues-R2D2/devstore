'use client'

import { useCart } from '@/contexts/cartContext'

export interface AddToButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 p-3 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
