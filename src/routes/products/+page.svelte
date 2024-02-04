<script lang="ts">
  import { onMount } from 'svelte';

  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  let products: Product[] = [];

  onMount(async () => {
    const response = await fetch('https://dummyjson.com/products?limit=10');
    const data = await response.json();
    products = data.products;
  });
</script>

{#each products as product}
  <div>
    <a href={`/products/${product.id}`}>{product.title}</a>
    <!-- You can display more product details here -->
  </div>
{/each}
