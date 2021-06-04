
// // Get visible items

// export default (items, { text, sortBy }) => {
//     //  return items.sort((a, b) => {
//     //         if (sortBy === 'price') {
//     //             return b.cost.bottle < a.cost.bottle ? 1 : -1;
//     //         }
//     //     });
//     return items.filter((item) => {
//         const textMatch = item.tags.includes(text.toLowerCase());
//         return textMatch;
//     })
//         .sort((a, b) => {
//             if (sortBy === 'price') {
//                 return b.cost.bottle < a.cost.bottle ? 1 : -1;
//             }
//         });

// };

 // Get visible items

export default (items, { text, sortBy }) => {
    if (text) {
        return items.filter((item) => {
            const textMatch = item.tags.includes(text.toLowerCase());
            return textMatch;
        })
            .sort((a, b) => {
                if (sortBy === 'price') {
                    return b.cost.bottle < a.cost.bottle ? 1 : -1;
                }
            });
    } else {
        if (sortBy === 'price') {
            let sortedItems = items.sort((a, b) => {
                return b.cost.bottle < a.cost.bottle ? 1 : -1;
            });
            console.log('sorted items!!!', sortedItems);
            return sortedItems;
        }
        else {
            return items;
        }
    }

};
