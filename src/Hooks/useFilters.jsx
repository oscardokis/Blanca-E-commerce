import { useState } from "react"


export const useFilters = () => {
  const [filters, setFilters] = useState({
    category:'all',
    search:''
  })
  const filterProducts = (products) => {
    return products?.filter( product =>{
      return (
        (product.title.toLowerCase().includes(filters.search.toLowerCase()) )&&
        (
          filters.category === 'all' ||
          product.category.name.toLowerCase() === filters.category.toLowerCase()
        )
      )
    })
  }
  return { filterProducts, setFilters }
}