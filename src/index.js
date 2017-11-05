import { graphql } from 'graphql';
import schema from './schema';

// const query = `
//     {
//         posts{
//             title,
//             content,
//             author {
//                 name
//                 posts{
//                     title
//                 }
//             }

//             comments{
//                 name,
//                 content
//             }
//         }
//     }
// `;

const query = `
    {
        posts{
            title,
            author {
                name
            }
        }
    }
`;


// const query = `
//     {
//         author(id: "77e2448a"){
//             name,
//             email
//         }
//     }
// `;

graphql(schema, query).then(result => {

    console.log(JSON.stringify(result, null, 2));

});