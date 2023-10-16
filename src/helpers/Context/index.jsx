import React from "react";

const gbcontext = React.createContext();




function ProviderContext ({ children }) {
    let [transitionImage,  setTransitionImage] = React.useState(false);
    let [opacity, setOpacity] = React.useState(false)
    let [imageColor, setImageColor] = React.useState(false);

    const functionOpacity = () => {
        setOpacity(true)
    }

    const functionNotOpacity = () => {
        setOpacity(false)
    }

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
            imageColor,
            opacity,
            functionNotOpacity,
            functionOpacity
        })}>
            {children}
        </gbcontext.Provider>
    )
}

export {
    gbcontext,
    ProviderContext,
}