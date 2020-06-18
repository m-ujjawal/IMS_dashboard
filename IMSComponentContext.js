import React from 'react'
const IMSComponentContext=React.createContext()

const IMSComponentRunningProvider=IMSComponentContext.Provider
const IMSComponentRunningConsumer=IMSComponentContext.Consumer

export  {IMSComponentRunningProvider,IMSComponentRunningConsumer}