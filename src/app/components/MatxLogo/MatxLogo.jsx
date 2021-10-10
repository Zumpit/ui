import React from 'react'
import useSettings from 'app/hooks/useSettings'

const MatxLogo = ({ className }) => {
    const { settings } = useSettings()
    const theme = settings.themes[settings.activeTheme]

    return (
       <h1></h1>       
    )
}

export default MatxLogo
