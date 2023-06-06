const foodList = document.getElementById('food-list');

fetch('/data')
  .then(response => response.json())
  .then(foods => {
    foods.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = `${food.name} - Cuisine: ${food.cuisine}, Price: $${food.price.toFixed(2)}`;
      foodList.appendChild(listItem);
    });
  })



