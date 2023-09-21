import React from "react";

const gbcontext = React.createContext();




function ProviderContext ({ children }) {
    let [transitionImage,  setTransitionImage] = React.useState(false);
    let [imageColor, setImageColor] = React.useState(false);

    const functionImageHover = () => {
        setImageColor(true)
    }

    const functionImageNotHover = () => {
        setImageColor(false)
    }

    const functionHovered = () => {
        setTransitionImage(true)
    }

    const functionNotHovered =() =>{ 
        setTransitionImage(false)
    }
    console.log(transitionImage)
    return (
        <gbcontext.Provider value={({
            transitionImage,
            functionHovered,
            functionNotHovered,
            functionImageNotHover,
            functionImageHover,
            imageColor
        })}>
            {children}
        </gbcontext.Provider>
    )
}

export {
    gbcontext,
    ProviderContext,
}