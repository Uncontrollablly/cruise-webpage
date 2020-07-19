import React from 'react';
import {HistoryContext} from "../../history-context";

export class History extends React.Component {
    render() {
        return (
            <section className='history'>
                <header>
                    History
                </header>
                <HistoryContext.Consumer>
                    {context =>
                        <ul>
                            {context.historyList.map((history, index) => <li key={index}>{history}</li>)}
                        </ul>
                    }

                </HistoryContext.Consumer>
            </section>
        )
    }
}