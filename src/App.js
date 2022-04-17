import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
/*This part only contains the set of categories
 and not the rest of the element from the data.*/
console.log(allCategories);

function App() {
  const [menuitems, setMenuItems] = useState(items); // Complete data is being called.
  const [categories, setcategories] = useState(allCategories); // only the category part from data is being called.

  const filterItems = (category) => {
    if (category === "all") {
      // if the button with all is clicked show complete category
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category); // if the button is clicked except (all) then show the data according to the category.
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuitems} />
      </section>
    </main>
  );
}

export default App;
