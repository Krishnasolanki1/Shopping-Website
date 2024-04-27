import React, { useState } from 'react';
import Badge from '@mui/joy/Badge';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/Slice';
import { Link, NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Mynavbar() {
    const getdata = useSelector((state) => state.addCart.cart);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const removecart = (id) => {
        dispatch(removeCart(id));
    };

    return (
        <Navbar expand="lg" className="bg-dark sticky-top" variant="dark">
            <Container fluid>
                <Navbar.Brand>E-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to={'/'}>
                            Home
                        </Nav.Link>
                        <Nav.Link>Grocery</Nav.Link>
                        <Nav.Link>Mobiles</Nav.Link>
                        <Nav.Link>Appliances</Nav.Link>
                        <Nav.Link>Travel</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <form className="form-inline mx-4">
                        <Badge
                            badgeContent={getdata.length}
                            size="sm"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <ShoppingCartSharpIcon color="primary" sx={{ fontSize: 30, color: 'white' }} />
                        </Badge>
                    </form>
                </Navbar.Collapse>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {getdata.length ? (
                    <div className="cart_details_menu" style={{ width: '25rem', padding: '10px' }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{ width: '10rem' }}>Product Image</th>
                                    <th>Product Details</th>
                                    <th>
                                        <i className="fa-solid fa-xmark cross_img mt-3" onClick={handleClose}></i>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {getdata.map(({ image, title, quantity, price, id }) => (
                                    <tr key={id}>
                                        <td>
                                            <NavLink to={`/productdetails/${id}`} onClick={handleClose}>
                                                <img
                                                    className="mt-5"
                                                    src={image}
                                                    alt=""
                                                    style={{ width: '6rem', height: '5rem' }}
                                                />
                                            </NavLink>
                                        </td>
                                        <td>
                                            <p>{title}</p>
                                            <p>Price: ₹ {price}</p>
                                            <p>
                                                Quantity: {quantity}<br />
                                                <Badge size="lg" variant="soft" color="neutral" sx={{ borderRadius: 'none' }}>
                                                    Total Price: {price * quantity}
                                                </Badge>
                                            </p>
                                        </td>
                                        <td className="mt-5" onClick={() => removecart(id)}>
                                            <RemoveShoppingCartIcon sx={{ color: 'red', marginTop: 5 }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <div className="cart_details_menu">
                        <i className="fa-solid fa-xmark cross_img" onClick={handleClose}></i>
                        <p className="nav_para_cart">Your Cart is Empty</p>
                        <img src="\src\assets\cart img.gif" alt="cartImage" className="empty_cart_Img" />
                    </div>
                )}
            </Menu>
        </Navbar>
    );
}

export default Mynavbar;
