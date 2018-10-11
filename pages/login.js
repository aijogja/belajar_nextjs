import React from 'react'
import Layout from '../components/layout'

class Login extends React.Component {
    render() {
        return(
            <div>
                <Layout>
                    <form className="col offset-s3 s6">
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label>Password</label>
                            </div>
                        </div>
                    </form>
                </Layout>
            </div>
        )
    }
}
export default Login