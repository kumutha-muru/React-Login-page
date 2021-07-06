import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();
    }

    submit(event) {
        event.preventDefault();
        const data = {
            username: this.username.current.value,
            password: this.username.current.value,
        }
        // console.log(data)
        console.log(this.props)
        this.props.history.push('/dashboard')

    }

    render() {
        return (
            <div >
                <Card style={{ width: '35%' }} className="m-auto mt-5">
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <form onSubmit={this.submit}>
                            <div >
                                <label className="col-md-6">User Name</label>
                                <input className="col-md-6" type="text" className="form-control" ref={this.username} />
                                {
                                    !this.username &&
                                    <div className="text-danger">UserName is Required</div>
                                }
                            </div>
                            <div>
                                <label className="col-md-6">Password</label>
                                <input className="col-md-6" type="password" className="form-control" ref={this.password} />
                                {/* {
                                    submitted && !password &&
                                    <div className="text-danger">Password is Required</div>
                                } */}
                            </div>
                            <div className="mt-3">
                                <Button type="submit" variant="primary" >Submit</Button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Login