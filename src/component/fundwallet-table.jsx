import React from "react";


  class FWT extends React.Component{
      render(){
          return(
            <div>
                <div className="table-responsive">
                <table className="table">
                        <thead>
                            <tr>
                                <td>Ref No</td>
                                <td>Type</td>
                                <td>Amount(&#x20a6;)</td>
                                <td>Status</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-capitalize">
                                <td>1208</td>
                                <td>credit</td>
                                <td className="text-success">1000</td>
                                <td className="text-success">Successful</td>
                                <td>13-03-2020</td>
                            </tr>

                            <tr className="text-capitalize">
                                <td>1312</td>
                                <td>debit</td>
                                <td className="text-success">1000</td>
                                <td className="text-success">Successful</td>
                                <td>13-03-2020</td>
                            </tr>


                            <tr className="text-capitalize">
                                <td>1208</td>
                                <td>credit</td>
                                <td className="text-success">1000</td>
                                <td className="text-warning">pending</td>
                                <td>13-03-2020</td>
                            </tr>

                            <tr className="text-capitalize">
                                <td>1208</td>
                                <td>debit</td>
                                <td className="text-success">1000</td>
                                <td className="text-warning">pending</td>
                                <td>13-03-2020</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>    
            </div>
          )
      };
  }

  export default FWT;