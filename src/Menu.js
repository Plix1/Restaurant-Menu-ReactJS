import React from "react";

const Menu = ({ items }) => {
  // destructuring the prop
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, img, desc, price } = menuItems; // calling all the data items in here and passing them to the
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
