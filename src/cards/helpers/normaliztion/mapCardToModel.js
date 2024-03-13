 export const mapCardToModel = card =>({
    ...card,
    imageURL: card.image.url,
    imageALT: card.image.alt,
    ...{...card.address}

});