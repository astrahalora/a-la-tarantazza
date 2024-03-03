import { useState, useRef } from "react";
import "./ProductCreator.css";

export default function ProductCreator() {
    const [ingredients, setIngredients] = useState([]);
    const [allergens, setAllergens] = useState([]);
    const ingredientRef = useRef(), allergenRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="creator-frame">
            <h2>Create New Product</h2>
            <form onSubmit={handleFormSubmit} className="creator-form">
                <div className="creator-div">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Ginger Berry Pie" />
                </div>
                <div className="creator-div">
                    <label htmlFor="type">Type: </label>
                    <input type="text" name="type" placeholder="dessert" />
                </div>
                <div className="creator-div">
                    <label htmlFor="imageUrl">Image: </label>
                    <input type="text" name="imageUrl" placeholder="https://imageUrl" />
                </div>
                <div className="list-div">
                    <div className="item-list">
                        <p>Ingredients: </p>
                        <div className="listing">
                            {ingredients.length > 0 ? ingredients.map((ingredient, i) => (
                                <p key={i}>
                                    {ingredient}
                                    <span onClick={() => setIngredients(prev => prev.filter((_, index) => index !== i))}>
                                        X
                                    </span>
                                </p>
                            )) : null}
                        </div>
                    </div>
                    <div className="adder-div">
                        <label htmlFor="ingredient">Ingredient: </label>
                        <div className="adder-div-div">
                            <input type="text" name="ingredient" placeholder="All-Purpose Flour" ref={ingredientRef} />
                            <button
                                type="button"
                                className="base-btn"
                                onClick={() => {
                                    const newIngredient = ingredientRef.current.value.trim();
                                    if (newIngredient !== "") {
                                        setIngredients(prev => [...prev, newIngredient]);
                                        ingredientRef.current.value = "";
                                    }
                                }}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-div">
                    <div className="item-list">
                        <p>Allergens: </p>
                        <div className="listing">
                            {allergens.length > 0 ? allergens.map((allergen, i) => (
                                <p key={i}>
                                    {allergen}
                                    <span onClick={() => setAllergens(prev => prev.filter((_, index) => index !== i))}>
                                        X
                                    </span>
                                </p>
                            )) : null}
                        </div>
                        
                    </div>
                    <div className="adder-div">
                        <label htmlFor="alergen">Allergen: </label>
                        <div className="adder-div-div">
                            <input type="text" name="alergen" placeholder="Gluten" ref={allergenRef} />
                            <button
                                type="button"
                                className="base-btn"
                                onClick={() => {
                                    const newAllergen = allergenRef.current.value.trim();
                                    if (newAllergen !== "") {
                                        setAllergens(prev => [...prev, newAllergen]);
                                        allergenRef.current.value = "";
                                    }
                                }}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="creator-div">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" placeholder="12.35" />
                </div>
                <div className="creator-div">
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" name="amount" placeholder="2" />
                </div>
            </form>
        </div>
    )
}