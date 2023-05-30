const cart = []

const handleCard = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                
                );
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            }else{
                return state.map((x) =>
                    x.id === product.id ? { ...exist1, qty: exist1.qty - 1 } : x
                );
            }
            break;
            case"CLEAR_CART":
                if(window.confirm("Are you sure to clear cart")){
                    return state = []
                }else{
                    return state
                }
                break;
                

        default:
            return state;
            break;
    }
}

export default handleCard;