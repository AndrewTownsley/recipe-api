*** Walnut Backend API ***

<!-- 1. Build a GET route that returns all Recipe names. -->

2. Build a GET route that takes a recipe name as a string param.  Return all the ingredients and the number of steps as JSON.

3. Add a POST route that can add additional recipes  in the existing format to the backend with support for the above routes.
    # If recipe already exists, return 
    {
        error: "Recipe already exists"
    } 
    status: 400

4. Adda put route that can update existing recipes.
    # If recipe does not exist, return 
    {
        error: "Recipe does not exist"
    } 
    status: 400