import React, { Component, useState } from 'react'
import { Button, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import ModalComponent from './Modal';
import './Header.css';
import logo from '../../assets/logo.svg';




const Header = () => {

    const [button, setButton] = useState('LOGIN')

    const [modalIsOpen, setModalIsOpen] = useState(false)


    const handleOpen = (e) => {
        console.log("HELLO SAFAL inside modal")
        setModalIsOpen(true);
    }

    const handleClose = (e) => {
        console.log("HELLO SAFAL outside modal")
        setModalIsOpen(false);
    }

    /* const handleTabs = (e, val) => {
        console.log(e, val);
        setTabValue(val);
    } */


    return (
        <div>
            <AppBar position="static" style={{ background: '#222' }}>
                <Toolbar>
                    <Grid container spacing={24}>
                        <Grid item xs={10}>
                            <Typography type="title" color="inherit">
                                <img src={logo} alt="logo" className="header-logo"></img>
                            </Typography>
                        </Grid>

                        <Grid item xs={2} style={{ display: "flex" }}>
                            <div style={{ marginRight: 10 }}>
                                <Button raised color="primary" variant="contained" >
                                    Book Show
                                </Button>
                            </div>

                            <div>
                                <Button raised variant="contained" onClick={handleOpen}>
                                    {button}
                                </Button>
                                <ModalComponent modalIsOpen={modalIsOpen} handleOpen={handleOpen} handleClose={handleClose} />
                            </div>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
