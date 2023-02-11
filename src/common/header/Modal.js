import React, { useState } from 'react';
import { Tabs, Tab, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './Header.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },

};

//   const useStyles = makeStyles({
//     root: {
//       textAlign: 'center',
//       justifyContent: 'center'
//     },
//   });

const ModalComponent = (props) => {

    const { handleOpen, handleClose, modalIsOpen, tabValue } = props;


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={this.handleOpen}
                onRequestClose={handleClose}
                style={customStyles}
                //contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div>
                    <TabsComponent /* tabValue={tabValue} handleTabs={handleTabs} */ />
                    {/* <button style={{marginTop: 5}} onClick={handleClose}>close</button> */}
                </div>
            </Modal>
        </div>
    )

}

function TabsComponent(props) {

    const [tabValue, setTabValue] = useState(0);

    const handleTabs = (e, val) => {
        console.log(e, val);
        setTabValue(val);
    }

    //const {tabValue, handleTabs} = props
    return (
        <div>
            <Tabs value={tabValue} onChange={handleTabs}>
                <Tab label="Login" />
                <Tab label="Register" />
            </Tabs>
            <TabPanel value={tabValue} index={0}></TabPanel>
            {/* <TabPanel value={tabValue} index={1}>Login</TabPanel> */}
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                //value===index && (<h1>{children}</h1>)
                value === 1 ? <RegisterForm /> : <LoginForm />
            }
        </div>
    );
}

function LoginForm() {


    const [loginFormParams, setLoginFormParams] = useState({
        id: 0,
        username: '',
        password: '',
    });

    function inputChangedHandler(e) {
        const state = loginFormParams;
        state[e.target.name] = e.target.value;
        setLoginFormParams({ ...state });
        //console.log(state);
    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        console.log(loginFormParams);
        //setRegisterFormParams(registerFormParams);
        setLoginFormParams({ id: 0, username: '', password: '' });
    }

    const { username, password } = loginFormParams;

    return <div>
        <Grid container direction="column" alignItems="center" justify="center" >
            <ValidatorForm className="form" onSubmit={onFormSubmitted}>
                <TextValidator

                    id="name"
                    type="text"
                    name="username"
                    onChange={inputChangedHandler}
                    label="Enter Name"
                    value={username}
                    validators={['required']}
                    errorMessages={['Name cannot be empty']}

                >
                </TextValidator>

                <TextValidator

                    id="password"
                    type="password"
                    name="password"
                    onChange={inputChangedHandler}
                    label="Enter Password"
                    value={password}
                    validators={['required']}
                    errorMessages={['Password cannot be empty']}

                >
                </TextValidator> <br />
                {/* <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">User To Be Added:</span><br/>
                        <span className="subscriber-info">Username: {username}</span> <br/>
                        <span className="subscriber-info">Password: {'*'.repeat(password.length)}</span>
                    </div> */}
                {/* <button className="btn btn-primary mt-2 pt-2">Login</button> */}
                <Button type="submit" style={{ margin: 4 }} variant="contained" color="primary">
                    Login
                </Button>
            </ValidatorForm>
        </Grid>
    </div>
}

function RegisterForm() {

    const [registerFormParams, setRegisterFormParams] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contact: ''
    });

    function inputChangedHandler(e) {
        const state = registerFormParams;
        state[e.target.name] = e.target.value;
        setRegisterFormParams({ ...state });
        //console.log(state);
    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        console.log(registerFormParams);
        //setRegisterFormParams(registerFormParams);
        setRegisterFormParams({
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contact: ''
        });

        console.log("submited");
        setContent(true);
    }

    const { firstName, lastName, email, password, contact } = registerFormParams;
    const [content, setContent] = useState(false);
    return <div>
        <Grid container direction="column" alignItems="center" justify="center" >
            <ValidatorForm className="form" onSubmit={onFormSubmitted}>
                <TextValidator

                    id="firstname"
                    type="text"
                    name="firstName"
                    onChange={inputChangedHandler}
                    label="Enter First Name"
                    value={firstName}
                    validators={['required']}
                    errorMessages={['First Name cannot be empty']}

                >
                </TextValidator>

                <TextValidator

                    id="lastname"
                    type="text"
                    name="lastName"
                    onChange={inputChangedHandler}
                    label="Enter Last Name"
                    value={lastName}
                    validators={['required']}
                    errorMessages={['Last Name cannot be empty']}

                >
                </TextValidator>

                <TextValidator

                    id="email"
                    type="email"
                    name="email"
                    onChange={inputChangedHandler}
                    label="Enter Email"
                    value={email}
                    validators={['required']}
                    errorMessages={['Email cannot be empty']}

                ></TextValidator>

                <TextValidator

                    id="password"
                    type="password"
                    name="password"
                    onChange={inputChangedHandler}
                    label="Enter Password"
                    value={password}
                    validators={['required']}
                    errorMessages={['Password cannot be empty']}

                >
                </TextValidator>

                <TextValidator

                    id="contact"
                    type="number"
                    name="contact"
                    onChange={inputChangedHandler}
                    label="Enter Phone Number"
                    value={contact}
                    validators={['required']}
                    errorMessages={['Phone Number cannot be empty']}

                >
                </TextValidator> <br />
                {content == true ? <p>Registration Successful. Please Login!</p> : ""}
                {/* <button className="btn btn-primary mt-2 pt-2">Register</button> */}
                <Button type="submit" style={{ margin: 4 }} variant="contained" color="primary">
                    Register
                </Button>

            </ValidatorForm>
        </Grid>
    </div>
}

export default ModalComponent