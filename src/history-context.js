import React from "react";

export const HistoryContext = React.createContext({
    historyList: [],
    addHistory: () => {},
});