import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './profilePage.css';
import { useUser } from '../../context/UserContext';

const ProfilePage = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [editableUser, setEditableUser] = useState({});

    useEffect(() => {
        if (user) {
            setEditableUser(user);
        }
    }, [user]);

    if (!user) {
        return <h2 className="text-center mt-5">No user information available | <a style={{ color: 'grey', textDecoration: 'none', marginLeft: '10px' }} href='/login'>Login</a></h2>;
    }

    const defaultAvatar = "https://cafefcdn.com/203337114487263232/2024/4/15/tim-cook-17131546935671543978626-1713163472868-1713163473337446631555.jpg";

    const handleLogout = () => {
        localStorage.removeItem('user');
        logout(); // Clear user from context
        navigate('/login');
    };

    const handleViewHistory = () => {
        navigate('/history');
    };

    const handleChange = (e) => {
        setEditableUser({
            ...editableUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(editableUser));
        alert('Profile updated successfully!');
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="profile-card">
                        <Card.Header className="text-center">
                            <h3>Profile Details</h3>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={4} className="text-center">
                                    <div className='avatar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                        <div className="avatar-container">
                                            <img
                                                src={editableUser.avatar || defaultAvatar}
                                                alt="User Avatar"
                                                className="profile-avatar"
                                            />
                                        </div>
                                        {editableUser.username}
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <Form>
                                        <Form.Group controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                value={editableUser.username || ''}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="email" className="mt-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={editableUser.email || ''}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="phone" className="mt-3">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={editableUser.phone || ''}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="dob" className="mt-3">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="dob"
                                                value={editableUser.dob || ''}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="gender" className="mt-3">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="gender"
                                                value={editableUser.gender || ''}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="address" className="mt-3">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                value={editableUser.address || ''}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="danger" onClick={handleLogout} className="me-3 btn-action btn1">Logout</Button>
                            <Button variant="primary" onClick={handleViewHistory} className="btn-action me-3 btn2">View Order History</Button>
                            <Button variant="success" onClick={handleSave} className="btn-action btn3">Save Changes</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
