import React from 'react';

function RecipeGallery(props) {
    let recipes = [
        { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg" },
        { id: 2, title: "Pizza", ingredients: ["Dough", "Cheese", "Tomato sauce"], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1920px-Pizza-3007395.jpg" }
    ]

    return (
        <div>
            {
                recipes.map((recipe) => (
                    <div key={recipe.id} style={{marginBottom: "2rem"}}>
                        <img className="recipe-image" src={recipe.image} style={{width: '10rem'}}/>
                        <br/>
                        <b>
                            {recipe.title}
                        </b>
                        <br />
                        <div style={{display: "inline-block"}}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <div key={index} style={{
                                    border: "1px",
                                    display: "inline-block",
                                    marginRight: ".5rem"
                                }}>
                                    {ingredient}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default RecipeGallery;