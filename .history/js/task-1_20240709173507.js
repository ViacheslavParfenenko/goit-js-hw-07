const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});

const style = document.createElement('style');
style.textContent = `
  .categories {
    background-color: white;
    display: flex;
    flex-wrap:;
    gap: 10px;
    list-style: none;
    border: 1px;
    padding: 0;
    margin: 0;
  }
  .item {
  
    flex: 1 1 calc(33.333% - 10px);
    box-sizing: border-box;
  }

  .item-name {

  }

  .one-item-name:




  }
`;