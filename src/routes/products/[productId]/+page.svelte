<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
  
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
  
    let product: Product | null = null;
  
    onMount(async () => {
      const { productId } = get(page).params;
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      product = await response.json();
    });
  </script>
  
  {#if product}
    <article>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={`Thumbnail of ${product.title}`} />
      <p>{product.description}</p>
      <!-- Display more product details as needed -->
      <div>
        {#each product.images as image}
          <img src={image} alt={`Image of ${product.title}`} />
        {/each}
      </div>
    </article>
  {:else}
    <p>Product not found.</p>
  {/if}
  