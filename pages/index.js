import React from 'react'
import Layout from '../components/layout'

class Index extends React.Component {
    render() {
        return(
            <div>
                <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col s1">sidebar</div>
                        <div className="col s1">body</div>
                    </div>
                </div>
                </Layout>
            </div>
        )
    }
}
export default Index