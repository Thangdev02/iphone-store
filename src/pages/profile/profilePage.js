import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './profilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [editableUser, setEditableUser] = useState({});
    const defaultAvatar = "https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-6/464347054_1963670810751793_6050838777297175962_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=64VKSNURAJkQ7kNvgGmWXrQ&_nc_zt=23&_nc_ht=scontent.fsgn6-2.fna&_nc_gid=ADH819judAtk9Nsu13KYhZD&oh=00_AYDkWo8M12i_MyW5vvWa6d4SdVAUMsIFLee1Fdfm8iz7wg&oe=6743F4B0";

    useEffect(() => {
        // Fetch user from cookies
        const userCookie = Cookies.get('user');
        if (userCookie) {
            const parsedUser = JSON.parse(userCookie);
            setUser(parsedUser);
            setEditableUser(parsedUser); // Set editable user data
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('user'); // Remove user cookie
        navigate('/login'); // Redirect to login page
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
        // Save changes locally (can integrate API update here)
        Cookies.set('user', JSON.stringify(editableUser), { expires: 7 });
        alert('Profile updated successfully!');
    };

    if (!user) {
        return (
            <h2 className="text-center mt-5">
                No user information available | 
                <a href="/login" style={{ color: 'grey', textDecoration: 'none', marginLeft: '10px' }}>Login</a>
            </h2>
        );
    }

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
                                    <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                        <div className="avatar-container">
                                            <img
                                                src={editableUser.avatar || defaultAvatar}
                                                alt="User Avatar"
                                                className="profile-avatar"
                                                onError={(e) => (e.target.src = defaultAvatar)}
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
