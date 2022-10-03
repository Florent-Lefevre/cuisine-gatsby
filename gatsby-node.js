const path = require('path');

// create pages dynamically
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`query GetRecipes {
        recipes: allContentfulCuisineGatsby {
            nodes {
            slug
            }
        }
    }
    `)
    
    result.data.recipes.nodes.forEach((recipe)=>{
        createPage({
            path:`/recipes/${recipe.slug}`,
            component:path.resolve(`src/templates/recipe-template.js`),
            context:{
                slug: recipe.slug
            },
        })
    })
};