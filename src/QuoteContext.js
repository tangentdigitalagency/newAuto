
import React, {  createContext } from 'react';
export const QuoteContextApi = createContext();
class QuoteProvider extends React.Component {

    state = { 
        StraperWidth:"5%"
      }


      handleStraperLength=(length) =>{
          this.setState({StraperWidth:length})
      }

    render() {
        return (
            <QuoteContextApi.Provider value={{
                ...this.state,
                handleStraperLength:this.handleStraperLength,
        
            }}>
                {this.props.children}
            </QuoteContextApi.Provider>
        )
    }
}


export default QuoteProvider