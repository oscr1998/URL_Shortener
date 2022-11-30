import { useState, useEffect } from "react";
import API from "./API"
import { ListGroup, Card, Button, Form } from "react-bootstrap";

const AddWebsite = ({ onAdd }) => {
    const [originalURL, setOriginalURL] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [linkedWebsite, setLinkedWebsite] = useState([])
}

useEffect(() => {
    refreshWebsite();
}, []);

const refreshWebsite= () => {
    API.get("/")
        .then((res) => {
            setLinkedWebsite(res.data)
        })
        .catch(console.error)
};

const onSubmit = (e) => {
    e.preventDefault();
    let item = {orignal_url, short_url}
    API.post('/', item).then(() => refreshWebsite());
}

const onUpdate = (id) => {
    let item = { orignal_url };
    API.patch(`/${id}/`, item).then((res) => refreshWebsite());
    };

const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshWebsite());
    };

    function selectWebsite(id) {
        let item = linkedWebsite.filter((linkedWebsite) => linkedWebsite.id === id)[0];
        setOriginalURL(item.orignal_url);
        setShortUrl(item.short_url);
        }

return(
    <div className="">
        <div className="">
            <div className="">
                <h3 className="float-left">Enter a website URL</h3>
                <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>{movieId}Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
                <Form.Label>Genre</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
                <Form.Label>Starring</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Starring"
                    value={starring}
                    onChange={(e) => setStarring(e.target.value)}
                    />
                </Form.Group>

            <div className="float-right">
                <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
                >
                Save
                </Button>
                <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(movieId)}
                className="mx-2"
                >
                Update
                </Button>
            </div>
        </Form>

            </div>
        </div>
    </div>
)

export default AddWebsite;
